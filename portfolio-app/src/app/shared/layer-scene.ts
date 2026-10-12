import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';

import { ThemeService } from '../core/theme.service';

/** Per-page pose of the model: horizontal offset, layer spread, rotation, tilt, scale. */
interface Pose {
  x: number;
  spread: number;
  rot: number;
  tilt: number;
  scale: number;
}

const POSES: readonly Pose[] = [
  { x: 0.55, spread: 0.95, rot: 0.6, tilt: 0, scale: 1.05 },
  { x: 0.62, spread: 0.55, rot: 1.6, tilt: 0.15, scale: 0.85 },
  { x: 0.7, spread: 1.6, rot: 2.0, tilt: 0.45, scale: 0.7 },
  { x: 0.64, spread: 1.35, rot: 2.4, tilt: -0.1, scale: 0.78 },
  { x: 0.78, spread: 0.7, rot: 3.3, tilt: 0.2, scale: 0.6 },
  { x: 0.66, spread: 1.15, rot: 4.4, tilt: 0.35, scale: 0.75 },
  { x: 0.6, spread: 0.3, rot: 5.6, tilt: 0, scale: 0.9 },
];

const LAYERS = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] as const;

/**
 * The six Feature-Sliced Design layers as a 3D stack, with pulses travelling
 * down through them (imports only flow downward) and a slow field of dust.
 * Three.js is loaded only in the browser, after the page has rendered, so the
 * prerendered HTML and the first paint never wait for it.
 */
@Component({
  selector: 'app-layer-scene',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styles: `
    :host {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      transition: opacity 0.5s ease;
    }
  `,
})
export class LayerScene {
  /** Index of the page currently in view; the model re-poses for each one. */
  readonly page = input(0);

  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly theme = inject(ThemeService);
  private readonly destroyRef = inject(DestroyRef);
  private recolor: (() => void) | null = null;

  constructor() {
    // Re-read the CSS colour tokens whenever the theme changes.
    effect(() => {
      this.theme.resolved();
      queueMicrotask(() => this.recolor?.());
    });

    afterNextRender(() => {
      void this.start();
    });
  }

  private async start(): Promise<void> {
    const THREE = await import('three');
    const canvas = this.canvas().nativeElement;
    const win = window;
    const reduced = win.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: InstanceType<typeof THREE.WebGLRenderer>;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      canvas.hidden = true; // No WebGL: the page reads fine without the model.
      return;
    }
    renderer.setPixelRatio(Math.min(win.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(9, 7.5, 11);
    camera.lookAt(0, 0, 0);

    const rig = new THREE.Group();
    scene.add(rig);

    const layers = LAYERS.map((name, i) => {
      const group = new THREE.Group();
      const geometry = new THREE.BoxGeometry(3.6, 0.08, 3.6);
      const fill = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
      });
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({ transparent: true, opacity: 0.85 }),
      );
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(2.2, 0.55),
        new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }),
      );
      label.rotation.x = -Math.PI / 2;
      label.position.set(-0.55, 0.05, 1.25);

      const points: number[] = [];
      const n = 3 + (i % 3);
      for (let x = 0; x < n; x++) {
        for (let z = 0; z < n; z++) {
          points.push(-1.2 + (2.4 * x) / (n - 1), 0.06, -1.2 + (2 * z) / (n - 1));
        }
      }
      const dotsGeometry = new THREE.BufferGeometry();
      dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      const dotsMaterial = new THREE.PointsMaterial({
        size: 0.09,
        transparent: true,
        opacity: 0.9,
      });

      group.add(
        new THREE.Mesh(geometry, fill),
        edges,
        label,
        new THREE.Points(dotsGeometry, dotsMaterial),
      );
      rig.add(group);
      return { name, group, fill, edges, label, dotsMaterial };
    });

    // Imports flow downward: pulses travel from `app` to `shared`.
    const pulses = [0, 0.33, 0.66].map((offset) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.11, 16, 16),
        new THREE.MeshBasicMaterial(),
      );
      rig.add(mesh);
      return { mesh, offset, x: Math.random() - 0.5, z: Math.random() - 0.5 };
    });
    const beamMaterial = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.35 });
    const beamGeometry = new THREE.BufferGeometry();
    rig.add(new THREE.Line(beamGeometry, beamMaterial));

    // Atmosphere: slow drifting dust around the model.
    const dustCount = win.innerWidth < 860 ? 260 : 650;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustSeeds = new Float32Array(dustCount);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 26;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      dustSeeds[i] = Math.random() * Math.PI * 2;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    const css = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const labelTexture = (text: string, color: string) => {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 128;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = color;
        ctx.font = '500 64px "JetBrains Mono", monospace';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 8, 64);
      }
      return new THREE.CanvasTexture(c);
    };

    this.recolor = () => {
      const accent = new THREE.Color(css('--accent'));
      const ink = new THREE.Color(css('--ink'));
      const warm = new THREE.Color(css('--warm'));
      layers.forEach((layer, i) => {
        layer.fill.color.copy(i === 0 ? warm : accent);
        (layer.edges.material as InstanceType<typeof THREE.LineBasicMaterial>).color.copy(ink);
        layer.dotsMaterial.color.copy(accent);
        const material = layer.label.material as InstanceType<typeof THREE.MeshBasicMaterial>;
        material.map?.dispose();
        material.map = labelTexture(layer.name, i === 0 ? css('--warm') : css('--ink-muted'));
        material.needsUpdate = true;
      });
      pulses.forEach((p) =>
        (p.mesh.material as InstanceType<typeof THREE.MeshBasicMaterial>).color.copy(warm),
      );
      beamMaterial.color.copy(accent);
      dustMaterial.color.set(css('--ink-muted'));
      renderer.render(scene, camera);
    };
    this.recolor();
    void document.fonts?.ready.then(() => this.recolor?.());

    let mouseX = 0;
    let mouseY = 0;
    const onPointer = (e: PointerEvent) => {
      mouseX = e.clientX / win.innerWidth - 0.5;
      mouseY = e.clientY / win.innerHeight - 0.5;
    };
    const onResize = () => {
      renderer.setSize(win.innerWidth, win.innerHeight, false);
      camera.aspect = win.innerWidth / win.innerHeight;
      camera.updateProjectionMatrix();
    };
    win.addEventListener('pointermove', onPointer, { passive: true });
    win.addEventListener('resize', onResize);
    onResize();

    const state: Pose = { ...POSES[0] };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const right = new THREE.Vector3();
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const time = (now - started) / 1000;
      const narrow = win.innerWidth < 860;
      const page = this.page();
      const pose = POSES[page] ?? POSES[0];
      const k = reduced ? 1 : 0.06;
      state.x = lerp(state.x, pose.x, k);
      state.spread = lerp(state.spread, pose.spread, k);
      state.rot = lerp(state.rot, pose.rot, k);
      state.tilt = lerp(state.tilt, pose.tilt, k);
      state.scale = lerp(state.scale, pose.scale, k);

      // Keep the model to the right of the text column; centred and faint on phones.
      const distance = camera.position.length();
      const halfWidth = Math.tan((camera.fov * Math.PI) / 360) * distance * camera.aspect;
      rig.position.set(0, narrow ? 1.2 : 0, 0);
      right.setFromMatrixColumn(camera.matrixWorld, 0);
      rig.position.addScaledVector(right, (narrow ? 0 : state.x) * halfWidth * 0.9);
      rig.scale.setScalar((narrow ? 0.7 : 1) * state.scale);
      rig.rotation.y = state.rot + (reduced ? 0 : time * 0.08) + mouseX * 0.4;
      rig.rotation.x = state.tilt + mouseY * 0.15;

      layers.forEach((layer, i) => {
        layer.group.position.y =
          (2.5 - i) * state.spread + (reduced ? 0 : Math.sin(time * 0.9 + i * 0.7) * 0.05);
      });
      const top = 2.5 * state.spread;
      const bottom = -2.5 * state.spread;
      beamGeometry.setFromPoints([new THREE.Vector3(0, top, 0), new THREE.Vector3(0, bottom, 0)]);
      pulses.forEach((p) => {
        const f = reduced ? p.offset : (time * 0.22 + p.offset) % 1;
        p.mesh.position.set(p.x * 1.2, lerp(top, bottom, f), p.z * 1.2);
      });

      if (!reduced) {
        const a = dustGeometry.attributes['position'].array as Float32Array;
        for (let i = 0; i < dustCount; i++) {
          a[i * 3 + 1] += 0.0035 + Math.sin(time * 0.4 + dustSeeds[i]) * 0.0015;
          a[i * 3] += Math.cos(time * 0.3 + dustSeeds[i]) * 0.0012;
          if (a[i * 3 + 1] > 8) a[i * 3 + 1] = -8;
        }
        dustGeometry.attributes['position'].needsUpdate = true;
        dust.rotation.y = mouseX * 0.12 + page * 0.18;
        dust.rotation.x = mouseY * 0.06;
      }

      canvas.style.opacity = narrow ? (page === 0 ? '0.35' : '0.12') : '1';
      renderer.render(scene, camera);
      if (!document.hidden && (!reduced || now - started < 4000)) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };
    frame = requestAnimationFrame(tick);

    // With reduced motion the loop stops; a page change still re-poses the model.
    const onVisible = () => {
      if (!document.hidden && !frame && !reduced) {
        frame = requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', onVisible);
    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(frame);
      win.removeEventListener('pointermove', onPointer);
      win.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisible);
      renderer.dispose();
      this.recolor = null;
    });
    this.redraw = () => {
      if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    };
  }

  /** Draw one more frame (used when the page changes under reduced motion). */
  private redraw: (() => void) | null = null;

  private readonly pageWatcher = effect(() => {
    this.page();
    this.redraw?.();
  });
}

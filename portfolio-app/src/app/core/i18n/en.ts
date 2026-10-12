/**
 * English is the source of truth. `uk.ts` and `pl.ts` are typed against this
 * object, so a key missing from either is a compile error, not a blank label.
 */
export const en = {
  skip: 'Skip to content',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.work': 'Work',
  'nav.hobbies': 'Off the clock',
  'nav.contact': 'Contact',
  'nav.home': 'Home',
  'nav.sections': 'Sections',
  'nav.pages': 'Pages',
  'lang.label': 'Language',
  'theme.label': 'Theme',
  'theme.light': 'Light',
  'theme.dark': 'Dark',
  'theme.dim': 'Dim',

  caption: 'Feature-Sliced Design: each layer imports only the layers below it.',

  'hero.status': 'Open to new roles in Europe',
  'hero.role': 'Senior Front-end Developer, AI Engineer and Team Lead, based in Warsaw',
  'hero.lead':
    'Seven years in frontend, three of them leading teams. I build React and Next.js products in clean layers, from the first line of markup to the release.',
  'hero.cv': 'Download CV (PDF)',
  'hero.work': 'See the work',
  'hero.cvNote': 'One page, English. Updated October 2026.',
  'hero.photo': 'Vladyslav Tesliuk',

  'about.title': 'I build in layers',
  'about.p1':
    'I started with markup: four years of client sites built solo from Figma and PSD, plus custom WordPress themes. That is why accessibility, semantics and Core Web Vitals ship by default in my work, not as a later fix.',
  'about.p2':
    'Today I work in React, Next.js and TypeScript: App Router architecture, Feature-Sliced Design in a monorepo, and the performance and release process around it. I write the backend side too when a feature needs it, so I rarely stop at the API boundary.',
  'about.p3':
    'As a team lead I care about how a team ships, not only what it ships. My latest work is an agentic AI workflow where agents implement tasks end to end and engineers review and release.',
  'facts.based': 'Based in',
  'facts.basedV': 'Warsaw, Poland',
  'facts.langs': 'Languages',
  'facts.langsV': 'English C1, Polish B1, Ukrainian native',
  'facts.edu': 'Education',
  'facts.eduV': 'Bachelor, Modern web programming and game development, KhPI, 2023–2027',

  'nav.learning': 'Learning',
  'learn.title': "What I'm learning now",
  'learn.intro':
    "React is my depth. Now I'm widening the stack toward more platforms: mobile, desktop and other web frameworks.",
  'learn.angular': 'This portfolio is built on it, and Bitrate has more Angular work.',
  'learn.svelte': 'Used in Bitrate next to React, to compare the models in practice.',
  'learn.nest': 'I already ship APIs on it. Now going deeper into its architecture.',
  'learn.rn': 'The shortest path from my React experience to mobile apps.',
  'learn.flutter': 'A second, very different take on cross-platform UI.',
  'learn.tauri': 'Small, fast desktop apps with a web front end.',

  'exp.title': "Where I've worked",
  'exp.a.role': 'Senior Front-end Developer and Team Lead',
  'exp.a.intro':
    'An outsourcing company. I worked on five client products, then stayed on GGChest and grew into its frontend team lead.',
  'exp.gg.what': 'Marketplace for in-game gold and accounts. Next.js developer, then team lead.',
  'exp.gg.1':
    'Led a team of four and owned the frontend architecture of a Next.js App Router and TypeScript monorepo: storefront and internal admin panel on Feature-Sliced Design.',
  'exp.gg.2':
    'Built an agentic AI workflow connected to Jira: agents implement tasks end to end, engineers review and release. About 70% more tasks delivered per sprint.',
  'exp.gg.3':
    'Rebuilt the build pipeline: from about 15 minutes to under one, on a growing codebase.',
  'exp.gg.4':
    'Drove performance work: bundle-size budgets, Lighthouse checks, React render profiling and real-user Core Web Vitals monitoring.',
  'exp.gg.5':
    "Onboarded nine engineers, ran the team's tech meetups and set up MSW for API mocking in tests.",
  'exp.alw.what': 'Builder that turns a website into a desktop and mobile app. Part-time.',
  'exp.alw.1':
    'Built the engine that keeps complex nested forms in sync with a live preview of the app being generated.',
  'exp.alw.2': 'Mentored developers on the team.',
  'exp.fin.what': 'Two fintech investment platforms: P2P lending and crowdfunding.',
  'exp.fin.1':
    'React and TypeScript work on investor-facing interfaces, in parallel on both products.',
  'exp.pesa.what': 'Fintech product with a legacy React codebase.',
  'exp.pesa.1':
    'Recomposed and refactored legacy components and replaced loose JavaScript types with strict TypeScript.',
  'exp.b.role': 'Front-end Developer and Team Lead',
  'exp.b.1': 'Led and mentored up to four project teams of three to six engineers in parallel.',
  'exp.b.2':
    'Built CRM systems, admin panels and marketing sites in React and Next.js, from architecture to release.',
  'exp.c.where': 'Freelance',
  'exp.c.role': 'Front-end developer: markup, then React',
  'exp.c.1':
    'Client websites end to end: responsive, cross-browser, accessible markup from Figma and PSD, and custom WordPress themes.',
  'exp.c.2':
    'From 2021, React applications for paying clients, owning the NestJS and Express API on fullstack jobs.',
  'num.years': 'years in frontend',
  'num.build': 'faster build at GGChest',
  'num.tasks': 'more tasks per sprint',
  'num.onboard': 'engineers onboarded',

  'work.title': 'Selected work',
  'work.live': 'Live',
  'work.code': 'Code',
  'work.details': 'Details',
  'work.nda': 'Under NDA',
  'work.more': 'More projects',
  'work.all': 'All projects on GitHub',

  'hob.title': 'Off the clock',
  'hob.life.title': 'Away from the keyboard',
  'hob.music.t': 'Music',
  'hob.music.p':
    'I listen a lot and make my own tracks. It is also why I am building Bitrate, a platform for musicians.',
  'hob.sport.t': 'Sport',
  'hob.sport.p':
    'Regular training keeps my head clear and my energy steady, even through long releases.',
  'hob.tech.title': 'And still IT',
  'hob.tech.intro': 'IT is my job and most of my free time too.',
  'hob.htb.t': 'Hack The Box',
  'hob.htb.p':
    'I studied cybersecurity at college and keep the habit: breaking into practice machines teaches me how the web actually fails.',
  'hob.3d.t': '3D and WebGL',
  'hob.3d.p':
    'I read Three.js and shader code for fun and want to bring it to production work. The layered model on this page is my sandbox.',
  'hob.kata.t': 'Code katas',
  'hob.kata.p': 'Short puzzles on Codewars keep algorithms sharp between real tasks.',
  'hob.auto.t': 'Automation',
  'hob.auto.p':
    'I build tools that take the boring parts off a team: agent workflows, task decomposition, scripts that run while I sleep.',

  'con.title': "Let's talk",
  'con.p':
    "I'm looking for a frontend or frontend lead role, remote or in Europe. Email is the fastest way to reach me.",
  'con.copy': 'Copy',
  'con.copied': 'Copied',
  'con.email': 'Email',
  'con.phoneEU': 'Poland and Europe',
  'con.phoneUA': 'Ukraine',
  'con.elsewhere': 'Elsewhere',

  'detail.back': 'All work',
  'detail.live': 'Open live demo',
  'detail.source': 'Source',
  'detail.aboutDemo': 'About this demo',
  'detail.noDemo': 'Why there is no demo',
  'detail.overview': 'Overview',
  'detail.highlights': 'Highlights',
  'detail.stack': 'Stack',
  'detail.screens': 'Screens',
  'detail.mobile': 'At 390px',
  'detail.previous': 'Previous',
  'detail.next': 'Next',
  'detail.others': 'Other projects',
  'detail.missing':
    'There is no project with that address. It may have been renamed since you saved the link.',
  'detail.english': 'Project descriptions are in English.',

  'nf.title': 'Page not found',
  'nf.body': 'This address does not lead anywhere on this site.',
  'nf.home': 'Back to the home page',

  'nf.all': 'See all work',
  'nf.suggest': 'Or start with these',

  'foot.line': 'Built with Angular and Three.js. Hosted on GitHub Pages.',
} as const;

export type MessageKey = keyof typeof en;
export type Messages = Record<MessageKey, string>;

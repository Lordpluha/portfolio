// GENERATED FILE — produced by tools/build_media.py from the raw
// project screenshots. Do not edit by hand.

export interface ImageSource {
  readonly w: number;
  readonly h: number;
  readonly src: string;
}

export interface Shot {
  readonly label: string;
  readonly alt: string;
  readonly sources: readonly ImageSource[];
  readonly ratio: number;
}

export interface CardImage {
  readonly sources: readonly ImageSource[];
  readonly alt: string;
}

export interface ProjectMedia {
  readonly card: CardImage | null;
  readonly desktop: readonly Shot[];
  readonly mobile: readonly Shot[];
}

export const PROJECT_MEDIA: Readonly<Record<string, ProjectMedia>> = {
  "chronos": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/chronos/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/chronos/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/chronos/card-1280.webp"
        }
      ],
      "alt": "Chronos \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Account",
        "alt": "Chronos \u2014 account screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-account-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-account-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Calendar",
        "alt": "Chronos \u2014 calendar screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-calendar-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-calendar-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Create event",
        "alt": "Chronos \u2014 create event screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-create-event-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-create-event-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Day",
        "alt": "Chronos \u2014 day screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-day-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-day-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Event modal",
        "alt": "Chronos \u2014 event modal screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-event-modal-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-event-modal-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Landing",
        "alt": "Chronos \u2014 landing screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-landing-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-landing-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Login",
        "alt": "Chronos \u2014 login screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-login-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-login-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Own event modal",
        "alt": "Chronos \u2014 own event modal screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-own-event-modal-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-own-event-modal-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Reminders",
        "alt": "Chronos \u2014 reminders screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-reminders-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-reminders-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Tasks",
        "alt": "Chronos \u2014 tasks screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-tasks-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-tasks-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Tasks list",
        "alt": "Chronos \u2014 tasks list screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-tasks-list-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-tasks-list-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Week",
        "alt": "Chronos \u2014 week screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/chronos/chronos-week-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/chronos/chronos-week-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Chronos \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/chronos/chronos-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Account",
        "alt": "Chronos \u2014 account screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/chronos/chronos-account-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Calendar",
        "alt": "Chronos \u2014 calendar screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/chronos/chronos-calendar-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Landing",
        "alt": "Chronos \u2014 landing screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/chronos/chronos-landing-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Login",
        "alt": "Chronos \u2014 login screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/chronos/chronos-login-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Reminders",
        "alt": "Chronos \u2014 reminders screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/chronos/chronos-reminders-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Tasks",
        "alt": "Chronos \u2014 tasks screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/chronos/chronos-tasks-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "uevent": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/uevent/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/uevent/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/uevent/card-1280.webp"
        }
      ],
      "alt": "uEvent \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Checkout",
        "alt": "uEvent \u2014 checkout screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-checkout-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-checkout-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Checkout review",
        "alt": "uEvent \u2014 checkout review screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-checkout-review-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-checkout-review-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Checkout success",
        "alt": "uEvent \u2014 checkout success screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-checkout-success-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-checkout-success-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Comments",
        "alt": "uEvent \u2014 comments screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-comments-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-comments-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Dashboard",
        "alt": "uEvent \u2014 dashboard screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-dashboard-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-dashboard-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Demo checkout",
        "alt": "uEvent \u2014 demo checkout screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-demo-checkout-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-demo-checkout-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Event",
        "alt": "uEvent \u2014 event screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-event-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-event-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Event create",
        "alt": "uEvent \u2014 event create screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-event-create-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-event-create-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Events",
        "alt": "uEvent \u2014 events screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-events-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-events-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Home",
        "alt": "uEvent \u2014 home screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-home-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-home-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Notifications",
        "alt": "uEvent \u2014 notifications screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-notifications-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-notifications-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Organisation",
        "alt": "uEvent \u2014 organisation screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-org-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-org-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Organisations",
        "alt": "uEvent \u2014 organisations screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-orgs-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-orgs-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Organization",
        "alt": "uEvent \u2014 organization screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-organization-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-organization-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Overview (dark theme)",
        "alt": "uEvent \u2014 overview (dark theme) screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-dark-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-dark-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Profile",
        "alt": "uEvent \u2014 profile screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-profile-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-profile-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Promo codes",
        "alt": "uEvent \u2014 promo codes screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-promo-codes-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-promo-codes-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Settings",
        "alt": "uEvent \u2014 settings screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-settings-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-settings-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Ukrainian locale",
        "alt": "uEvent \u2014 ukrainian locale screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-ua-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-ua-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "User",
        "alt": "uEvent \u2014 user screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-user-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-user-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Withdrawal",
        "alt": "uEvent \u2014 withdrawal screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/uevent/uevent-withdrawal-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/uevent/uevent-withdrawal-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "uEvent \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Event",
        "alt": "uEvent \u2014 event screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-event-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Events",
        "alt": "uEvent \u2014 events screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-events-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Home",
        "alt": "uEvent \u2014 home screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-home-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Organisation",
        "alt": "uEvent \u2014 organisation screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-org-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Organisations",
        "alt": "uEvent \u2014 organisations screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-orgs-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Profile",
        "alt": "uEvent \u2014 profile screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-profile-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Settings",
        "alt": "uEvent \u2014 settings screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-settings-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "User",
        "alt": "uEvent \u2014 user screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/uevent/uevent-user-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "usof": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/usof/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/usof/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/usof/card-1280.webp"
        }
      ],
      "alt": "USOF \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Bookmarks",
        "alt": "USOF \u2014 bookmarks screen",
        "sources": [
          {
            "w": 640,
            "h": 783,
            "src": "img/usof/usof-bookmarks-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1566,
            "src": "img/usof/usof-bookmarks-1440-1280.webp"
          }
        ],
        "ratio": 0.8173
      },
      {
        "label": "Categories",
        "alt": "USOF \u2014 categories screen",
        "sources": [
          {
            "w": 640,
            "h": 548,
            "src": "img/usof/usof-categories-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1096,
            "src": "img/usof/usof-categories-1440-1280.webp"
          }
        ],
        "ratio": 1.1679
      },
      {
        "label": "Landing",
        "alt": "USOF \u2014 landing screen",
        "sources": [
          {
            "w": 640,
            "h": 1806,
            "src": "img/usof/usof-landing-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 3612,
            "src": "img/usof/usof-landing-1440-1280.webp"
          }
        ],
        "ratio": 0.3544
      },
      {
        "label": "New post",
        "alt": "USOF \u2014 new post screen",
        "sources": [
          {
            "w": 640,
            "h": 679,
            "src": "img/usof/usof-newpost-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1358,
            "src": "img/usof/usof-newpost-1440-1280.webp"
          }
        ],
        "ratio": 0.9424
      },
      {
        "label": "New post filled",
        "alt": "USOF \u2014 new post filled screen",
        "sources": [
          {
            "w": 640,
            "h": 679,
            "src": "img/usof/usof-newpost-filled-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1358,
            "src": "img/usof/usof-newpost-filled-1440-1280.webp"
          }
        ],
        "ratio": 0.9424
      },
      {
        "label": "Notifications",
        "alt": "USOF \u2014 notifications screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/usof/usof-notifications-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/usof/usof-notifications-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Post",
        "alt": "USOF \u2014 post screen",
        "sources": [
          {
            "w": 640,
            "h": 1037,
            "src": "img/usof/usof-post-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 2075,
            "src": "img/usof/usof-post-1440-1280.webp"
          }
        ],
        "ratio": 0.617
      },
      {
        "label": "Profile",
        "alt": "USOF \u2014 profile screen",
        "sources": [
          {
            "w": 640,
            "h": 683,
            "src": "img/usof/usof-profile-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1366,
            "src": "img/usof/usof-profile-1440-1280.webp"
          }
        ],
        "ratio": 0.9369
      },
      {
        "label": "User",
        "alt": "USOF \u2014 user screen",
        "sources": [
          {
            "w": 640,
            "h": 778,
            "src": "img/usof/usof-user-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1556,
            "src": "img/usof/usof-user-1440-1280.webp"
          }
        ],
        "ratio": 0.8229
      }
    ],
    "mobile": [
      {
        "label": "Bookmarks",
        "alt": "USOF \u2014 bookmarks screen",
        "sources": [
          {
            "w": 390,
            "h": 2934,
            "src": "img/usof/usof-bookmarks-390-390.webp"
          }
        ],
        "ratio": 0.1329
      },
      {
        "label": "Categories",
        "alt": "USOF \u2014 categories screen",
        "sources": [
          {
            "w": 390,
            "h": 2577,
            "src": "img/usof/usof-categories-390-390.webp"
          }
        ],
        "ratio": 0.1513
      },
      {
        "label": "Feed",
        "alt": "USOF \u2014 feed screen",
        "sources": [
          {
            "w": 390,
            "h": 6297,
            "src": "img/usof/usof-feed-390-390.webp"
          }
        ],
        "ratio": 0.0619
      },
      {
        "label": "Landing",
        "alt": "USOF \u2014 landing screen",
        "sources": [
          {
            "w": 390,
            "h": 6371,
            "src": "img/usof/usof-landing-390-390.webp"
          }
        ],
        "ratio": 0.0612
      },
      {
        "label": "New post",
        "alt": "USOF \u2014 new post screen",
        "sources": [
          {
            "w": 390,
            "h": 2116,
            "src": "img/usof/usof-newpost-390-390.webp"
          }
        ],
        "ratio": 0.1843
      },
      {
        "label": "Post",
        "alt": "USOF \u2014 post screen",
        "sources": [
          {
            "w": 390,
            "h": 4514,
            "src": "img/usof/usof-post-390-390.webp"
          }
        ],
        "ratio": 0.0864
      },
      {
        "label": "Profile",
        "alt": "USOF \u2014 profile screen",
        "sources": [
          {
            "w": 390,
            "h": 2971,
            "src": "img/usof/usof-profile-390-390.webp"
          }
        ],
        "ratio": 0.1313
      },
      {
        "label": "User",
        "alt": "USOF \u2014 user screen",
        "sources": [
          {
            "w": 390,
            "h": 2936,
            "src": "img/usof/usof-user-390-390.webp"
          }
        ],
        "ratio": 0.1328
      }
    ]
  },
  "card-game": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/card-game/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/card-game/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/card-game/card-1280.webp"
        }
      ],
      "alt": "Wasteland Warlords \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Battle",
        "alt": "Wasteland Warlords \u2014 battle screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-battle-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-battle-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Battle",
        "alt": "Wasteland Warlords \u2014 battle screen",
        "sources": [
          {
            "w": 640,
            "h": 655,
            "src": "img/card-game/card-game-battle-390-640.webp"
          }
        ],
        "ratio": 0.9775
      },
      {
        "label": "Battle over",
        "alt": "Wasteland Warlords \u2014 battle over screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-battle-over-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-battle-over-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Battle round",
        "alt": "Wasteland Warlords \u2014 battle round screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-battle-round-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-battle-round-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Card detail",
        "alt": "Wasteland Warlords \u2014 card detail screen",
        "sources": [
          {
            "w": 640,
            "h": 533,
            "src": "img/card-game/card-game-carddetail-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1067,
            "src": "img/card-game/card-game-carddetail-1440-1280.webp"
          }
        ],
        "ratio": 1.2
      },
      {
        "label": "Collection",
        "alt": "Wasteland Warlords \u2014 collection screen",
        "sources": [
          {
            "w": 640,
            "h": 587,
            "src": "img/card-game/card-game-collection-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1173,
            "src": "img/card-game/card-game-collection-1440-1280.webp"
          }
        ],
        "ratio": 1.0909
      },
      {
        "label": "Connect",
        "alt": "Wasteland Warlords \u2014 connect screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-connect-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-connect-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Lobby",
        "alt": "Wasteland Warlords \u2014 lobby screen",
        "sources": [
          {
            "w": 640,
            "h": 740,
            "src": "img/card-game/card-game-lobby-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 1480,
            "src": "img/card-game/card-game-lobby-1440-1280.webp"
          }
        ],
        "ratio": 0.8649
      },
      {
        "label": "Login",
        "alt": "Wasteland Warlords \u2014 login screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-login-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-login-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Pack",
        "alt": "Wasteland Warlords \u2014 pack screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-pack-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-pack-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Profile",
        "alt": "Wasteland Warlords \u2014 profile screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-profile-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-profile-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Register",
        "alt": "Wasteland Warlords \u2014 register screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/card-game/card-game-register-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/card-game/card-game-register-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Collection",
        "alt": "Wasteland Warlords \u2014 collection screen",
        "sources": [
          {
            "w": 390,
            "h": 2912,
            "src": "img/card-game/card-game-collection-390-390.webp"
          }
        ],
        "ratio": 0.1339
      },
      {
        "label": "Connect",
        "alt": "Wasteland Warlords \u2014 connect screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/card-game/card-game-connect-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Lobby",
        "alt": "Wasteland Warlords \u2014 lobby screen",
        "sources": [
          {
            "w": 390,
            "h": 3089,
            "src": "img/card-game/card-game-lobby-390-390.webp"
          }
        ],
        "ratio": 0.1263
      },
      {
        "label": "Login",
        "alt": "Wasteland Warlords \u2014 login screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/card-game/card-game-login-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Menu",
        "alt": "Wasteland Warlords \u2014 menu screen",
        "sources": [
          {
            "w": 390,
            "h": 1760,
            "src": "img/card-game/card-game-menu-390-390.webp"
          }
        ],
        "ratio": 0.2216
      },
      {
        "label": "Profile",
        "alt": "Wasteland Warlords \u2014 profile screen",
        "sources": [
          {
            "w": 390,
            "h": 1126,
            "src": "img/card-game/card-game-profile-390-390.webp"
          }
        ],
        "ratio": 0.3464
      },
      {
        "label": "Register",
        "alt": "Wasteland Warlords \u2014 register screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/card-game/card-game-register-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "gameblog": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/gameblog/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/gameblog/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/gameblog/card-1280.webp"
        }
      ],
      "alt": "GameBlog \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Games",
        "alt": "GameBlog \u2014 games screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/gameblog/gameblog-games-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/gameblog/gameblog-games-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Light theme",
        "alt": "GameBlog \u2014 light theme screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/gameblog/gameblog-lighttheme-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/gameblog/gameblog-lighttheme-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Theme menu",
        "alt": "GameBlog \u2014 theme menu screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/gameblog/gameblog-thememenu-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/gameblog/gameblog-thememenu-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "GameBlog \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/gameblog/gameblog-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Menu",
        "alt": "GameBlog \u2014 menu screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/gameblog/gameblog-menu-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "amazon-tables": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/amazon-tables/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/amazon-tables/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/amazon-tables/card-1280.webp"
        }
      ],
      "alt": "Amazon Tables \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Campaigns 1",
        "alt": "Amazon Tables \u2014 campaigns 1 screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/amazon-tables/amazon-tables-Campaigns-1-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/amazon-tables/amazon-tables-Campaigns-1-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Drill-down campaigns",
        "alt": "Amazon Tables \u2014 drill-down campaigns screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/amazon-tables/amazon-tables-drill-campaigns-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/amazon-tables/amazon-tables-drill-campaigns-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Drill-down profiles",
        "alt": "Amazon Tables \u2014 drill-down profiles screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/amazon-tables/amazon-tables-drill-profiles-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/amazon-tables/amazon-tables-drill-profiles-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Profiles 1",
        "alt": "Amazon Tables \u2014 profiles 1 screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/amazon-tables/amazon-tables-Profiles-1-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/amazon-tables/amazon-tables-Profiles-1-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Amazon Tables \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/amazon-tables/amazon-tables-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Campaigns 1",
        "alt": "Amazon Tables \u2014 campaigns 1 screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/amazon-tables/amazon-tables-Campaigns-1-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Profiles 1",
        "alt": "Amazon Tables \u2014 profiles 1 screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/amazon-tables/amazon-tables-Profiles-1-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "cabhub": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/cabhub/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/cabhub/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/cabhub/card-1280.webp"
        }
      ],
      "alt": "CabHUB \u2014 screenshot of the project interface"
    },
    "desktop": [],
    "mobile": [
      {
        "label": "Overview",
        "alt": "CabHUB \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 6854,
            "src": "img/cabhub/cabhub-390-390.webp"
          }
        ],
        "ratio": 0.0569
      }
    ]
  },
  "hellome-money-landing": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/hellome-money-landing/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/hellome-money-landing/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/hellome-money-landing/card-1280.webp"
        }
      ],
      "alt": "HelloMe Money \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Overview",
        "alt": "HelloMe Money \u2014 overview screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/hellome-money-landing/hellome-money-landing-404-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/hellome-money-landing/hellome-money-landing-404-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Footer",
        "alt": "HelloMe Money \u2014 footer screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/hellome-money-landing/hellome-money-landing-footer-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/hellome-money-landing/hellome-money-landing-footer-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "HelloMe Money \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/hellome-money-landing/hellome-money-landing-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "zerno": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/zerno/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/zerno/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/zerno/card-1280.webp"
        }
      ],
      "alt": "ZERNO \u2014 screenshot of the project interface"
    },
    "desktop": [],
    "mobile": [
      {
        "label": "Overview",
        "alt": "ZERNO \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 4837,
            "src": "img/zerno/zerno-390-390.webp"
          },
          {
            "w": 704,
            "h": 8731,
            "src": "img/zerno/zerno-390-704.webp"
          }
        ],
        "ratio": 0.0806
      }
    ]
  },
  "boostfolia": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/boostfolia/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/boostfolia/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/boostfolia/card-1280.webp"
        }
      ],
      "alt": "Boostfolia \u2014 screenshot of the project interface"
    },
    "desktop": [],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Boostfolia \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/boostfolia/boostfolia-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "carstore": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/carstore/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/carstore/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/carstore/card-1280.webp"
        }
      ],
      "alt": "CarStore \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Overview (dark theme)",
        "alt": "CarStore \u2014 overview (dark theme) screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/carstore/carstore-1440-dark-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/carstore/carstore-1440-dark-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "CarStore \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/carstore/carstore-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "lian": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/lian/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/lian/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/lian/card-1280.webp"
        }
      ],
      "alt": "LIAN \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "About",
        "alt": "LIAN \u2014 about screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/lian/lian-about-index-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/lian/lian-about-index-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Blog",
        "alt": "LIAN \u2014 blog screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/lian/lian-blog-index-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/lian/lian-blog-index-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Portfolio",
        "alt": "LIAN \u2014 portfolio screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/lian/lian-portfolio-index-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/lian/lian-portfolio-index-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Portfolio details",
        "alt": "LIAN \u2014 portfolio details screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/lian/lian-portfolio-details-index-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/lian/lian-portfolio-details-index-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "LIAN \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/lian/lian-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "About",
        "alt": "LIAN \u2014 about screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/lian/lian-about-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Blog",
        "alt": "LIAN \u2014 blog screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/lian/lian-blog-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Portfolio",
        "alt": "LIAN \u2014 portfolio screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/lian/lian-portfolio-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Portfolio details",
        "alt": "LIAN \u2014 portfolio details screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/lian/lian-portfolio-details-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "cube": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/cube/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/cube/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/cube/card-1280.webp"
        }
      ],
      "alt": "Cube \u2014 screenshot of the project interface"
    },
    "desktop": [],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Cube \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/cube/cube-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "fesco": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/fesco/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/fesco/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/fesco/card-1280.webp"
        }
      ],
      "alt": "Fesco \u2014 screenshot of the project interface"
    },
    "desktop": [],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Fesco \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/fesco/fesco-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "sublime": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/sublime/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/sublime/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/sublime/card-1280.webp"
        }
      ],
      "alt": "Sublime \u2014 screenshot of the project interface"
    },
    "desktop": [],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Sublime \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/sublime/sublime-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "fnd": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/fnd/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/fnd/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/fnd/card-1280.webp"
        }
      ],
      "alt": "FND \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Nav open",
        "alt": "FND \u2014 nav open screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/fnd/fnd-nav-open-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/fnd/fnd-nav-open-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "News",
        "alt": "FND \u2014 news screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/fnd/fnd-news-index-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/fnd/fnd-news-index-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Post",
        "alt": "FND \u2014 post screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/fnd/fnd-post-index-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/fnd/fnd-post-index-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Services",
        "alt": "FND \u2014 services screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/fnd/fnd-services-index-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/fnd/fnd-services-index-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "FND \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/fnd/fnd-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "News",
        "alt": "FND \u2014 news screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/fnd/fnd-news-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Post",
        "alt": "FND \u2014 post screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/fnd/fnd-post-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Services",
        "alt": "FND \u2014 services screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/fnd/fnd-services-index-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "messenger-layout": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/messenger-layout/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/messenger-layout/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/messenger-layout/card-1280.webp"
        }
      ],
      "alt": "Messenger UI \u2014 screenshot of the project interface"
    },
    "desktop": [],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Messenger UI \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/messenger-layout/messenger-layout-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "gulp-template": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/gulp-template/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/gulp-template/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/gulp-template/card-1280.webp"
        }
      ],
      "alt": "Gulp Starter \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Demo",
        "alt": "Gulp Starter \u2014 demo screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/gulp-template/gulp-template-demo_-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/gulp-template/gulp-template-demo_-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Demo (dark theme)",
        "alt": "Gulp Starter \u2014 demo (dark theme) screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/gulp-template/gulp-template-demo_-1440-dark-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/gulp-template/gulp-template-demo_-1440-dark-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Overview (dark theme)",
        "alt": "Gulp Starter \u2014 overview (dark theme) screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/gulp-template/gulp-template-1440-dark-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/gulp-template/gulp-template-1440-dark-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Gulp Starter \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/gulp-template/gulp-template-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Demo",
        "alt": "Gulp Starter \u2014 demo screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/gulp-template/gulp-template-demo_-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "webpack-template": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 400,
          "src": "img/webpack-template/card-640.webp"
        },
        {
          "w": 960,
          "h": 600,
          "src": "img/webpack-template/card-960.webp"
        },
        {
          "w": 1280,
          "h": 800,
          "src": "img/webpack-template/card-1280.webp"
        }
      ],
      "alt": "Webpack Starter \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Demo",
        "alt": "Webpack Starter \u2014 demo screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/webpack-template/webpack-template-demo_-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/webpack-template/webpack-template-demo_-1440-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Demo (dark theme)",
        "alt": "Webpack Starter \u2014 demo (dark theme) screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/webpack-template/webpack-template-demo_-1440-dark-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/webpack-template/webpack-template-demo_-1440-dark-1280.webp"
          }
        ],
        "ratio": 1.6
      },
      {
        "label": "Overview (dark theme)",
        "alt": "Webpack Starter \u2014 overview (dark theme) screen",
        "sources": [
          {
            "w": 640,
            "h": 400,
            "src": "img/webpack-template/webpack-template-1440-dark-640.webp"
          },
          {
            "w": 1280,
            "h": 800,
            "src": "img/webpack-template/webpack-template-1440-dark-1280.webp"
          }
        ],
        "ratio": 1.6
      }
    ],
    "mobile": [
      {
        "label": "Overview",
        "alt": "Webpack Starter \u2014 overview screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/webpack-template/webpack-template-390-390.webp"
          }
        ],
        "ratio": 0.4621
      },
      {
        "label": "Demo",
        "alt": "Webpack Starter \u2014 demo screen",
        "sources": [
          {
            "w": 390,
            "h": 844,
            "src": "img/webpack-template/webpack-template-demo_-390-390.webp"
          }
        ],
        "ratio": 0.4621
      }
    ]
  },
  "supply-chain-admin-panel": {
    "card": {
      "sources": [
        {
          "w": 640,
          "h": 337,
          "src": "img/supply-chain-admin-panel/card-640.webp"
        },
        {
          "w": 960,
          "h": 505,
          "src": "img/supply-chain-admin-panel/card-960.webp"
        },
        {
          "w": 1280,
          "h": 674,
          "src": "img/supply-chain-admin-panel/card-1280.webp"
        }
      ],
      "alt": "Supply Chain Admin Panel \u2014 screenshot of the project interface"
    },
    "desktop": [
      {
        "label": "Country",
        "alt": "Supply Chain Admin Panel \u2014 country screen",
        "sources": [
          {
            "w": 640,
            "h": 337,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-country-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 674,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-country-1440-1280.webp"
          }
        ],
        "ratio": 1.8995
      },
      {
        "label": "Map (dark theme)",
        "alt": "Supply Chain Admin Panel \u2014 map (dark theme) screen",
        "sources": [
          {
            "w": 640,
            "h": 337,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-map-dark-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 674,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-map-dark-1440-1280.webp"
          }
        ],
        "ratio": 1.8995
      },
      {
        "label": "Production",
        "alt": "Supply Chain Admin Panel \u2014 production screen",
        "sources": [
          {
            "w": 640,
            "h": 337,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-production-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 674,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-production-1440-1280.webp"
          }
        ],
        "ratio": 1.8995
      },
      {
        "label": "Roles",
        "alt": "Supply Chain Admin Panel \u2014 roles screen",
        "sources": [
          {
            "w": 640,
            "h": 337,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-roles-1440-640.webp"
          },
          {
            "w": 1280,
            "h": 674,
            "src": "img/supply-chain-admin-panel/supply-chain-admin-panel-roles-1440-1280.webp"
          }
        ],
        "ratio": 1.8995
      }
    ],
    "mobile": []
  }
} as const;

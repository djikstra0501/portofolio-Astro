# Portofolio-Astro

Source for [portofolio.dananjaya.my.id](https://portofolio.dananjaya.my.id) — a
static portfolio site, self-hosted on a Proxmox LXC and served to the public
through a Cloudflare Tunnel.

Built with [Astro](https://astro.build). No UI framework, no CSS framework —
scoped component styles and a small set of CSS custom properties.

---

## Stack

| Layer | Choice | Why |
| :--- | :--- | :--- |
| Framework | Astro (static output) | Ships zero JavaScript by default; the page is content, so it should be HTML |
| Styling | Scoped CSS + custom properties | One accent colour and a fixed type scale don't justify a framework |
| Type | Bricolage Grotesque / Inter Tight / IBM Plex Mono | Display, body, and a mono face reserved for numbers and labels |
| Hosting | Proxmox LXC + nginx | Self-managed rather than a PaaS, deliberately — see below |
| Ingress | Cloudflare Tunnel | No open inbound ports on the host network |
| CI/CD | GitHub Actions, self-hosted runner | Push to `main` deploys; the runner dials out, nothing listens in |

## Project structure

```text
/
├── public/                  # static assets served as-is
├── src/
│   ├── components/
│   │   ├── Hero.astro       # detection-frame treatment on the name
│   │   ├── ProjectCard.astro
│   │   ├── Capabilities.astro
│   │   ├── Timeline.astro
│   │   ├── Section.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── projects.ts      # project content, typed
│   │   └── profile.ts       # bio, capabilities, timeline
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css       # design tokens live here
└── .github/workflows/
    └── deploy.yml
```

Content is separated from presentation on purpose: adding a project means
editing `src/data/projects.ts`, not touching markup.

## Local development

```sh
npm ci
npm run dev      # http://localhost:4321
```

| Command | Action |
| :--- | :--- |
| `npm ci` | Install from the lockfile |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Static build to `./dist/` |
| `npm run preview` | Serve the built output locally |

> **Keep the build static.** Adding an API route or a server adapter switches
> Astro to SSR, which emits `dist/client/` + `dist/server/` instead of
> `dist/index.html`. nginx serves a directory root here, so that combination
> produces a 403. The deploy workflow asserts `dist/index.html` exists and
> fails the run rather than publishing a broken tree.

## Deployment

```
push to main
   └─> GitHub Actions
         └─> self-hosted runner (Proxmox LXC, non-root user)
               ├─ npm ci
               ├─ npm run build
               ├─ assert dist/index.html
               └─ rsync --delete dist/ -> nginx web root
```

Requests reach the site as:

```
Visitor -> Cloudflare edge -> tunnel LXC (cloudflared) -> portfolio LXC (nginx)
```

Notes on the setup:

- The runner opens an **outbound** connection to GitHub, so no inbound port,
  no webhook endpoint, and no deploy key on the box.
- The build runs in the runner's workspace and only the finished `dist/` is
  rsynced, so a failed build leaves the live site untouched.
- The runner executes as a dedicated non-root user that owns the web root;
  nginx reads it as `www-data`. Nothing in the pipeline needs `sudo`.
- `rsync -rlptD` rather than `-a` — a non-root user can't preserve ownership,
  and it doesn't need to.

## Licence

No licence granted. The code, written content and design are © I Kadek Dipastra
Arka Dananjaya — please don't redeploy this as your own portfolio.
export type Project = {
  id: string;
  title: string;
  kind: "Research" | "Applied ML" | "Platform" | "Analysis";
  year: string;
  role: string;
  summary: string;
  detail: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  links?: { label: string; href: string }[];
  status?: string;
  featured?: boolean;
  imageAlt?: string;
};

export const isPlaceholder = (value: string) => value.startsWith("TODO");

export const projects: Project[] = [
  {
    id: "daya-yolo",
    title: "DaYa-YOLO — dual-branch detector for rice pest & disease",
    kind: "Research",
    year: "2025–2026",
    role: "Lead Author · Architecture, Training, Evaluation",
    summary:
      "A two-branch object detection architecture that feeds a chromatic feature encoder alongside a YOLO11n backbone, built to hold accuracy on 13 rice pest and disease classes while still running on a Jetson Nano.",
    detail:
      "Most field-deployable detectors lose small-lesion classes when you shrink them for edge hardware. DaYa-YOLO adds a Chromatic Feature Encoder as an auxiliary branch with two variants, one operating in CIELAB and one in CIEXYZ, so colour information that a standard RGB backbone flattens stays available to the detection head. Every result is reported as a mean across three training seeds rather than a single lucky run, and localisation was validated with a box-conditioned Grad-CAM rather than a class-agnostic saliency method, because class-agnostic maps kept peaking on background sky instead of the lesion.",
    metrics: [
      { label: "classes", value: "13" },
      { label: "seeds", value: "5 (0/14/42/56/81)" },
      { label: "target", value: "Jetson Nano" },
      { label: "mAP@50", value: "72.4%" },
    ],
    tech: ["PyTorch", "YOLO11", "Grad-CAM", "Roboflow", "CUDA / T4"],
    links: [{ label: "Code", href: "https://github.com/djikstra0501/DaYa-YOLO" }],
    imageAlt:
      "DaYa-YOLO detections on a rice plant image, with bounding boxes and class labels",
    status: "Journal manuscript in review",
    featured: true,
  },
  {
    id: "ndvi-drone",
    title: "NDVI clustering for drone inspection routing",
    kind: "Applied ML",
    year: "2026",
    role: "Modelling & deployment",
    summary:
      "Turns raw drone imagery into a GPS-enabled ground inspection points by clustering NDVI response, served as a containerised endpoint on Google Cloud Run.",
    detail:
      "Field teams cannot walk an entire plantation. This model reads multispectral drone captures, computes NDVI, and clusters the low-vigour regions into a ranked set of coordinates worth physically visiting, converting a whole-field image into a route. Packaged as a container and deployed to Cloud Run so the research group can call it without standing up a GPU box.",
    metrics: [
      { label: "input", value: "UAV imagery" },
      { label: "serving", value: "Cloud Run" },
      { label: "output", value: "GPS inspection points" },
    ],
    tech: ["Python", "GCP Cloud Run", "Docker", "Rasterio", "scikit-learn"],
    imageAlt:
      "Result map of a plantation divided into a grid, with low-vigour NDVI regions marked",
    status: "Patent filed",
    featured: true,
  },
  {
    id: "voltscout",
    title: "VoltScout — field intelligence for EV charging networks",
    kind: "Platform",
    year: "2026",
    role: "Solo · Design, backend, frontend",
    summary:
      "A role-scoped web platform for what a charger cannot report about itself: a car parked in the bay, a cut cable, a rival site under construction. Field engineers file from a phone, supervisors close the issues, and national reads everything on one map.",
    detail:
      "The interesting part is access, not screens. Every scope (one zone, one territory, everything) is defined in a single method, and the server works out each record's location from the chosen site instead of trusting what the form sent. Evidence photos sit in private storage and are served through a route that checks the viewer's coverage. Reports carry an observation date separate from the day they were entered, because engineers often file after leaving a basement car park with no signal. The data is seeded, and no session or uptime figures are simulated, since that would be invented analysis.",
    metrics: [
      { label: "access tiers", value: "3" },
      { label: "report types", value: "4" },
      { label: "seeded sites", value: "86" },
    ],
    tech: ["Laravel 12", "MySQL", "Alpine.js", "Tailwind 4", "Leaflet"],
    links: [
      { label: "Code", href: "https://github.com/djikstra0501/VoltScout" }, 
      // { label: "Demo video", href: "TODO-voltscout-demo-video-url" },
    ],
    imageAlt:
      "VoltScout national map with clustered charging sites coloured by open issues, beside an issue summary",
  },
  {
    id: "bloome-craft",
    title: "Bloome Craft — flower shop catalogue and bookkeeping",
    kind: "Platform",
    year: "2026",
    role: "Solo · Design, backend, frontend, deployment",
    summary:
      "A public catalogue and a private owner dashboard for a real flower shop, running entirely on Cloudflare's edge network.",
    detail:
      "Built for an actual small business, so the constraints were practical. Passwords use PBKDF2 through Web Crypto because bcrypt cannot run on Cloudflare Workers, with the iteration count tuned to the free tier's CPU limit. Recording a sale writes the sale and its derived costs in one atomic batch, so a failed write cannot leave half a transaction in the ledger. It deploys from Git through Workers Builds onto a custom domain.",
    metrics: [
      { label: "runtime", value: "Cloudflare Workers" },
      { label: "database", value: "D1" },
      { label: "status", value: "Live" },
    ],
    tech: ["SvelteKit", "Cloudflare Workers", "D1", "Web Crypto"],
    links: [
      { label: "Live site", href: "https://bloomecraft.dananjaya.my.id/" },
      { label: "Code", href: "https://github.com/djikstra0501/bloome-svelte-cloudflare" },
    ],
    imageAlt: "Bloome Craft storefront catalogue showing flower arrangements",
  },
  {
    id: "geosales",
    title: "GeoSales Analytics Platform",
    kind: "Platform",
    year: "2025 · Internship",
    role: "Backend & Data Model Owner",
    summary:
      "Multi-role, geo-enabled dashboard that pulls field visits, competitor sightings, outlet performance and complaint tickets into one monitoring view for sales ops and management.",
    detail:
      "Four separate reporting streams previously lived in four separate spreadsheets. I designed the relational schema and built the backend that normalises them, then exposed role-scoped views so a field supervisor and a regional manager open the same URL and see the slice each one is accountable for. Geospatial joins let outlet performance be read against territory rather than against a flat list.",
    metrics: [
      { label: "roles", value: "multi-tier" },
      { label: "streams", value: "4 unified" },
      { label: "owned", value: "schema + API" },
    ],
    tech: ["Laravel", "MySQL", "REST API", "Tailwind", "Geospatial queries"],
  },
  {
    id: "internship-mgmt",
    title: "Internship Application & Management System",
    kind: "Platform",
    year: "2025 · Internship",
    role: "Backend & Database",
    summary:
      "End-to-end workflow for internship intake. Application submission, review states, placement records and reporting in one platform, replacing a manual, document-driven process.",
    detail:
      "The interesting part was state, not CRUD: an application moves through submission, verification, placement and completion, and each transition has different actors and different validity rules. I modelled that as an explicit workflow in the schema instead of a status string that anyone could set to anything.",
    metrics: [
      { label: "workflow", value: "4 stages" },
      { label: "owned", value: "backend + DB" },
    ],
    tech: ["Laravel", "MySQL", "REST API", "HRIT"],
  },
  {
    id: "hiv-forecast",
    title: "HIV Case Forecasting — Brown vs Holt",
    kind: "Analysis",
    year: "2024-2026",
    role: "Solo",
    summary:
      "Comparative time-series study of Brown's and Holt's double exponential smoothing on public HIV case counts, evaluated on forecast error rather than in-sample fit.",
    detail:
      "Brown's method assumes a single smoothing constant for level and trend while Holt's separates them. On a series with a shifting trend that distinction decides which model degrades gracefully and which one over-commits. Written in R, with the comparison framed as an error-metric question instead of a visual one.",
    metrics: [
      { label: "methods", value: "2 compared" },
      { label: "language", value: "R" },
      { label: "MAPE", value: "3%" },
    ],
    tech: ["R", "Time series", "Exponential smoothing"],
  },
  {
    id: "lstm-stock",
    title: "LSTM Next-Day Close Forecasting",
    kind: "Analysis",
    year: "2024",
    role: "Solo",
    summary:
      "Sequence model for next-day GOOG closing price, with rolling statistics, moving averages and realised volatility as engineered features.",
    detail:
      "Built primarily to work through sequence modelling and feature engineering on non-stationary data. Worth stating plainly: next-day equity prices are close to a random walk, so the honest finding here is about what the features do to the loss curve, not about a tradeable edge.",
    metrics: [
      { label: "horizon", value: "t+1" },
      { label: "features", value: "rolling / MA / vol" },
    ],
    tech: ["Python", "TensorFlow", "Pandas", "NumPy"],
  },
];
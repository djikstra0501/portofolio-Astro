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
};

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
      { label: "seeds", value: "3 (0/14/56)" },
      { label: "target", value: "Jetson Nano" },
      { label: "mAP@50", value: "72.2%" },
    ],
    tech: ["PyTorch", "YOLO11", "Grad-CAM", "Roboflow", "CUDA / T4"],
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
      { label: "output", value: "ranked points" },
    ],
    tech: ["Python", "GCP Cloud Run", "Docker", "Rasterio", "scikit-learn"],
    status: "Patent filed",
    featured: true,
  },
  {
    id: "geosales",
    title: "GeoSales Analytics Platform",
    kind: "Platform",
    year: "2025 · Internship",
    role: "Backend & data model owner",
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
    role: "Backend & database",
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
    title: "HIV case forecasting — Brown vs Holt",
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
    title: "LSTM next-day close forecasting",
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

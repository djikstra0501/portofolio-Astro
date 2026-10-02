export const profile = {
  name: "Dananjaya",
  fullName: "I Kadek Dipastra Arka Dananjaya",
  confidence: "0.98",
  roles: ["Computer Vision & ML", "Model Deployment", "Backend & Cloud"],
  location: "Surabaya, Indonesia",
  email: "dipastra04@gmail.com",
  resume: "/dananjaya-cv.pdf",
  linkedin: "https://www.linkedin.com/in/i-kadek-dipastra-arka-dananjaya/",
  github: "https://github.com/djikstra0501",
  lede:
    "I work on the whole span of a model's life. Designing the architecture, checking that it actually learned what the metric claims, and getting it running somewhere real, whether that is a Jetson Nano in a field or a container on Cloud Run.",
};

export type Capability = {
  title: string;
  note: string;
  evidence: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Research & Modelling",
    note: "Architecture design, ablation, statistics-based reporting.",
    evidence: [
      "Lead author on a journal manuscript in review (DaYa-YOLO)",
      "13-class detector at 72.4% mAP@50, a mean over three seeds, not one run",
      "Box-conditioned Grad-CAM, because class-agnostic maps peaked on sky, not lesion",
    ],
  },
  {
    title: "Deployment",
    note: "Three very different targets, all shipped.",
    evidence: [
      "Edge device: quantised detector running on a Jetson Nano",
      "Cloud: containerised NDVI service on GCP Cloud Run, patent filed",
      "Edge network: live SvelteKit app on Cloudflare Workers and D1",
      "AWS Trained Cloud Practitioner · Cloud Quest",
    ],
  },
  {
    title: "Backend & Data",
    note: "Role-scoped systems, built end to end.",
    evidence: [
      "Access rules written once and enforced on the server, never only in the UI",
      "Private evidence files served only to viewers whose coverage includes them",
      "Atomic batched writes and CHECK constraints on a live ledger (D1)",
      "Relational design for multi-role analytics and workflow states (MySQL), from two internships",
    ],
  },
  {
    title: "Applied Statistics",
    note: "Comparative method selection, error-first evaluation.",
    evidence: [
      "Brown vs Holt smoothing compared on forecast error, not in-sample fit (R)",
      "LSTM forecasting with volatility features, and an honest read: no tradeable edge",
    ],
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  note: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Final-year research",
    org: "Undergraduate thesis",
    note: "DaYa-YOLO: journal manuscript in review.",
  },
  {
    year: "2026",
    title: "Full-stack projects",
    org: "Independent",
    note: "VoltScout, a role-scoped field platform, and Bloome Craft, a live shop on Cloudflare Workers.",
  },
  {
    year: "2025",
    title: "Research assistant",
    org: "Faculty research group",
    note: "NDVI drone inspection model, deployed on Cloud Run, Patent filed.",
  },
  {
    year: "2025",
    title: "Internship II",
    org: "PT Telekomunikasi Selular (TELKOMSEL)",
    note: "Backend and data model for GeoSales Analytics Platform.",
  },
  {
    year: "2025",
    title: "Internship I",
    org: "PT PAL Indonesia",
    note: "Backend and database for internship management system.",
  },
];
export const profile = {
  name: "Dananjaya",
  fullName: "I Kadek Dipastra Arka Dananjaya",
  confidence: "0.98",
  roles: ["Computer Vision Research", "Model Deployment", "Backend & Data"],
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

/* Grouped by what the work demonstrates, not by chronology.
   A recruiter reads this in ~15 seconds; make each line carry proof. */
export const capabilities: Capability[] = [
  {
    title: "Research & Modelling",
    note: "Architecture design, ablation, statistics-based reporting.",
    evidence: [
      "DaYa-YOLO dual-branch detector — patent filed, manuscript in review",
      "Multi-seed evaluation, not single-run headline numbers",
      "Box-conditioned Grad-CAM for localisation validation",
    ],
  },
  {
    title: "Deployment",
    note: "Two very different targets, both shipped.",
    evidence: [
      "Edge: quantised detector running on Jetson Nano",
      "Cloud: containerised NDVI service on GCP Cloud Run",
      "AWS Certified Cloud Practitioner · Cloud Quest",
    ],
  },
  {
    title: "Backend & Data",
    note: "Schema ownership on two production internships.",
    evidence: [
      "Relational design for multi-role analytics (MySQL)",
      "Workflow-state modelling, not status-string CRUD",
      "REST APIs consumed by dashboards in daily use",
    ],
  },
  {
    title: "Applied Statistics",
    note: "Comparative method selection, error-first evaluation.",
    evidence: [
      "Brown vs Holt double exponential smoothing (R)",
      "Sequence modelling with engineered volatility features",
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

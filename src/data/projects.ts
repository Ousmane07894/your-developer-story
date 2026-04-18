export type Project = {
  name: string;
  client: string;
  stack: string[];
  desc: string;
  size: "lg" | "md" | "sm";
  accent?: boolean;
  year?: string;
  category?: string;
};

export const projects: Project[] = [
  {
    name: "Template Mobile",
    client: "GS2E",
    stack: ["Flutter", "Dart", "VueJs", "LoopBackJs", "Kafka", "Keycloak"],
    desc: "Template mobile réutilisable pour accélérer la création d'applications de collecte de données. Bibliothèque de composants modulaires + plateforme web de configuration (UI, workflows, formulaires).",
    size: "lg",
    accent: true,
    year: "2024",
    category: "Plateforme",
  },
  {
    name: "PEPT Mobile",
    client: "CIE",
    stack: ["Flutter", "Keycloak", "Kafka"],
    desc: "Application multi-parcours : Marketing (prospection), Commercial (souscriptions, clients), Technicien (interventions terrain).",
    size: "md",
    year: "2023",
    category: "Mobile métier",
  },
  {
    name: "CheckMeters",
    client: "CIE",
    stack: ["Flutter", "Keycloak"],
    desc: "Application mobile de contrôle et migration des compteurs CIE.",
    size: "sm",
    year: "2023",
    category: "Mobile terrain",
  },
  {
    name: "POS Mobile & Web",
    client: "CIE",
    stack: ["Flutter", "Dart"],
    desc: "Point de Vente CIE mobile et web avec intégration complète des API métier.",
    size: "md",
    year: "2022",
    category: "Mobile & Web",
  },
  {
    name: "Terros Mobile",
    client: "Terros",
    stack: ["Flutter", "Firebase", "Google Maps", "Codemagic"],
    desc: "Survey terrain et mapping avec formulaires dynamiques, GPS, cartographie et synchronisation offline.",
    size: "md",
    year: "2022",
    category: "Mobile terrain",
  },
  {
    name: "Evote",
    client: "SODECI",
    stack: ["Flutter", "Dart"],
    desc: "Application de vote pour les syndicats SODECI.",
    size: "sm",
    year: "2021",
    category: "Mobile",
  },
  {
    name: "Inventaire Café-Cacao",
    client: "Globux",
    stack: ["Flutter", "Dart"],
    desc: "Application mobile d'inventaire dédiée à la filière café-cacao.",
    size: "sm",
    year: "2021",
    category: "Mobile",
  },
  {
    name: "Tracking Colis",
    client: "Globux",
    stack: ["Flutter", "Dart"],
    desc: "Application mobile de tracking et suivi de colis en temps réel.",
    size: "sm",
    year: "2020",
    category: "Mobile",
  },
];

export const sizeClasses: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

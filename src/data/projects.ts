import templateMobileImg from "@/assets/projects/template-mobile.jpg";
import peptMobileImg from "@/assets/projects/pept-mobile.jpg";
import checkMetersImg from "@/assets/projects/checkmeters.jpg";
import posMobileImg from "@/assets/projects/pos-mobile.jpg";
import terrosImg from "@/assets/projects/terros.jpg";
import evoteImg from "@/assets/projects/evote.jpg";
import inventaireImg from "@/assets/projects/inventaire.jpg";
import trackingImg from "@/assets/projects/tracking.jpg";

export type Project = {
  slug: string;
  name: string;
  client: string;
  stack: string[];
  desc: string;
  longDescription: string;
  highlights: string[];
  role: string;
  cover: string;
  images: string[];
  size: "lg" | "md" | "sm";
  accent?: boolean;
  year?: string;
  category?: string;
};

export const projects: Project[] = [
  {
    slug: "template-mobile",
    name: "Template Mobile",
    client: "GS2E",
    stack: ["Flutter", "Dart", "VueJs", "LoopBackJs", "Kafka", "Keycloak"],
    desc: "Template mobile réutilisable pour accélérer la création d'applications de collecte de données. Bibliothèque de composants modulaires + plateforme web de configuration (UI, workflows, formulaires).",
    longDescription:
      "Conception et développement d'une plateforme interne destinée à industrialiser la création d'applications mobiles de collecte de données chez GS2E. Le template embarque une bibliothèque Flutter de composants réutilisables (formulaires dynamiques, listes, navigation, gestion offline) couplée à une console web VueJS permettant aux équipes métier de configurer l'UI, les workflows et les règles de validation sans écrire de code. Le backend LoopBack expose les API de configuration et la communication temps réel s'appuie sur Kafka. Authentification centralisée via Keycloak.",
    highlights: [
      "Réduction de 70% du temps de mise en production d'une nouvelle app métier",
      "Bibliothèque de 40+ composants Flutter documentés",
      "Console de configuration no-code pour les équipes produit",
      "Architecture event-driven Kafka pour la synchronisation",
    ],
    role: "Lead développeur mobile & architecte",
    cover: templateMobileImg,
    images: [templateMobileImg],
    size: "lg",
    accent: true,
    year: "2024",
    category: "Plateforme",
  },
  {
    slug: "pept-mobile",
    name: "PEPT Mobile",
    client: "CIE",
    stack: ["Flutter", "Keycloak", "Kafka"],
    desc: "Application multi-parcours : Marketing (prospection), Commercial (souscriptions, clients), Technicien (interventions terrain).",
    longDescription:
      "Application mobile critique pour la Compagnie Ivoirienne d'Électricité, déployée auprès de centaines d'agents terrain. Trois parcours métier cohabitent dans une même app : prospection marketing (qualification de leads), commercial (souscriptions, gestion clients, contrats), et technicien (planification et exécution d'interventions). Synchronisation offline-first, scan de documents, signature électronique et géolocalisation des interventions.",
    highlights: [
      "3 parcours métier dans une expérience unifiée",
      "Mode offline complet avec synchronisation Kafka",
      "Signature électronique et capture de pièces",
      "Authentification SSO Keycloak",
    ],
    role: "Développeur Flutter senior",
    cover: peptMobileImg,
    images: [peptMobileImg],
    size: "md",
    year: "2023",
    category: "Mobile métier",
  },
  {
    slug: "checkmeters",
    name: "CheckMeters",
    client: "CIE",
    stack: ["Flutter", "Keycloak"],
    desc: "Application mobile de contrôle et migration des compteurs CIE.",
    longDescription:
      "Outil mobile dédié aux équipes terrain en charge du contrôle, de l'audit et de la migration du parc de compteurs électriques de la CIE. Permet la lecture, le diagnostic et la déclaration des anomalies, avec un suivi de la campagne de remplacement et une traçabilité complète des interventions.",
    highlights: [
      "Saisie rapide optimisée pour le terrain",
      "Suivi temps réel de la campagne de migration",
      "Reporting d'anomalies avec photos géolocalisées",
    ],
    role: "Développeur Flutter",
    cover: checkMetersImg,
    images: [checkMetersImg],
    size: "sm",
    year: "2023",
    category: "Mobile terrain",
  },
  {
    slug: "pos-mobile",
    name: "POS Mobile & Web",
    client: "CIE",
    stack: ["Flutter", "Dart"],
    desc: "Point de Vente CIE mobile et web avec intégration complète des API métier.",
    longDescription:
      "Solution Point de Vente déclinée en versions mobile et web pour les agences CIE. Gère l'encaissement, l'édition de reçus, la consultation des comptes clients et l'intégration aux API de facturation et de paiement. Une seule base Flutter sert les deux cibles pour garantir la cohérence fonctionnelle.",
    highlights: [
      "Base de code unique Flutter mobile + web",
      "Intégration aux API de facturation CIE",
      "Édition de reçus et historique transactionnel",
    ],
    role: "Développeur Flutter",
    cover: posMobileImg,
    images: [posMobileImg],
    size: "md",
    year: "2022",
    category: "Mobile & Web",
  },
  {
    slug: "terros",
    name: "Terros Mobile",
    client: "Terros",
    stack: ["Flutter", "Firebase", "Google Maps", "Codemagic"],
    desc: "Survey terrain et mapping avec formulaires dynamiques, GPS, cartographie et synchronisation offline.",
    longDescription:
      "Application de collecte de données géospatiales pour des missions de survey terrain. Formulaires dynamiques configurables, capture GPS de précision, cartographie Google Maps, prise de photos géotaguées et synchronisation offline avec Firebase. Pipeline de build et de release automatisé via Codemagic.",
    highlights: [
      "Formulaires entièrement configurables",
      "Cartographie et tracé d'itinéraires en temps réel",
      "Synchronisation offline robuste avec Firebase",
      "CI/CD automatisée Codemagic (iOS + Android)",
    ],
    role: "Développeur Flutter",
    cover: terrosImg,
    images: [terrosImg],
    size: "md",
    year: "2022",
    category: "Mobile terrain",
  },
  {
    slug: "evote",
    name: "Evote",
    client: "SODECI",
    stack: ["Flutter", "Dart"],
    desc: "Application de vote pour les syndicats SODECI.",
    longDescription:
      "Application mobile de vote électronique conçue pour les élections syndicales SODECI. Authentification individuelle sécurisée, chiffrement des bulletins, dépouillement automatisé et restitution des résultats en temps réel.",
    highlights: [
      "Vote électronique sécurisé et anonyme",
      "Dépouillement et résultats en temps réel",
      "Déployée sur plusieurs sites SODECI",
    ],
    role: "Développeur Flutter",
    cover: evoteImg,
    images: [evoteImg],
    size: "sm",
    year: "2021",
    category: "Mobile",
  },
  {
    slug: "inventaire-cafe-cacao",
    name: "Inventaire Café-Cacao",
    client: "Globux",
    stack: ["Flutter", "Dart"],
    desc: "Application mobile d'inventaire dédiée à la filière café-cacao.",
    longDescription:
      "Application mobile dédiée aux opérateurs de la filière café-cacao pour la gestion des stocks, la traçabilité des lots, l'enregistrement des entrées/sorties et la consolidation des inventaires multi-sites.",
    highlights: [
      "Traçabilité complète des lots café-cacao",
      "Inventaires multi-sites consolidés",
      "Mode offline pour zones rurales",
    ],
    role: "Développeur Flutter",
    cover: inventaireImg,
    images: [inventaireImg],
    size: "sm",
    year: "2021",
    category: "Mobile",
  },
  {
    slug: "tracking-colis",
    name: "Tracking Colis",
    client: "Globux",
    stack: ["Flutter", "Dart"],
    desc: "Application mobile de tracking et suivi de colis en temps réel.",
    longDescription:
      "Application de suivi de colis en temps réel destinée aux clients et aux livreurs. Visualisation de l'itinéraire, notifications de changement de statut, preuve de livraison et historique des expéditions.",
    highlights: [
      "Suivi temps réel des livraisons",
      "Notifications de changement de statut",
      "Preuve de livraison photo + signature",
    ],
    role: "Développeur Flutter",
    cover: trackingImg,
    images: [trackingImg],
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

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

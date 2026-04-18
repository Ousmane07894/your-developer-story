const projects = [
  {
    name: "Template Mobile",
    client: "GS2E",
    stack: ["Flutter", "Dart", "VueJs", "LoopBackJs", "Kafka", "Keycloak"],
    desc: "Template mobile réutilisable pour accélérer la création d'applications de collecte de données. Bibliothèque de composants modulaires + plateforme web de configuration (UI, workflows, formulaires).",
    size: "lg",
    accent: true,
  },
  {
    name: "PEPT Mobile",
    client: "CIE",
    stack: ["Flutter", "Keycloak", "Kafka"],
    desc: "Application multi-parcours : Marketing (prospection), Commercial (souscriptions, clients), Technicien (interventions terrain).",
    size: "md",
  },
  {
    name: "CheckMeters",
    client: "CIE",
    stack: ["Flutter", "Keycloak"],
    desc: "Application mobile de contrôle et migration des compteurs CIE.",
    size: "sm",
  },
  {
    name: "POS Mobile & Web",
    client: "CIE",
    stack: ["Flutter", "Dart"],
    desc: "Point de Vente CIE mobile et web avec intégration complète des API métier.",
    size: "md",
  },
  {
    name: "Terros Mobile",
    client: "Terros",
    stack: ["Flutter", "Firebase", "Google Maps", "Codemagic"],
    desc: "Survey terrain et mapping avec formulaires dynamiques, GPS, cartographie et synchronisation offline.",
    size: "md",
  },
  {
    name: "Evote",
    client: "SODECI",
    stack: ["Flutter", "Dart"],
    desc: "Application de vote pour les syndicats SODECI.",
    size: "sm",
  },
  {
    name: "Inventaire Café-Cacao",
    client: "Globux",
    stack: ["Flutter", "Dart"],
    desc: "Application mobile d'inventaire dédiée à la filière café-cacao.",
    size: "sm",
  },
  {
    name: "Tracking Colis",
    client: "Globux",
    stack: ["Flutter", "Dart"],
    desc: "Application mobile de tracking et suivi de colis en temps réel.",
    size: "sm",
  },
];

const sizeClasses: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">03 — Réalisations</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Projets & <span className="text-gradient">applications</ux></span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Une sélection d'applications mobiles et web livrées pour des clients à fort enjeu métier — secteurs énergie,
            agro-industrie et logistique.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow ${sizeClasses[p.size]}`}
            >
              {p.accent && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-150" />
              )}
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.client}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border/60 bg-background/40 transition-transform group-hover:rotate-45">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                <h3 className={`mt-4 font-display font-semibold leading-tight ${p.size === "lg" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                  {p.name}
                </h3>

                <p className={`mt-3 text-sm leading-relaxed text-muted-foreground ${p.size === "lg" ? "md:text-base" : ""}`}>
                  {p.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

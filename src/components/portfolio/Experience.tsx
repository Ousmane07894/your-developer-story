import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "GS2E",
    role: "Consultant Mobile Flutter",
    location: "Abidjan, Treichville — Siège SODECI / CIE",
    period: "Juillet 2021 — Présent",
    current: true,
    description:
      "Conception et développement d'applications mobiles et web métier pour la SODECI et la CIE. Mise en place d'architectures scalables et de templates réutilisables.",
    highlights: [
      "Template mobile réutilisable pour applications de collecte de données",
      "Application PEPT multi-parcours (Marketing, Commercial, Technicien)",
      "CheckMeters : contrôle et migration des compteurs CIE",
      "POS mobile & web : Point de Vente CIE avec intégration API métier",
      "Evote : application de vote des syndicats SODECI",
    ],
  },
  {
    company: "Globux Technologies",
    role: "Développeur Mobile Flutter",
    location: "Abidjan, Cocody Angré",
    period: "—",
    description:
      "Développement d'applications mobiles métier pour le secteur agricole et logistique.",
    highlights: [
      "Application mobile d'inventaire café-cacao",
      "Application mobile de tracking de colis",
    ],
  },
  {
    company: "Terros",
    role: "Développeur Mobile Flutter",
    location: "Abidjan",
    period: "—",
    description:
      "Application Terros Mobile : survey terrain, mapping et géolocalisation. Stack Firebase, Google Maps, Codemagic.",
    highlights: [
      "Collecte de données avec formulaires dynamiques",
      "Géolocalisation GPS et visualisation cartographique",
      "Synchronisation locale ↔ serveur, optimisation zones faible connectivité",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">02 — Parcours pro</div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Expériences <span className="text-gradient">professionnelles</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative grid gap-8 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card shadow-glow">
                    <Briefcase className="h-3.5 w-3.5 text-primary-glow" />
                  </div>
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{exp.period}</div>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{exp.company}</h3>
                  <div className="mt-1 text-primary-glow">{exp.role}</div>
                  <div className={`mt-2 flex items-center gap-1.5 text-xs text-muted-foreground ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </div>
                  {exp.current && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs text-primary-glow">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
                      Poste actuel
                    </span>
                  )}
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card backdrop-blur">
                    <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm">
                          <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

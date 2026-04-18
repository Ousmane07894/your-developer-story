import { GraduationCap } from "lucide-react";

const formations = [
  {
    title: "Master 2 — Fin de cycle",
    school: "IFSM",
    location: "Anyama",
    period: "—",
  },
  {
    title: "Licence MIT — Développeur Flutter",
    school: "NOT A NUMBER",
    location: "Angré Gestoci",
    period: "2018 — 2019",
  },
  {
    title: "Brevet Technicien Supérieur (BTS)",
    school: "Institut Technologies Abidjan",
    location: "II Plateaux",
    period: "2017 — 2018",
  },
  {
    title: "BAC F2",
    school: "Institut Technologies & Spécialités",
    location: "II Plateaux",
    period: "2013 — 2016",
  },
];

export const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">04 — Formation</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Parcours <span className="text-gradient">scolaire</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Un cursus orienté technologies de l'information, complété par une spécialisation en développement mobile
              Flutter.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {formations.map((f, i) => (
                <div
                  key={f.title}
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-gradient-card p-5 backdrop-blur transition-all hover:border-primary/40 hover:shadow-card md:flex-row md:items-center md:gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border/60 bg-background/40 transition-colors group-hover:border-primary/40 group-hover:text-primary-glow">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground md:hidden">
                      {f.period}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold leading-tight">{f.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {f.school} <span className="text-border">·</span> {f.location}
                    </div>
                  </div>

                  <div className="hidden font-mono text-xs uppercase tracking-wider text-muted-foreground md:block">
                    {f.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

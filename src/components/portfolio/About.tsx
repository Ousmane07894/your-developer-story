const skills = [
  "Flutter", "Dart", "VueJs", "NodeJs", "Java / Spring Boot", "PHP / Laravel",
  "HTML / CSS / Bootstrap", "Kafka", "Keycloak", "Firebase", "MongoDB",
  "LoopBackJs", "Google Maps", "GitHub / GitLab", "Codemagic",
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">01 — À propos</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Construire des applications <span className="text-gradient">métier robustes</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Développeur mobile et web avec plus de 6 ans d'expérience, dont 4 en tant que Consultant Mobile Flutter à
              GS2E. J'interviens sur la conception et l'optimisation d'applications à fort enjeu métier, avec une forte
              sensibilité à l'architecture logicielle (Clean Architecture) et à la qualité des solutions livrées.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "6+", label: "Années d'expérience" },
                { value: "4", label: "Ans chez GS2E" },
                { value: "10+", label: "Projets livrés" },
                { value: "∞", label: "Lignes de Dart" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-gradient-card p-5 backdrop-blur">
                  <div className="font-display text-3xl font-semibold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-gradient-card p-8 shadow-elegant backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">Stack technique</h3>
                <span className="font-mono text-xs text-muted-foreground">{skills.length} technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-all hover:border-primary/60 hover:bg-secondary hover:text-primary-glow"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Architecture", desc: "Clean Architecture, structuration modulaire, scalabilité" },
                  { title: "Intégration API", desc: "REST, Kafka, gestion d'événements, synchronisation" },
                  { title: "DevOps", desc: "CI/CD, Codemagic, GitLab, monitoring, tests" },
                  { title: "Soft skills", desc: "Collaboration, autonomie, résolution de problèmes" },
                ].map((c) => (
                  <div key={c.title} className="rounded-xl border border-border/60 bg-background/40 p-4">
                    <div className="font-display font-semibold">{c.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

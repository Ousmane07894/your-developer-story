import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-card p-10 shadow-elegant backdrop-blur md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-slow-pulse" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">05 — Contact</div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
                Parlons de votre <br />
                <span className="text-gradient">prochain projet.</span>
              </h2>
              <p className="mt-6 max-w-lg text-muted-foreground">
                Disponible pour des missions Flutter, du développement mobile/web sur mesure, ou du conseil en
                architecture logicielle. N'hésitez pas à me contacter.
              </p>

              <a
                href="mailto:ousmanez385@gmail.com"
                className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-primary px-7 py-4 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Envoyer un email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ousmanez385@gmail.com",
                    href: "mailto:ousmanez385@gmail.com",
                  },
                  { icon: Phone, label: "Mobile", value: "+225 07 89 41 89 68", href: "tel:+22507894189 68" },
                  { icon: Phone, label: "Mobile", value: "+225 01 52 61 95 66", href: "tel:+22501526195 66" },
                  { icon: MapPin, label: "Localisation", value: "Abidjan, Côte d'Ivoire" },
                ].map((c) => {
                  const Icon = c.icon;
                  const Inner = (
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 transition-all hover:border-primary/40 hover:bg-background/60">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border/60 bg-card text-primary-glow">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="mt-0.5 truncate font-medium">{c.value}</div>
                      </div>
                      {c.href && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
                    </div>
                  );
                  return c.href ? (
                    <a key={c.value} href={c.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={c.value}>{Inner}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

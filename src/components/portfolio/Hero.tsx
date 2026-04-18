import portrait from "@/assets/ousmane-portrait.jpg";
import { ArrowDown, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-slow-pulse" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-4 py-1.5 text-xs backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
              </span>
              <span className="font-mono text-muted-foreground">Disponible pour de nouveaux projets</span>
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
              Développeur <span className="text-gradient">Mobile & Web</span>
              <br />
              <span className="text-muted-foreground">Flutter — 6+ ans</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Je conçois et optimise des applications à fort enjeu métier. Consultant Flutter à{" "}
              <span className="text-foreground">GS2E (SODECI / CIE)</span> depuis 2021, avec une forte sensibilité à
              l'architecture logicielle et la qualité.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Voir mes projets
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="mailto:ousmanez385@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3 font-medium backdrop-blur transition-colors hover:bg-card"
              >
                <Mail className="h-4 w-4" />
                Me contacter
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="font-mono">07 89 41 89 68</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="font-mono">ousmanez385@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5 animate-fade-in">
            <div className="relative mx-auto aspect-[4/5] max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl" />
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant">
                <img
                  src={portrait}
                  alt="Portrait de Zongo Ousmane, développeur Flutter"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/80 bg-card/70 p-4 backdrop-blur-xl">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Currently</div>
                  <div className="mt-1 font-display font-semibold">Consultant Flutter @ GS2E</div>
                </div>
              </div>

              <div className="absolute -left-6 top-10 hidden rounded-2xl border border-border bg-card/80 p-3 backdrop-blur-xl shadow-card md:block">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Stack</div>
                <div className="mt-1 font-display font-semibold">Flutter · Dart</div>
              </div>
              <div className="absolute -right-4 bottom-24 hidden rounded-2xl border border-border bg-card/80 p-3 backdrop-blur-xl shadow-card md:block">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Years</div>
                <div className="mt-1 font-display text-2xl font-semibold text-gradient">6+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

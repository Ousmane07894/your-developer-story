import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { getProjectBySlug, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    if (!project) return;
    document.title = `${project.name} — ${project.client} | Zongo Ousmane`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", project.desc);
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 pb-12 md:pt-44">
        <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-slow-pulse" />

        <div className="container relative mx-auto px-6">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Tous les projets
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="animate-fade-up">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">
                {project.client}
                {project.year && <span className="ml-2 text-muted-foreground">· {project.year}</span>}
                {project.category && <span className="ml-2 text-muted-foreground">· {project.category}</span>}
              </div>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-background/40 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card">
              <img
                src={project.cover}
                alt={`Aperçu principal du projet ${project.name}`}
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">À propos</div>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Contexte & objectifs</h2>
              <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.longDescription}
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Client</div>
                <div className="mt-1 font-display text-lg font-semibold">{project.client}</div>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Rôle</div>
                <div className="mt-1 font-display text-lg font-semibold">{project.role}</div>
              </div>
              {project.year && (
                <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Année</div>
                  <div className="mt-1 font-display text-lg font-semibold">{project.year}</div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">Points clés</div>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Faits marquants</h2>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-glow">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.images.length > 0 && (
        <section className="relative py-16">
          <div className="container mx-auto px-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">Galerie</div>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Aperçus</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.images.map((src, i) => (
                <div
                  key={src + i}
                  className="overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card"
                >
                  <img
                    src={src}
                    alt={`${project.name} — visuel ${i + 1}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <Link
            to={`/projects/${next.slug}`}
            className="group flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-gradient-card p-8 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow md:flex-row md:items-center"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Projet suivant
              </div>
              <div className="mt-2 font-display text-2xl font-semibold md:text-3xl">{next.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{next.client}</div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-5 py-3 text-sm font-medium transition-all group-hover:bg-card">
              Découvrir
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

const ALL = "Tous";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>(ALL);

  useEffect(() => {
    document.title = "Projets — Zongo Ousmane | Développeur Flutter";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Portfolio complet des projets mobiles et web de Zongo Ousmane : Flutter, Dart, applications métier pour CIE, SODECI, GS2E.",
      );
    }
  }, []);

  const clients = useMemo(() => {
    const set = new Set(projects.map((p) => p.client));
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.client === filter)),
    [filter],
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 pb-16 md:pt-44">
        <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-slow-pulse" />

        <div className="container relative mx-auto px-6">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Retour à l'accueil
          </Link>

          <div className="mt-8 max-w-3xl animate-fade-up">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">
              Portfolio — {projects.length} projets
            </div>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Tous mes <span className="text-gradient">projets</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              L'ensemble des applications mobiles et web livrées depuis 2020. Filtrez par client pour explorer en
              détail.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {clients.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  filter === c
                    ? "border-primary/60 bg-primary/15 text-foreground shadow-glow"
                    : "border-border bg-card/40 text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
            {filtered.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-border bg-card/40 p-12 text-center text-muted-foreground">
              Aucun projet pour ce filtre.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">03 — Réalisations</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Projets & <span className="text-gradient">applications</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Une sélection d'applications mobiles et web livrées pour des clients à fort enjeu métier — secteurs énergie,
            agro-industrie et logistique.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3 font-medium backdrop-blur transition-all hover:border-primary/40 hover:bg-card hover:shadow-glow"
          >
            Voir tous les projets
            <span className="font-mono text-xs text-muted-foreground">({projects.length})</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

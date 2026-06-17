import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { sizeClasses } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project: p }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${p.slug}`}
      className={`group relative block overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow ${sizeClasses[p.size]}`}
    >
      {p.accent && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      )}

      <article className="relative flex h-full flex-col">
        {p.cover && (
          <div className="relative h-40 w-full overflow-hidden md:h-48">
            <img
              src={p.cover}
              alt={`Aperçu ${p.name}`}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {p.client}
              {p.year && <span className="ml-2 text-foreground/40">· {p.year}</span>}
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border/60 bg-background/40 transition-transform group-hover:rotate-45">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </div>

          <h3
            className={`mt-4 font-display font-semibold leading-tight ${
              p.size === "lg" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {p.name}
          </h3>

          <p
            className={`mt-3 text-sm leading-relaxed text-muted-foreground ${
              p.size === "lg" ? "md:text-base" : ""
            }`}
          >
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
    </Link>
  );
};

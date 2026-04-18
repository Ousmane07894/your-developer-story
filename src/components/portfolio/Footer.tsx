export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-primary text-[10px] text-primary-foreground">
            ZO
          </span>
          © {new Date().getFullYear()} Zongo Ousmane — Tous droits réservés
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          Conçu avec <span className="text-primary-glow">♦</span> à Abidjan
        </div>
      </div>
    </footer>
  );
};

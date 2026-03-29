const Footer = () => (
  <footer className="py-12 px-6 border-t border-border/50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-sm text-gradient tracking-widest font-bold">S.H.I.E.L.D.</p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} S.H.I.E.L.D. — All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

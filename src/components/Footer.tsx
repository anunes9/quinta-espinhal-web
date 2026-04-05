const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-lg font-medium text-foreground">
          Quinta do Espinhal
        </p>
        <p className="font-body text-xs tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} — Ribatejo, Portugal
        </p>
      </div>
    </footer>
  )
}

export default Footer

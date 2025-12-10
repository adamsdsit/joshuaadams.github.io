export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container">
      <div className="card">
        <div className="mb-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {description ? <p className="muted mt-1">{description}</p> : null}
        </div>
        <div className="grid gap-3">{children}</div>
      </div>
    </section>
  );
}

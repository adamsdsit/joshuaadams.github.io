export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container">
      <div className="card">
        <div className="mb-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {description ? <p className="muted mt-1">{description}</p> : null}
        </div>
        <div className="grid gap-4">{children}</div>
      </div>
    </section>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container my-4">
      <div className="card">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-3">{children}</div>
      </div>
    </section>
  );
}

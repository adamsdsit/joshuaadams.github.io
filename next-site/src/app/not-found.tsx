import Link from 'next/link';

export default function NotFound(){
  return (
    <main className="container">
      <div className="card text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="muted mt-2">Sorry, we couldn’t find what you’re looking for.</p>
        <div className="mt-4">
          <Link className="btn btn-primary" href="/">Go home</Link>
        </div>
      </div>
    </main>
  );
}

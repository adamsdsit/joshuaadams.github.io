import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joshua Adams',
  description: 'Certified Business Continuity Professional (CBCP) | IT & Cybersecurity Specialist | Researcher | Educator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text">
        {children}
      </body>
    </html>
  );
}

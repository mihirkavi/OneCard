import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OneCard - Maximize Your Credit Card Rewards',
  description: 'Find the best credit card for every purchase and maximize your rewards',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-onecard-dark min-h-screen text-white">
        {children}
      </body>
    </html>
  );
}

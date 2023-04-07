import "./globals.css";

export const metadata = {
  title: "Mentor Machines",
  description: "Learn Blockchain with AI mentors.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

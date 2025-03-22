import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flower Shop",
  description: "Fresh flowers for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

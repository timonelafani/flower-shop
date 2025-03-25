import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@common/Header";
import Footer from "@common/Footer";
import "./globals.css";
import { AuthProvider } from "@components/admin/AuthProvider";

export const metadata: Metadata = {
  title: "Flower Shop",
  description: "Fresh flowers for every occasion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <div className="mt-12">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

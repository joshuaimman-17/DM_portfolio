// src/app/layout.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/layout/Header";
import CloseOnNavigate from "@/components/layout/CloseOnNavigate";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyApp",
  description: "Server-rendered with ISR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense fallback={null}>
          <CloseOnNavigate />
        </Suspense>
        <main style={{ padding: "1.5rem" }}>{children}</main>
      </body>
    </html>
  );
}
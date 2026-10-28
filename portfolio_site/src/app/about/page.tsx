// src/app/page.tsx
import { cacheLife } from "next/cache";

export default async function About() {
  "use cache";
  cacheLife("minutes");

  return (
    <>
      <h1>about</h1>
      <p>Rendered at: {new Date().toISOString()}</p>
    </>
  );
}
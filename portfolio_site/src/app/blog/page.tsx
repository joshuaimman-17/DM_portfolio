// src/app/page.tsx
import { cacheLife } from "next/cache";

export default async function Blog() {
  "use cache";
  cacheLife("minutes");

  return (
    <>
      <h1>Blog</h1>
      <p>Rendered at: {new Date().toISOString()}</p>
    </>
  );
}
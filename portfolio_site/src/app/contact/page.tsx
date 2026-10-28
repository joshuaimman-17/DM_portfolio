// src/app/page.tsx
import { cacheLife } from "next/cache";

export default async function Home() {
  "use cache";
  cacheLife("minutes");

  return (
    <>
      <h1>Home</h1>
      <p>Rendered at: {new Date().toISOString()}</p>
    </>
  );
}
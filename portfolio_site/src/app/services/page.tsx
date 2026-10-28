// src/app/page.tsx
import { cacheLife } from "next/cache";

export default async function Service() {
  "use cache";
  cacheLife("minutes");

  return (
    <>
      <h1>Service</h1>
      <p>Rendered at: {new Date().toISOString()}</p>
    </>
  );
}
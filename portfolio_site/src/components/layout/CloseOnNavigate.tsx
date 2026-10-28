  // src/components/layout/CloseOnNavigate.tsx
  "use client";
  import { useEffect } from "react";
  import { usePathname } from "next/navigation";

  export default function CloseOnNavigate() {
    const pathname = usePathname();
    useEffect(() => {
      const el = document.getElementById("fsm-toggle") as HTMLInputElement | null;
      if (el) el.checked = false;
    }, [pathname]);
    return null;
  }
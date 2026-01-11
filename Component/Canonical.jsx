"use client";

import { usePathname } from "next/navigation";

export default function Canonical() {
  const pathname = usePathname();
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.ekamcure.com";

  return <link rel="canonical" href={`${baseUrl}${pathname}`} />;
}

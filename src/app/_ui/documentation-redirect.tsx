"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function DocumentationRedirect({
  title,
  url,
}: Readonly<{ title: string; url: string }>) {
  const router = useRouter();

  useEffect(() => {
    router.replace(url);
  });

  return (
    <div className="m-16 text-center">
      The documentation has moved to{" "}
      <Link href={url} className="text-blue-600 hover:text-blue-800">
        {title} Documentation
      </Link>
      .
    </div>
  );
}

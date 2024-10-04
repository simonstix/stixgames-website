import Link from "next/link";

import { Layout } from "@/app/page-layout";

export default function TileComposerDocumentation() {
  return (
    <Layout hoverOverContent={false}>
      <div className="m-16 text-center">
        The documentation has moved to{" "}
        <Link
          href="https://docs.stixgames.com/directx-11-grass-shader"
          className="text-blue-600 hover:text-blue-800"
        >
          DirectX 11 Grass Shader Documentation
        </Link>
        .
      </div>
    </Layout>
  );
}

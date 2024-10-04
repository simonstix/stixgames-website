import Link from "next/link";
import { Layout } from "@/app/layout";

export default function TileComposerDocumentation() {
  return (
    <Layout hoverOverContent={false}>
      <div className="m-16 text-center">
        The documentation has moved to{" "}
        <Link
          href="https://docs.stixgames.com/tile-composer"
          className="text-blue-600 hover:text-blue-800"
        >
          Tile Composer Documentation
        </Link>
        .
      </div>
    </Layout>
  );
}

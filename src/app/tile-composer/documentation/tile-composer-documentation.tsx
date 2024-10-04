import { Layout } from "@/app/page-layout";
import { DocumentationRedirect } from "@/app/_ui/documentation-redirect";

export default function TileComposerDocumentation() {
  return (
    <Layout hoverOverContent={false}>
      <DocumentationRedirect
        title="Tile Composer"
        url="https://docs.stixgames.com/tile-composer"
      />
    </Layout>
  );
}

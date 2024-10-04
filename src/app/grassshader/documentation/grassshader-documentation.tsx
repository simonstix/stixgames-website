import { Layout } from "@/app/page-layout";
import { DocumentationRedirect } from "@/app/_ui/documentation-redirect";

export default function GrassShaderDocumentation() {
  return (
    <Layout hoverOverContent={false}>
      <DocumentationRedirect
        title="DirectX 11 Grass Shader"
        url="https://docs.stixgames.com/directx-11-grass-shader"
      />
    </Layout>
  );
}

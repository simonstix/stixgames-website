import { impressum } from "@/app/impressum/impressum.html";
import { Layout } from "@/app/layout";

export default function Impressum() {
  return (
    <Layout hoverOverContent={false}>
      <div className="flex flex-col items-center bg-gray-800 p-4">
        <div
          className="prose prose-sm sm:prose-base prose-gray prose-invert"
          dangerouslySetInnerHTML={{ __html: impressum }}
        />
      </div>
    </Layout>
  );
}

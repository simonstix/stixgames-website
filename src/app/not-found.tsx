// `app/page.tsx` is the UI for the `/` URL

import { Layout } from "@/app/page-layout";

export default function TileComposer() {
  return (
    <Layout hoverOverContent={false}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <div className="mr-4 border-r border-slate-700 pr-4 text-5xl">
            404
          </div>
          <div className="text-xl">Page not found</div>
        </div>
      </div>
    </Layout>
  );
}

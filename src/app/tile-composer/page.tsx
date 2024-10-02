// `app/page.tsx` is the UI for the `/` URL
import { Layout } from "@/app/layout";

function BackgroundVideo() {
  return (
    <video
      width={1920}
      height={1080}
      loop
      autoPlay
      muted
      preload="metadata"
      playsInline={true}
      className="absolute left-[50%] top-[50%] z-0 inline-block h-full min-h-full w-auto min-w-full -translate-x-[50%] -translate-y-[50%] object-cover"
    >
      <source src="/TileComposerWebsiteBackground.mp4" type="video/mp4" />
    </video>
  );
}

export default function TileComposer() {
  return (
    <Layout hoverOverContent={true}>
      <div className="h-[800px]">
        <BackgroundVideo />
      </div>
    </Layout>
  );
}

// `app/page.tsx` is the UI for the `/` URL
import { TileComposerIntro } from "@/app/tile-composer/intro";
import VideoDisplay from "@/app/_ui/video-display";
import { TitleVideo } from "@/app/_ui/title-video";
import { Layout } from "@/app/page-layout";

export default function TileComposer() {
  return (
    <Layout hoverOverContent={true}>
      <TitleVideo src="/tile-composer/TileComposerWebsiteBackground.mp4">
        <TileComposerIntro />
      </TitleVideo>
      <div className="bg-gray-900 py-4">
        <VideoDisplay
          title="Connectors"
          mirror={false}
          videoUrl="/tile-composer/Connectors.mp4"
        >
          The Connector workflow moves your focus from individual tiles to role
          and behaviour of each tiles side.
          <br />
          <br />
          Directed connectors make it possible to create complex behavior with
          ease. From rivers and roads to intricate machines, the limit is your
          imagination!
        </VideoDisplay>
        <VideoDisplay
          title="Neighbors from Mesh"
          mirror={true}
          videoUrl="/tile-composer/NeighborsFromMesh.mp4"
        >
          This artist-friendly workflow takes tile neighbors directly from your
          mesh. Tiles, where meshes have the same border, will be automatically
          matched to each other. Now you only have to adjust some tile
          weights/probabilities and Tile Composer will handle the rest.
        </VideoDisplay>
        <VideoDisplay
          title="Tile Hierarchies"
          mirror={false}
          videoUrl="/tile-composer/TileHierarchy.mp4"
        >
          Perfectly aligning each vertex on tile borders seems tedious? We
          thought so too and created tools to help. Tiles can have parents to
          copy all their settings, except for selected overrides. This does not
          only make it effortless to create slight variations, but you can also
          use it to split low poly and high poly meshes to improve the neighbors
          to mesh workflow.
        </VideoDisplay>
      </div>
      <div className="bg-amber-600 p-4 text-amber-50 sm:p-16">
        <h1 className="m-10 text-center text-3xl">
          Procedural generation for everyone
        </h1>
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
          <div className="sm:border-r sm:border-r-amber-50 sm:pr-10 md:p-4 md:pr-20">
            Tile Composer makes it possible to create complex procedural
            generation without programming knowledge. Simply take or create a
            tileset, use one of the workflows to define how the tiles are
            connected to each other, and Tile Composer will handle the rest.
            Either use the Wave Function Collapse algorithm, with additional
            failure recovery to handles very complex relations on its own, or
            use an alternative industry-grade constraint solver for otherwise
            impossible creations.
          </div>
          <div className="sm:pl-10 md:p-4 md:pl-20">
            With a focus on ease of use, without sacrificing power, you can use
            Tile Composer for any tile-set you can imagine. It supports a
            variety of grid shapes, including boxes, triangles, hexagons, both
            2d and 3d. If that is not enough yet, all source code is included,
            so you can extend a single interface to add another grid (contact
            our support if you need help!). The whole asset is documented with
            tooltips and where that is not enough, you can look at our
            documentation and collection of tutorials.
          </div>
        </div>
      </div>
    </Layout>
  );
}

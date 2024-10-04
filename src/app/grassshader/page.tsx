import { Layout } from "@/app/layout";
import { TitleVideo } from "@/app/_ui/title-video";
import Link from "next/link";
import {
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/16/solid";

function LargeFeatures() {
  return (
    <div className="flex flex-col items-center justify-center bg-lime-50 text-center text-lime-950">
      <div className="grid max-w-[1500px] grid-cols-1 gap-8 p-4 py-16 sm:p-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="m-2 flex h-32 w-32 items-center justify-center rounded-full border-8 border-lime-950/20">
            <RocketLaunchIcon className="w-3/4 text-lime-600" />
          </div>
          <h1 className="mt-4 pb-4 text-3xl font-semibold">High Performance</h1>
          <p>
            Scalable from low to high end, by generating blades of grass
            directly on the GPU!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="m-2 flex h-32 w-32 items-center justify-center rounded-full border-8 border-lime-950/20">
            <CheckIcon className="w-3/4 text-lime-600" />
          </div>
          <h1 className="mt-4 pb-4 text-3xl font-semibold">Easy to use</h1>
          <p>
            With a detailed text and video documentation and easy to use
            controls great results are a matter of minutes.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="m-2 flex h-32 w-32 items-center justify-center rounded-full border-8 border-lime-950/20">
            <DevicePhoneMobileIcon className="w-3/4 text-lime-600" />
          </div>
          <h1 className="mt-4 pb-4 text-3xl font-semibold">CPU Fallback</h1>
          <p>
            Systems that cannot use DirectX 11 can still use the optimized CPU
            Fallback system.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="m-2 flex h-32 w-32 items-center justify-center rounded-full border-8 border-lime-950/20">
            <ArrowPathIcon className="w-3/4 text-lime-600" />
          </div>
          <h1 className="mt-4 pb-4 text-3xl font-semibold">Dynamic reaction</h1>
          <p>
            Reacts dynamically to characters, vehicles, or any other game event.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="m-2 flex h-32 w-32 items-center justify-center rounded-full border-8 border-lime-950/20">
            <PaintBrushIcon className="w-3/4 text-lime-600" />
          </div>
          <h1 className="mt-4 pb-4 text-3xl font-semibold">Artistic control</h1>
          <p>
            Use a variety of included tools to paint grass where you want it or
            easily create texture atlases.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="m-2 flex h-32 w-32 items-center justify-center rounded-full border-8 border-lime-950/20">
            <Cog6ToothIcon className="w-3/4 text-lime-600" />
          </div>
          <h1 className="mt-4 pb-4 text-3xl font-semibold">
            Highly customizable
          </h1>
          <p>
            From underwater scenes to alien landscapes. Useable for every art
            style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TileComposer() {
  const documentationUrl = "";
  return (
    <Layout
      hoverOverContent={true}
      colors={{
        footer: "bg-lime-900",
        footerText: "text-lime-50",
        footerTextHover: "hover:text-lime-400",
      }}
    >
      <TitleVideo src="/grassshader/GrassshaderWebsiteBackground.mp4">
        <h1 className="mb-2 mt-4 text-5xl">DirectX 11 Grass Shader</h1>
        <h2 className="text-2xl">The easy way to high-end graphics</h2>

        <p className="my-4">
          Use a variety of different lighting modes and up to 4 texture atlases
          to create grass that perfectly matches your art style. From stylized
          grass to realistic art styles, the DirectX 11 Grass Shader makes your
          vision possible. Make your scene truly feel alive: use a flamethrower
          to destroy the beautiful landscape you just created. Create a variety
          of effects with the powerful interaction system.
        </p>

        <div className="mt-2 flex flex-row flex-wrap items-center gap-2 text-center">
          <a
            className="rounded-full bg-lime-600 p-4 px-8 text-sm font-semibold uppercase text-lime-100 hover:bg-lime-500"
            href="https://assetstore.unity.com/packages/vfx/shaders/directx-11/directx-11-grass-shader-36335?aid=1011l9eTK"
          >
            Buy on the asset store
          </a>
          <a
            className="rounded-full border-2 border-lime-600 p-4 px-8 text-sm font-semibold uppercase text-lime-100 hover:bg-lime-500/70"
            href={documentationUrl}
          >
            Documentation
          </a>
        </div>
      </TitleVideo>

      <LargeFeatures />

      <div className="bg-lime-700 p-4 py-16 text-lime-50 sm:p-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-0">
          <div className="sm:w-1/2 sm:border-r sm:border-r-lime-50 sm:pr-10 md:p-4 md:pr-20">
            <h1 className="mb-10 text-center text-3xl">
              Grass Shader Features
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                The DirectX 11 Grass Shader has a variety of features, making it
                possible to customize it for any art style.
              </p>
              <p>
                From artistic, single colored, polygonal grass to multiple
                texture atlases. The DirectX 11 Grass Shader can be used to
                create a beautiful mix of plants and vibrant flowers. Use
                texture atlases and a variety of lighting and render modes to
                create the perfect grass for your game. Automatically process
                Unity terrain and custom meshes for an easy to use and
                consistent experience.
              </p>
              <p>
                See all its features in action in our{" "}
                <Link
                  href={documentationUrl}
                  className="hover:text-lime- text-lime-500 hover:text-lime-300"
                >
                  documentation
                </Link>
                !
              </p>
            </div>
          </div>

          <div className="sm:w-1/2 sm:pl-10 md:p-4 md:pl-20">
            <h1 className="mb-10 text-center text-3xl">
              Interaction and tools
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                The <em>interaction system</em> helps you create movement,
                trails, shock waves, even removing grass around buildings, or
                burning it away.
              </p>
              <p>
                Use the <em>grass painter</em> to change the color, height, and
                density of your grass. The simple, but expressive brush settings
                make it easy to paint on any surface, be it huge landscapes or
                small gardens.
              </p>
              <p>
                With the help of <em>texture atlas</em> templates you can
                automatically combine individual blades of grass into a
                production ready atlas. Optimize your performance even further,
                by automatically combining multiple textures into bundles of
                grass.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-lime-50 p-4 text-lime-950 sm:p-16">
        <div>
          <h1 className="m-10 text-center text-3xl">
            Efficient and beautiful high-end scenes
          </h1>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
            <div className="sm:border-r sm:border-r-lime-950/30 sm:pr-10 md:p-4 md:pr-20">
              Use the DirectX 11 Grass Shader to create the natural landscapes
              you have always dreamed of. With its variety of features you can
              easily customize it for any use case you could imagine. With the
              increasing number of additional tools this becomes more efficient
              with each update!
            </div>
            <div className="sm:pl-10 md:p-4 md:pl-20">
              With full tooltips and a detailed documentation, the shader is
              intuitive and easy to use. We are always trying to improve
              features and usability through ongoing updates. And when you are
              missing something, simply contact us at our support email address
              and we will try to help you out!
            </div>
          </div>
        </div>

        <a
          className="m-8 rounded-full bg-lime-600 p-4 px-8 text-sm font-semibold uppercase text-lime-100 hover:bg-lime-500"
          href="https://assetstore.unity.com/packages/vfx/shaders/directx-11/directx-11-grass-shader-36335?aid=1011l9eTK"
        >
          Buy on the asset store
        </a>
      </div>
    </Layout>
  );
}

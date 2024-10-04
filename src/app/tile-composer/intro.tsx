"use client";

import Link from "next/link";
import { ReactTyped } from "react-typed";

export function TileComposerIntro() {
  return (
    <div>
      <h1 className="my-2 mb-4 text-5xl">Tile Composer</h1>
      <h2 className="mb-5 flex flex-row flex-wrap text-xl">
        Procedural generation for&nbsp;
        <ReactTyped
          strings={["artists", "programmers", "<strong>you!</strong>"]}
          typeSpeed={80}
          backSpeed={30}
          backDelay={1200}
          loop
          className="inline"
        />
      </h2>

      <p>
        Create a tileset, use one of several workflows to match tiles to their
        neighbors, done. Tile Composer uses the Wave Function Collapse algorithm
        or an SAT-based constraint solver to automatically create a model for
        your tiles.
      </p>

      <div className="mt-2 flex flex-row flex-wrap items-center gap-2 text-center">
        <Link
          className="rounded-full bg-amber-600 p-4 px-8 text-sm font-semibold uppercase text-amber-100 hover:bg-amber-500"
          href="https://assetstore.unity.com/packages/tools/modeling/tile-composer-163864?aid=1011l9eTK"
        >
          Buy on the asset store
        </Link>
        <Link
          className="rounded-full border-2 border-amber-600 p-4 px-8 text-sm font-semibold uppercase text-amber-100 hover:bg-amber-500/70"
          href="https://docs.stixgames.com/tile-composer/"
        >
          Documentation
        </Link>
      </div>
    </div>
  );
}

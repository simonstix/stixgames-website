function BackgroundVideo({ src }: Readonly<{ src: string }>) {
  return (
    <video
      width={1920}
      height={1080}
      loop
      autoPlay
      muted
      preload="metadata"
      playsInline={true}
      className="absolute -z-10 h-full min-h-full w-auto min-w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function TitleVideo({
  src,
  children,
}: Readonly<{ src: string; children: React.ReactNode }>) {
  return (
    <div className="relative h-[800px] overflow-hidden text-gray-50">
      <BackgroundVideo src={src} />
      <div className="absolute inset-0 top-8 flex flex-col items-start justify-center">
        <div className="m-2 max-w-[800px] bg-gray-950/20 p-4 backdrop-blur md:m-16">
          {children}
        </div>
      </div>
    </div>
  );
}

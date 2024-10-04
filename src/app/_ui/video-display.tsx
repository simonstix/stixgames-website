export default function VideoDisplay({
  title,
  videoUrl,
  mirror,
  children,
}: Readonly<{
  title: string;
  videoUrl: string;
  mirror: boolean;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`flex flex-col-reverse items-center p-4 ${mirror ? "sm:flex-row-reverse" : "sm:flex-row"}`}
    >
      <div className="m-4 md:m-16">
        <h3 className="mb-4 text-3xl">{title}</h3>
        <div className="text-lg">{children}</div>
      </div>
      <div className={`shrink-0 sm:w-1/2 ${mirror ? "sm:pr-4" : "sm:pl-4"}`}>
        <video
          width={1920}
          height={1080}
          controls={true}
          loop={true}
          muted={true}
        >
          <source src={videoUrl} />
        </video>
      </div>
    </div>
  );
}

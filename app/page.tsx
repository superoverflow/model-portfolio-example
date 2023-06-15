import Image from "next/image";

function ImageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[300px] h-[300px]  overflow-clip object-cover object-top rounded-lg shadow-lg hover:scale-95 transition">
      {children}
    </div>
  );
}

export default function Home() {
  const photos = [
    {
      src: "/01.JPG",
      width: 900,
      height: 1600,
      alt: "front",
    },
    {
      src: "/02.JPG",
      width: 900,
      height: 1600,
      alt: "chanel",
    },
    {
      src: "/03.JPG",
      width: 900,
      height: 1600,
      alt: "side",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 gap-4">
      <p className="text-lg font-bold text-zinc-500">Hello👋🏻, I&apos;m Tiffany</p>
      {photos.map((p) => (
        <ImageContainer key={p.src}>
          <Image className="w-full z-0" {...p} alt={p.alt} />
          <p className="object-top z-10">Lorem Ipsum</p>
        </ImageContainer>
      ))}
    </main>
  );
}

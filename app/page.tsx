import Image from "next/image";

function ImageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden object-cover object-top rounded-lg shadow-lg">
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
      alt: "Portfolio",
    },
    {
      src: "/02.JPG",
      width: 900,
      height: 1600,
      alt: "Shop",
    },
    {
      src: "/03.JPG",
      width: 900,
      height: 1600,
      alt: "Contact",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 gap-4">
      <p className="text-lg font-bold text-zinc-500">
        Hello👋🏻, I&apos;m Tiffany
      </p>
      {photos.map((p) => (
        <ImageContainer key={p.src}>
          <Image className="blur brightness-75 w-full z-0" {...p} alt={p.alt} />
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <p className="text-2xl p-4 font-bold uppercase text-zinc-100">
              {p.alt}
            </p>
          </div>
        </ImageContainer>
      ))}
    </main>
  );
}

import Image from "next/image";

function ImageContainer({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="relative w-[300px] h-[300px] overflow-hidden object-cover object-top rounded-lg shadow-lg"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const photos = [
    {
      src: "/ablum/01.jpg",
      width: 900,
      height: 1600,
      alt: "Portfolio",
      link: "/portfolio",
    },
    {
      src: "/ablum/02.jpg",
      width: 900,
      height: 1600,
      alt: "Shop",
      link: "/shop",
    },
    {
      src: "/ablum/03.jpg",
      width: 900,
      height: 1600,
      alt: "Contact",
      link: "/about",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 gap-4">
      <p className="text-lg font-bold text-zinc-500">
        Hello👋🏻, I&apos;m Tiffany
      </p>
      {photos.map((p) => (
        <ImageContainer key={p.src} href={p.link} >
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

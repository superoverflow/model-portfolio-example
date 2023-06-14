import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 gap-4">
      <p className="text-lg font-bold text-gray-500">
        Hello, I'm Tiffany
      </p>
      <Image
        className="border-slate-500 rounded-lg shadow-lg"
        src="/01.JPG"
        width={900}
        height={1600}
        alt="tiffany"
      />
      <Image
        className="border-slate-500 rounded-lg shadow-lg"
        src="/02.JPG"
        width={900}
        height={1600}
        alt="tiffany"
      />
      <Image
        className="border-slate-500 rounded-lg shadow-lg"
        src="/03.JPG"
        width={900}
        height={1600}
        alt="tiffany"
      />
    </main>
  );
}

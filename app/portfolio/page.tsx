import { Separator } from "@/components/ui/separator"

import Image from "next/image";
import igLives from "./igLives.json";
import igStories from "./igStories.json";

const IGLives = igLives.map((d) => (
  <a key={d.id} href={d.link}>
    <div className="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-lg">
      <Image src={d.photo} alt={d.description} height={1080} width={1920} />
    </div>
    <span>{d.description}</span>
  </a>
));

const IGStories = igStories.map((d) => (
  <a key={d.id} href={d.link}>
    <div className="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-lg">
      <Image src={d.photo} alt={d.description} height={1080} width={1080} />
      <p>{d.description}</p>
    </div>
    <span>{d.description}</span>
  </a>
));

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-4">
      <div className="flex w-full space-between">
        <span>IG Lives</span>
        <span>IG Stories</span>
        <span>Photos</span>
      </div>
      <Separator className="my-4" />
      <span> IG Lives </span>
      {IGLives}
      <Separator className="my-4" />
      <span> IG Stories </span>
      {IGStories}
    </main>
  );
};

export default page;

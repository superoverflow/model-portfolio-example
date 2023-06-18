import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import igLives from "./igLives.json";
import igStories from "./igStories.json";
import { InstagramIcon, YoutubeIcon } from "lucide-react";

function SectionHeader({
  Icon,
  text,
}: {
  Icon: React.ReactNode;
  text: string;
}) {
  return (
    <>
      <Separator className="my-4" />
      <div className="flex items-center gap-4">
        {Icon}
        <span className="text-2xl font-bold uppercase align-middle">
          {text}
        </span>
      </div>
    </>
  );
}

const IGLives = igLives.map((d) => (
  <a key={d.id} href={d.link}>
    <div className="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-lg">
      <Image src={d.photo} alt={d.description} height={1080} width={1920} />
    </div>
    <span className="pt-4">{d.description}</span>
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
      <SectionHeader
        Icon={<InstagramIcon size={24} />}
        text="lives"
      />
      {IGLives}

      <SectionHeader
        Icon={<InstagramIcon size={24} />}
        text="stories"
      />
      {IGStories}
    </main>
  );
};

export default page;

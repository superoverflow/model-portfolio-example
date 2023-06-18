import Image from "next/image";
import igLives from "./igLives.json";
import igStories from "./igStories.json";

const IGLives = igLives.map((d) => (
  <a key={d.id} href={d.link}>
    <div
      className="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-lg"
      id={d.id}
    >
      <Image src={d.photo} alt={d.description} height={1080} width={1920} />
    </div>
    <span>{d.description}</span>
  </a>
));

const IGStories = igStories.map((d) => (
  <div
    className="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-lg"
    key={d.id}
  >
    <Image src={d.photo} alt={d.description} height={1080} width={1080} />
    <p>{d.description}</p>
  </div>
));

const page = () => {
  return (
    <>
      <div className="flex w-full space-between">
        <span>IG Lives</span>
        <span>IG Stories</span>
        <span>Photos</span>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-4">
        {IGLives}
        {IGStories}
      </main>
    </>
  );
};

export default page;

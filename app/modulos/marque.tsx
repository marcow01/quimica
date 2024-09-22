import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
 
const reviews = [
  {
    name: "Buzeira",
    username: "@buzeira",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://instagram.ftur2-1.fna.fbcdn.net/v/t39.30808-6/429688205_17902821800983139_6655304731900534870_n.jpg?se=-1&stp=dst-jpegr_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuaGRyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.ftur2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=z1vS-pSNnncQ7kNvgE2CA66&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzMxMjg1OTc1MjE1MTQyOTQxNg%3D%3D.3-ccb7-5&oh=00_AYBDqEV6hHHnjDjlCgzYNONvwCPZLMRonS-egrNeGFJNNA&oe=66F3EEEF&_nc_sid=7a9f4b",
  },
  {
    name: "Allan Cabral",
    username: "@allacabral",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qYrnnRixKeO2iB-C1yY1MTKYNK5MVZWGUw&s",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string ;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-[46px] h-[46px]"alt="" src={img} />
        <div className="flex flex-col">
          <div className="flex items-center">
            <figcaption className="text-lg font-bold">
              {name}
            </figcaption>
            <img src="https://img.icons8.com/?size=512&id=2sZ0sdlG9kWP&format=png" className="w-[15px] h-[15px] ml-1" alt="" />
          </div>
          <p className="text-sm font-medium dark:text-white/40 text-gray-600">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-base">{body}</blockquote>
    </figure>
  );
};
 
export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#090a0b] to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#090a0b] to-transparent"></div>
    </div>
  );
}
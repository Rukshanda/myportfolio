import React from "react";
import { BentoGrid, BentoGridItem } from "../../Components/ui/bentogrid";
import { blog1, blog2, blog3, blog4, blog5 } from "../../utils";

export default function BentoGridDemo() {
  return (
    <div className="py-20">
 <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px]">
    My <span className="font-extrabold"> Blogs</span>
   </h1>
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={
            <div>
              <p>{item.description}</p>
              <ReadMoreLink url={item.url} /> {/* Adding link inside description */}
            </div>
          }
          header={<Skeleton image={item.image} />}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
   
  );
}

// Updated Skeleton component to accept an image prop
const Skeleton = ({ image }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {image ? (
      <img
        src={image}
        alt="Item Image"
        className="w-full h-full object-cover rounded-xl"
      />
    ) : null}
  </div>
);

// "Read More" Link Component
const ReadMoreLink = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-200 hover:underline mt-2 block font-bold underline"
  >
    Read More
  </a>
);

// Updated items array to include image URLs and article URLs
const items = [
  {
    title: "5 Coding Mistakes I Wish I Knew When I Started Coding",
    description: "Learn the most common mistakes made while coding.",
    image: blog1,
    url: "https://medium.com/@rukshandanadir/things-i-wish-i-knew-when-i-started-coding-54f8b042aa23/",
  },
  {
    title: "7 HTML Tags You Didn’t Know Existed!",
    description: "Explore lesser-known HTML tags.",
    image: blog2,
    url: "https://medium.com/@rukshandanadir/7-html-tags-you-didnt-know-existed-21812c9cc8d5",
  },
  {
    title: "5 HTML Tags You Might Know For The First Time",
    description: "HTML tags that aren't often talked about.",
    image: blog3,
    url: "https://medium.com/@rukshandanadir/5-unpopular-html-tags-you-might-know-for-the-first-time-1f792544617a",
  },
  {
    title: "Best 5 JavaScript Frameworks",
    description: "Top frameworks you need to know for JS development.",
    image: blog4,
    url: "#",
  },
  {
    title: "Top 5 Programming Languages in the Next 5 Years",
    description: "Which languages are trending in tech?",
    image: blog5,
    url: "#",
  },
];

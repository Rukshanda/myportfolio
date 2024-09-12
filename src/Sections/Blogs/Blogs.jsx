"use client";
import React from "react";
import { LayoutGrid } from "../../Components/ui/card";
import { blog1, blog2, blog3, blog4 } from "../../utils";

export default function Blogs() {
  return (
    (<div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>)
  );
}

const SkeletonOne = () => {
  return (
    (<div >
      <p className="font-bold md:text-4xl text-xl text-white">
      5 Coding Mistakes I wish I knew When I Started Coding
            </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Well, coding can be a rollercoaster. One minute the code is working like a charm, and the next moment, you’re staring at a screen with red errors.....
      </p>
      <a href="https://medium.com/@rukshandanadir/things-i-wish-i-knew-when-i-started-coding-54f8b042aa23" className="text-white font-bold hover:text-zinc-300">Read more</a>
    </div>)
  );
};

const SkeletonTwo = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
      7 HTML Tags you didn’t know existed!
            </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      HTML is an essential markup language for creating a website. It’s the basic structure of the webpage. Additionally, it’s easy to learn and it has a lot of valuable........
      </p>
      <a href="https://medium.com/@rukshandanadir/7-html-tags-you-didnt-know-existed-21812c9cc8d5" className="text-white font-bold hover:text-zinc-300">Read more</a>

    </div>)
  );
};
const SkeletonThree = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
      5 HTML Tags You Might Know For The First Time
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Hello there! you must have enjoyed reading my previous blog on HTML tags. This time, I bring you another 5 underrated HTML tags you wish.......
      </p>
      <a href="https://medium.com/@rukshandanadir/5-unpopular-html-tags-you-might-know-for-the-first-time-1f792544617a" className="text-white font-bold hover:text-zinc-300">Read more</a>

    </div>)
  );
};
const SkeletonFour = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-black">
        Comming Soon
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
   
      </p>
 
    </div>)
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: blog1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:blog2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: blog3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: blog4, 
   },
];

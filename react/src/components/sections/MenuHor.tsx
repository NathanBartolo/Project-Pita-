import { TitleDesc } from "../shared/TitleDesc";
import React, { useEffect, useRef, useState } from "react";
import menuData from "../../data/menu.json";
import { MenuCard } from "../shared/MenuCard";
import { BtnLink } from "../shared/BtnLink";

export const MenuHor: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // filter for best selling items
  const featuredItems = menuData.filter(
    (item) => item.tags.includes("best") || item.tags.includes("main")
  );

  // Clone items to simulate infinite loop
  const loopedItems = [...featuredItems, ...featuredItems];

  // auto-scroll effect with pause on hover and infinite illusion
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || featuredItems.length < 5) return;

    let animationFrame: number;
    let scrollPos = 0;
    const speed = 0.5;

    const loopScroll = () => {
      if (!isHovered) {
        scrollPos += speed;

        // Reset to start seamlessly when reaching half (original list length)
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
          el.scrollLeft = 0;
        } else {
          el.scrollLeft = scrollPos;
        }
      }

      animationFrame = requestAnimationFrame(loopScroll);
    };

    animationFrame = requestAnimationFrame(loopScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [featuredItems.length, isHovered]);

  const scrollBy = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="flex flex-col mx-auto justify-center items-center">
        <TitleDesc
          title="View Our Bestsellers"
          description="Discover the rich flavor of our cuisine"
        />
      </div>

      {/* Scroll Arrows hidden feature not working well*/}
      {featuredItems.length >= 5 && (
        <div className="hidden justify-between absolute top-1/2 left-0 right-0 px-4 z-10 pointer-events-none">
          <button
            onClick={() => scrollBy(-300)}
            className="bg-white rounded-full shadow p-2 pointer-events-auto"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(300)}
            className="bg-white rounded-full shadow p-2 pointer-events-auto"
          >
            →
          </button>
        </div>
      )}

      <div
        ref={scrollRef}
        className="scrollbar flex gap-4 overflow-x-auto overscroll-contain scroll-smooth p-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {loopedItems.map((item, i) => (
          <div key={i} className="w-[calc(100vw/2.5)] min-w-[240px]">
            <MenuCard
              name={item.name}
              price={`AED ${item.price.toFixed(2)}`}
              rating={item.rating}
              id={""}
              image={item.image}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-3">
        <BtnLink
          text="View Our Full Menu"
          className="py-3 px-5"
          link={"/Menu"}
        />
      </div>
    </section>
  );
};

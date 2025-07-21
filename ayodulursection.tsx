"use client";

import { useRef } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const FEATURES = [
  { title: "Sipdok", img: "https://placehold.co/60x60?text=Sipdok" },
  { title: "Smart City", img: "https://placehold.co/60x60?text=Smart" },
  { title: "SPBE", img: "https://placehold.co/60x60?text=SPBE" },
  { title: "Radio", img: "https://placehold.co/60x60?text=Radio" },
  { title: "Edu", img: "https://placehold.co/60x60?text=Edu" },
  { title: "112", img: "https://placehold.co/60x60?text=112" },
  { title: "Today", img: "https://placehold.co/60x60?text=Today" },
  { title: "Open Data", img: "https://placehold.co/60x60?text=Data" },
  { title: "Pecel", img: "https://placehold.co/60x60?text=Pecel" },
  { title: "PPID", img: "https://placehold.co/60x60?text=PPID" },
  { title: "Analisa", img: "https://placehold.co/60x60?text=Analisa" },
  { title: "Sigap", img: "https://placehold.co/60x60?text=Sigap" },
  { title: "CSIRT", img: "https://placehold.co/60x60?text=CSIRT" },
];

export default function AyoDulurSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <Typography variant="h4" className="text-teal-800 font-bold">
            <span className="border-l-4 border-teal-800 pl-4">Ayo Dulur-Dulur</span>
          </Typography>
          <Typography variant="paragraph" className="text-gray-600 mt-2 ml-4">
            Sing podo rukun nata kutho medhioen
          </Typography>
        </div>
        <div className="hidden md:flex gap-2">
          <Button size="sm" variant="outlined" onClick={() => scroll("left")}>
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outlined" onClick={() => scroll("right")}>
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-4 scroll-smooth"
      >
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] flex-shrink-0 border rounded-lg p-4 flex items-center gap-4 bg-white shadow hover:shadow-md transition"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={60}
              height={60}
              className="rounded object-contain"
            />
            <div>
              <Typography variant="h6" className="text-gray-900">
                {item.title}
              </Typography>
              <div className="text-sm text-gray-600">Jelajahi</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Icons from "./icons";
import { Button } from "./ui/button";

const card = [
  {
    src: "/card/pexels-intros.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/rolls-royce.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/v8.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/rolls-royce2.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/pexels.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/pexels-cesar.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/v8.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/m3-1557866675.png",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/pexels-trace.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/introspectived.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
  {
    src: "/card/jessef.jpg",
    title: "Description",
    link: "demo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullamveniam doloremque corrupti accusamus nesciunt minus dolori busomnis sed consequuntur facere.",
  },
];
const Sliders = () => {
  const arrowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 1000,
    initialSlide: 5,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white dark:bg-charcoal py-[200px]">
      <div className="container">
        <h1 className="text-5xl text-center text-charcoal dark:text-white font-bold">
          Carousel <span className="text-attention">Slider !</span>
        </h1>
        {/* container */}
        <div className="relative">
          <Slider ref={arrowRef} {...settings}>
            {card.map(({ title, src, text, link }, index) => (
              <div className="group relative h-[240px] bg-[#E4F0FF]/60 dark:bg-[#22262E] cursor-pointer overflow-hidden rounded-[5px] p-2">
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt="logo"
                  className="group-hover:scale-[1.1] w-full h-full object-cover"
                />
                <div className="disk bg-black/60 w-full h-full absolute left-0 right-0 -bottom-[260px] group-hover:bottom-0 p-2">
                  <h1 className="text-3xl text-white mt-4">{title}</h1>
                  <p className="w-[90%] text-base font-extrabold text-white pt-4 ml-5">
                    {text}
                    <span className="text-red-600 underline pt-3 ml-3">
                      {link}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          {/* right arrow btn */}
          <Button
            onClick={() => (arrowRef.current as any)?.slickNext()}
            className="group w-11 h-11 absolute top-1/2 -translate-y-1/2  -right-28 cursor-pointer  flex items-center justify-center bg-[#F4F8FF] dark:bg-charcoal-dark dark:hover:bg-vox-blue !border-2 hover:border-white dark:border-white border-charcoal-cloudburst rounded-full"
          >
            <Icons.rightBtn />
          </Button>
          {/* left arrow btn */}
          <Button
            onClick={() => (arrowRef.current as any)?.slickPrev()}
            className="group w-11 h-11 absolute top-1/2 -translate-y-1/2 -left-[122px] cursor-pointer flex items-center justify-center bg-[#F4F8FF] dark:bg-charcoal-dark dark:hover:bg-vox-blue !border-2 hover:!border-white border-charcoal-cloudburst dark:border-white    rounded-full"
          >
            <Icons.leftBtn />
          </Button>
          {/* dots btn */}
          <span className="absolute bottom-7 left-1/2 -translate-x-1/2 flex justify-center gap-6">
            {card.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={`${
                    currentSlide === idx
                      ? "bg-primary border-none scale-[1.1] outline outline-1 outline-primary outline-offset-2"
                      : "bg-transparent"
                  } w-5 h-5 border border-charcoal-cloudburst dark:border-white rounded-full shadow-[0px_4px_8px_0px_rgba(61,137,251,0.25)]`}
                  onClick={() => (arrowRef.current as any).slickGoTo(idx)}
                ></button>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sliders;

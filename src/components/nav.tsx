"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/theme-button";

const NavList = [
  { id: "#home", text: "Home" },
  { id: "#about", text: "About" },
  { id: "#pricing", text: "Pricing" },
  { id: "#footer", text: "Contect" },
];

export default function Navbar() {
  const param = usePathname();
  console.log(param);
  const router = useRouter();
  return (
    <div className="sticky top-0 bg-white/90 z-50 backdrop-blur-md dark:bg-charcoal-dark/90 border-b border-vox-gray-solitude dark:border-charcoal-lightest">
      <div className="relative container flex items-center  justify-between py-4">
        {/* ul list*/}
        <ul className="text-charcoal-cloudburst dark:text-white  text-sm flex items-center gap-10   font-semibold uppercase">
          {NavList.map(({ id, text }, index) => (
            <li
              key={index}
              className="hover:text-primary hover:underline cursor-pointer"
            >
              <Link href={id}>{text}</Link>
            </li>
          ))}
        </ul>
        {/* logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Image src={"/card/logo.svg"} width={42} height={25} alt="logo" />
        </div>
        {/* button and darkmood icon */}
        <div className="flex items-center gap-6">
          <ModeToggle />
          <Button
            variant={"default"}
            onClick={() => router.push("/auth")}
            className="text-base font-semibold px-8 py-6"
          >
            Try For Free
          </Button>
        </div>
      </div>
    </div>
  );
}

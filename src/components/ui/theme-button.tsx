"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Icons from "../icons";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="secondary"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <Icons.moon className="absolute w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.sun className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

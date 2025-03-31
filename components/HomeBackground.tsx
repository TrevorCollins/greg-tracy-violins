"use client";

import Image from "next/image";
import bg from "../public/bg.png";
import bgSm from "../public/bg-sm.png";
import { useWindowSize } from "@/lib/utils";

export default function HomeBackground() {
  const { width } = useWindowSize();
  return (
    <Image
      alt="Restored violin"
      src={width > 1200 ? bg : bgSm}
      placeholder="empty"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "contain",
        objectPosition: "bottom center",
      }}
    />
  );
}

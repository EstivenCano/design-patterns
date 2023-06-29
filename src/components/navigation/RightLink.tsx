"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";

interface Props {
  id: string;
}

const RightLink = ({ id }: Props) => {
  ``;
  const element = useRef<Element | null>(null);
  const entry = useIntersectionObserver(element, {
    rootMargin: "-50px",
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    element.current = document.getElementById(id);
  }, [id]);

  return (
    <Link
      href={`#${id}`}
      className={`ml-1 text-sm hover:text-foreground truncate ${
        isVisible ? "text-red-600 dark:text-red-400" : "text-foreground/80"
      }`}>
      {id.replaceAll("-", " ")}
    </Link>
  );
};
export default RightLink;

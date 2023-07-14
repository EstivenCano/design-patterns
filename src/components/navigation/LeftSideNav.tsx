"use client";

import { patterns } from "@/lib/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Fragment, useEffect, useMemo, useRef } from "react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LeftSideNav = () => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const patternName = useMemo(
    () => pathname.split("/").at(-1) || "",
    [pathname]
  );

  useEffect(() => {
    const goToElement = async () => {
      const currentPattern = await document.querySelector(`#${patternName}`);

      if (currentPattern instanceof HTMLElement) {
        ref.current?.scroll({
          top: currentPattern?.offsetTop,
        });
      }
    };

    goToElement();
  }, [patternName]);

  return (
    <div className='group w-full hidden md:flex'>
      <Accordion
        ref={ref}
        type='multiple'
        defaultValue={["item-0", "item-1", "item-2"]}
        className='w-64 sticky top-20 md:max-h-[calc(100vh-140px)] max-h-[calc(100vh-85px)] overflow-y-auto pr-2 sm:mr-2 mr-8'>
        {patterns.map(({ category, list }, i) => (
          <Fragment key={category}>
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger className='capitalize hover:bg-muted'>
                {category.replaceAll("-", " ")}
              </AccordionTrigger>
              <AccordionContent className='capitalize'>
                {list.map((pattern) => (
                  <Link
                    id={pattern.name}
                    href={pattern.link}
                    className={`${
                      pattern.name === patternName
                        ? "bg-destructive/5 dark:bg-red-400/10 border-l-4 border-red-400/50"
                        : ""
                    } hover:bg-muted p-2`}
                    key={pattern.id}>
                    {pattern.name.replaceAll("-", " ")}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Fragment>
        ))}
      </Accordion>
    </div>
  );
};

"use client";

import { patterns } from "@/lib/constants";
import { Fragment } from "react";
import React from "react";

export const LeftSideNav = () => {
  return (
    <div className='group w-full'>
      <dl className='max-w-sm hidden scroll-style md:block pr-2 mr-8 sticky top-20 self-start max-h-[calc(100vh-85px)] overflow-y-auto'>
        {patterns.map(({ category, list }) => (
          <Fragment key={category}>
            <dt className='capitalize bg-destructive/5 dark:bg-red-400/10 text-destructive dark:text-red-400 text-sm rounded-md font-bold p-2'>
              {category.replaceAll("-", " ")}
            </dt>
            {list.map((pattern) => (
              <dd className='capitalize text-sm my-1 p-1' key={pattern.id}>
                {pattern.name.replaceAll("-", " ")}
              </dd>
            ))}
          </Fragment>
        ))}
      </dl>
    </div>
  );
};

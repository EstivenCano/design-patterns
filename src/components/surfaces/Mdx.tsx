import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";
import { Callout } from "./Callout";
import { MdxCard } from "./MdxCard";
import { Pre } from "./Pre";

type SafeNumber = number | `${number}`;

const components = {
  h1: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 pb-1 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.ImgHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium underline underline-offset-4 text-red-600 dark:text-red-400",
        className
      )}
      {...props}
    />
  ),
  p: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ImgHTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ImgHTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ImgHTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    src = "",
    className,
    alt = "",
    width = 50,
    height = 50,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const widthTyped = width as SafeNumber;
    const heightTyped = height as SafeNumber;

    return (
      <Image
        src={src}
        alt={alt}
        width={widthTyped}
        height={heightTyped}
        quality={100}
        className={cn("rounded-md border", className)}
      />
    );
  },
  hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border p-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.ImgHTMLAttributes<HTMLPreElement>) => (
    <Pre
      className={cn(
        "mb-4 mt-6 overflow-x-hidden rounded-lg border pr-1 pt-4 pb-1",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.ImgHTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "rounded flex flex-col overflow-x-auto py-[0.2rem] font-mono text-xs sm:text-sm",
        className
      )}
      {...props}
    />
  ),
  span: ({ className, ...props }: React.ImgHTMLAttributes<HTMLElement>) => (
    <span className={cn("w-4", className)} {...props} />
  ),
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className='mdx max-w-2xl pb-10'>
      <Component components={components} />
    </div>
  );
}

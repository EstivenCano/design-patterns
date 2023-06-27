import { Button } from "@/components/ui/button";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
type SafeNumber = number | `${number}`;
import Link from "next/link";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...components,
    h1: ({ children }) => (
      <h1 className='text-primary text-2xl font-bold capitalize'>{children}</h1>
    ),
    h2: ({ children }) => <h2 className='text-xl font-bold'>{children}</h2>,
    div: ({ children, ...props }) => (
      <div className='text-red-200' {...props}>
        {children}
      </div>
    ),
    img: ({ src = "", alt = "", width = 50, height = 50 }) => {
      const widthTyped = width as SafeNumber;
      const heightTyped = height as SafeNumber;

      return (
        <Image
          src={src}
          alt={alt}
          width={widthTyped}
          height={heightTyped}
          quality={100}
        />
      );
    },
    a: ({ children, ...props }) => (
      <Button variant='destructive' asChild className={props.className}>
        <Link href={props.href || "/"}>{children}</Link>
      </Button>
    ),
  };
}

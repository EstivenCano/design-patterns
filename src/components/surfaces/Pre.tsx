"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const Pre = ({
  children,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLElement>) => {
  const { theme } = useTheme();
  return (
    <pre
      className={cn(
        `${
          theme === "light"
            ? "data-[theme=dark]:hidden"
            : "data-[theme=light]:hidden"
        }`,
        className
      )}
      {...props}>
      {children}
    </pre>
  );
};

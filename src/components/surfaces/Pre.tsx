"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const Pre = ({
  children,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLElement>) => {
  const { theme } = useTheme();

  const hideColors = () => {
    if (theme === "light") return "data-[theme=dark]:hidden";
    if (theme === "dark") return "data-[theme=light]:hidden";

    return "data-[theme=light]:hidden";
  };

  return (
    <pre className={cn(hideColors(), className)} {...props}>
      {children}
    </pre>
  );
};

"use client";

import { usePathname } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const TopPage: FC<Props> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default TopPage;

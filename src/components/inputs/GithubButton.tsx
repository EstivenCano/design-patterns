"use client";

import * as React from "react";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { repo } from "@/lib/constants";

interface Props {
  href: string;
}

export function GithubButton({ href }: Props) {
  return (
    <Button variant='ghost' size='icon' asChild>
      <Link href={href} aria-label='GitHub link' target='_blank'>
        <Github className='h-[1.2rem] w-[1.2rem]' />
      </Link>
    </Button>
  );
}

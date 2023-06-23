"use client";

import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { CommandIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { patterns } from "@/lib/constants";
import { Fragment } from "react";
import React from "react";

export const SearchPatterns = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 relative min-w-[200px] w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64'>
          <p className='whitespace-nowrap'>Search a pattern...</p>
          <Badge variant='secondary' className='absolute right-2 top-2 gap-1'>
            <CommandIcon size={15} />
            <p>k</p>
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0'>
        <Command>
          <CommandInput placeholder='Type to search...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {patterns.map(({ category, list }) => (
              <Fragment key={category}>
                <CommandGroup
                  className='capitalize'
                  heading={category.replaceAll("-", " ")}>
                  {list.map((pattern) => (
                    <CommandItem key={pattern.id}>{pattern.name}</CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </Fragment>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

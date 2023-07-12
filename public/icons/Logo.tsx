import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Logo = () => {
  return (
    <Button variant='ghost' size='icon' className='md:flex hidden' asChild>
      <Link href='/' className='w-fit relative focus:outline-none'>
        <div className='w-10 h-10 border-2 rounded-sm border-destructive dark:border-red-400 relative pl-2'>
          <div className='bg-background/95 w-fit absolute top-1/2 -left-1/2 transform translate-x-6 -translate-y-1/2 rounded-sm px-1'>
            <p className='whitespace-nowrap font-bold text-xs p-1'>
              Design Patterns
            </p>
          </div>
        </div>
      </Link>
    </Button>
  );
};

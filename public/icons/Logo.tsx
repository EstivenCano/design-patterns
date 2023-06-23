import Link from "next/link";

export const Logo = () => {
  return (
    <div className='w-[116px] justify-end md:flex hidden'>
      <Link href='/' className='w-fit relative'>
        <div className='w-10 h-10 border-2 rounded-sm border-destructive relative pl-2'>
          <div className='bg-background w-fit absolute top-1/2 md:-left-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <p className='whitespace-nowrap font-bold text-xs'>
              Design Patterns
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

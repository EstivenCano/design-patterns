import Link from "next/link";

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='w-10 h-10 border-2 rounded-sm border-destructive relative'>
        <div className='bg-background w-fit absolute top-1/2 md:-left-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <p className='whitespace-nowrap font-bold text-xs md:flex hidden'>
            Design Patterns
          </p>
          <p className='whitespace-nowrap font-bold text-xs md:hidden flex'>
            D. Patterns
          </p>
        </div>
      </div>
    </Link>
  );
};

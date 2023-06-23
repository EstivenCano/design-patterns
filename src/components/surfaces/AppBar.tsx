import { Logo } from "../../../public/icons/Logo";
import { ModeToggle } from "../inputs/ChangeTheme";
import { GithubButton } from "../inputs/GithubButton";
import { SearchPatterns } from "../inputs/SearchPatterns";

export const AppBar = () => {
  return (
    <header className='flex justify-center supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur px-4 md:px-20 py-2'>
      <div className='max-w-7xl w-full flex justify-between'>
        <Logo />
        <div className='flex gap-4 w-full justify-end'>
          <SearchPatterns />
          <div className='flex flex-shrink-0'>
            <GithubButton />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

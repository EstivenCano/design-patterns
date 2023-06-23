import { Logo } from "../../../public/icons/Logo";

export const AppBar = () => {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur px-6 md:px-20 py-2'>
      <Logo />
    </header>
  );
};

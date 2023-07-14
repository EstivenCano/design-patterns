import { LeftSideNav } from "@/components/navigation/LeftSideNav";

export const metadata = {
  title: "Design Patterns",
  description: "List of patterns with quick access to each on them",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-nowrap relative flex-col md:flex-row min-h-screen max-w-7xl sm:gap-4 gap-8 px-2 space-y-4'>
      <LeftSideNav />
      {children}
    </main>
  );
}

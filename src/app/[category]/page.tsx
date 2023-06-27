import { patterns } from "@/lib/constants";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

export default async function Pattern({
  params: { category },
}: {
  params: { category: string };
}) {
  const patternExist = patterns.some(
    (pattern) => pattern.category === category
  );

  if (!patternExist) {
    redirect("/");
  }

  const CategoryContent = dynamic(
    () => import(`../content/en/${category}.mdx`)
  );

  return (
    <main className='flex gap-4 min-h-screen max-w-5xl flex-col py-8 px-10'>
      <CategoryContent />
    </main>
  );
}

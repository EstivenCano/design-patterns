import { patterns } from "@/lib/constants";
import { redirect } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import { Mdx } from "@/components/surfaces/Mdx";

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === `/${slug}`);

  if (!doc) {
    redirect("/");
  }

  return doc;
}

export default async function Category({
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

  const doc = await getDocFromParams(category);

  return (
    <main className='flex gap-4 min-h-screen max-w-5xl flex-col py-4 md:py-8 md:px-10 px-4'>
      <Mdx code={doc.body.code} />
    </main>
  );
}

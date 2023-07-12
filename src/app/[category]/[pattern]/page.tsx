import { RightSideNav } from "@/components/navigation/RightSideNav";
import { Mdx } from "@/components/surfaces/Mdx";
import { allDocs } from "contentlayer/generated";
import { redirect } from "next/navigation";

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === `/${slug}`);

  if (!doc) {
    redirect("/");
  }

  return doc;
}

export default async function Pattern({
  params: { pattern },
}: {
  params: { pattern: string };
}) {
  const doc = await getDocFromParams(pattern);

  return (
    <main className='flex relative min-h-screen max-w-5xl items-center py-4 md:py-8 md:px-10 px-4'>
      <Mdx code={doc.body.code} />
      <RightSideNav tags={doc.tags} page={pattern} />
    </main>
  );
}

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
    <main className='flex min-h-screen max-w-5xl flex-col items-center py-8 px-10'>
      <Mdx code={doc.body.code} />
    </main>
  );
}

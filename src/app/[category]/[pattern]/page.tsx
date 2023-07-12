import { RightSideNav } from "@/components/navigation/RightSideNav";
import { SmallDeviceNav } from "@/components/navigation/SmallDeviceNav";
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
    <main className='flex relative flex-col lg:flex-row min-h-screen max-w-5xl items-center py-2 lg:py-4 md:px-10 px-4'>
      <SmallDeviceNav tags={doc.tags} />
      <Mdx code={doc.body.code} />
      <RightSideNav tags={doc.tags} page={pattern} />
    </main>
  );
}

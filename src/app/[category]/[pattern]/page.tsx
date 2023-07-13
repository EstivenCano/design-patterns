import { LeftSideNav } from "@/components/navigation/LeftSideNav";
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
    <main className='flex flex-nowrap relative flex-col md:flex-row min-h-screen max-w-7xl sm:gap-4 gap-8 px-2 space-y-4'>
      <SmallDeviceNav tags={doc.tags} />
      <LeftSideNav patternName={pattern} />
      <Mdx code={doc.body.code} />
      <RightSideNav tags={doc.tags} page={pattern} />
    </main>
  );
}

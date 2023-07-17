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

export async function generateMetadata({
  params: { pattern },
}: {
  params: { pattern: string };
}) {
  const doc = await getDocFromParams(pattern);

  return { title: doc.title, description: doc.description };
}

export default async function Pattern({
  params: { pattern },
}: {
  params: { pattern: string };
}) {
  const doc = await getDocFromParams(pattern);

  return (
    <>
      <SmallDeviceNav tags={doc.tags} />
      <Mdx code={doc.body.code} />
      <RightSideNav tags={doc.tags} page={pattern} />
    </>
  );
}

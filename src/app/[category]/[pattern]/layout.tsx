import { SmallDeviceNav } from "@/components/navigation/SmallDeviceNav";
import { allDocs } from "contentlayer/generated";
import { redirect } from "next/navigation";

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === `/${slug}`);

  if (!doc) {
    redirect("/");
  }

  return doc;
}

export default async function PatternLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { pattern: string };
}) {
  const doc = await getDocFromParams(params.pattern);

  return (
    <>
      <SmallDeviceNav tags={doc.tags} />
      {children}
    </>
  );
}

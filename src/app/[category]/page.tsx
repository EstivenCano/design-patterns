import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patterns } from "@/lib/constants";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Pattern({
  params: { category },
}: {
  params: { category: string };
}) {
  const title = category.replaceAll("-", " ");
  const patternExist = patterns.some(
    (pattern) => pattern.category === category
  );

  if (!patternExist) {
    redirect("/");
  }

  return (
    <main className='flex min-h-screen max-w-7xl flex-col items-center py-16 px-10'>
      <h1 className='text-primary text-2xl font-bold capitalize'>{title}</h1>
    </main>
  );
}

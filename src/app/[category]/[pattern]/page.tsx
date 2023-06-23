import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patterns } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Pattern({
  params: { pattern },
}: {
  params: { pattern: string };
}) {
  const title = pattern.replaceAll("-", " ");

  return (
    <main className='flex min-h-screen max-w-7xl flex-col items-center py-16 px-10'>
      <h1 className='text-primary text-2xl font-bold capitalize'>{title}</h1>
    </main>
  );
}

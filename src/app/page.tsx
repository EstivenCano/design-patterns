import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patterns } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className='flex min-h-screen max-w-7xl flex-col items-center py-4 md:py-8 md:px-10 px-4'>
      <h1 className='text-primary text-2xl font-bold'>Desing Patterns</h1>
      <p>A short demonstration</p>
      {patterns.map(({ category, list }) => (
        <section
          key={category}
          className='w-full flex flex-wrap gap-4 my-4 justify-center py-4'>
          <Button asChild variant='ghost' className='w-full group'>
            <Link href={`/${category}`} className='flex gap-4'>
              <h2 className='text-xl font-bold capitalize'>
                {category.replaceAll("-", " ")}
              </h2>
              <ArrowRightCircle className='group-hover:translate-x-4 duration-200 group-hover:text-destructive group-hover:dark:text-red-400' />
            </Link>
          </Button>
          {list.map((pattern) => (
            <Link href={pattern.link} key={pattern.id}>
              <Card className='w-56 h-full hover:border-destructive dark:hover:border-red-400 hover:cursor-pointer'>
                <CardHeader>
                  <CardTitle className='text-center text-xl capitalize'>
                    {pattern.name.replaceAll("-", " ")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={pattern.image}
                    alt={`${pattern.name} image`}
                    width={120}
                    height={120}
                    className='m-auto'
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      ))}
    </main>
  );
}

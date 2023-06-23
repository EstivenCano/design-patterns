import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patterns } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen max-w-7xl flex-col items-center py-8 px-10'>
      <h1 className='text-primary text-2xl font-bold'>Desing Patterns</h1>
      <p>A short demonstration</p>
      {patterns.map(({ category, list }) => (
        <section
          key={category}
          className='w-full flex flex-wrap gap-2 my-4 justify-center md:justify-normal py-4'>
          <h2 className='text-xl font-bold w-full capitalize'>
            {category.replaceAll("-", " ")}
          </h2>
          {list.map((pattern) => (
            <Link href={pattern.link} key={pattern.id}>
              <Card className='mt-4 w-56 h-full hover:border-destructive hover:cursor-pointer'>
                <CardHeader>
                  <CardTitle className='text-center text-xl'>
                    {pattern.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={pattern.image}
                    alt='Factory Method Image'
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

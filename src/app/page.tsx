import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center py-24 px-10'>
      <h1 className='text-primary text-2xl font-bold'>Desing Patterns</h1>
      <p>A short demonstration</p>
      <Card className='mt-6'>
        <CardHeader>
          <CardTitle>Factory Method</CardTitle>
          <CardDescription>
            Short description about desing pattern
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is the content of the card, usually it wil have some images and
            random text
          </p>
        </CardContent>
        <CardFooter>
          <p>Some actions maybe?</p>
        </CardFooter>
      </Card>
    </main>
  );
}

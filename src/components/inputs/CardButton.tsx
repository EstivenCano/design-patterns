import { FC, ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface Props {
  title: string;
  content: ReactNode;
}

export const CardButton: FC<Props> = ({ content, title }) => {
  return (
    <Card className='mt-6 hover:border-destructive hover:cursor-pointer'>
      <CardHeader>
        <CardTitle className='text-center'>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

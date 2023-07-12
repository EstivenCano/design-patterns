import { FC } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  tags?: Array<string>;
}

export const SmallDeviceNav: FC<Props> = ({ tags }) => {
  return (
    <div className='w-full lg:hidden border-t-2 z-10 px-4 fixed left-0 bottom-0 py-1 bg-background'>
      <Select>
        <SelectTrigger className='truncate self-start'>
          <SelectValue placeholder='On this page' />
        </SelectTrigger>
        <SelectContent>
          {tags &&
            Array.from(tags).map((link, i) => {
              const [id, level] = link.split("_");

              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  className={`capitalize relative flex w-full cursor-default select-none items-center rounded-sm px-1 pl-${level} py-1.5 pr-2 text-sm outline-none hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}>
                  {id.replaceAll("-", " ")}
                </Link>
              );
            })}
        </SelectContent>
      </Select>
    </div>
  );
};

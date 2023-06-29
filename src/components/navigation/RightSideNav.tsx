import { FC } from "react";
import Link from "next/link";
import { CircleDashed } from "lucide-react";

interface Props {
  tags?: Array<string>;
}

export const RightSideNav: FC<Props> = ({ tags }) => {
  return (
    <aside className='w-full h-full sticky top-20 self-start pl-8 md:flex flex-col gap-4 hidden max-w-xs overflow-hidden overflow-y-auto'>
      <h2 className='font-bold'>On this page</h2>
      <div className='flex flex-col capitalize gap-2'>
        {tags &&
          Array.from(tags).map((link, i) => {
            const [id, level] = link.split("_");

            return (
              <span className={`flex items-center pl-${level}`} key={i}>
                <CircleDashed size={9} />
                <Link
                  href={`#${id}`}
                  className={`ml-1 text-sm text-foreground/70 hover:text-foreground truncate`}>
                  {id.replaceAll("-", " ")}
                </Link>
              </span>
            );
          })}
      </div>
    </aside>
  );
};

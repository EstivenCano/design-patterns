import { FC } from "react";
import { CircleDashed, Edit } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { repo } from "@/lib/constants";

interface Props {
  tags?: Array<string>;
  page?: string;
}

const RightLink = dynamic(() => import("./RightLink"));

export const RightSideNav: FC<Props> = ({ tags, page }) => {
  return (
    <div className='group'>
      <aside className='w-full pr-2 h-full md:max-h-[calc(100vh-140px)] max-h-[calc(100vh-85px)] sticky top-20 self-start pl-8 lg:flex flex-col gap-4 hidden max-w-sm overflow-y-auto'>
        <h2 className='font-bold'>On this page</h2>
        <div className='flex flex-col capitalize gap-2'>
          {tags &&
            Array.from(tags).map((link, i) => {
              const [id, level] = link.split("_");

              return (
                <span className={`flex items-center pl-${level}`} key={i}>
                  <CircleDashed size={9} className='shrink-0' />
                  <RightLink id={id} />
                </span>
              );
            })}
        </div>
        <h2 className='font-bold'>More</h2>
        <div className='flex flex-col gap-2'>
          <span
            className={`flex items-center text-sm gap-2 hover:text-foreground text-foreground/80`}>
            <Edit size={15} />
            <Link
              href={`${repo}/blob/main/src/content/en/${page}.mdx`}
              target='_blank'>
              Edit this page
            </Link>
          </span>
        </div>
      </aside>
    </div>
  );
};

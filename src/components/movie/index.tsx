"use client";

import SkeletonMovie from "@/components/skeleton-movie";
import { Badge } from "@/components/ui/badge";
import { Item } from "@/types/Movie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Movie({ data }: { data: Item }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <SkeletonMovie />
      ) : (
        <div>
          <Link href={`/phim/${data.slug}`}>
            <div className='relative w-full max-h-[320px] h-[320px] overflow-hidden rounded-sm'>
              <div className='relative w-full h-full'>
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL_IMAGE}/uploads/movies/${data.thumb_url}`}
                  alt={data.name}
                  fill
                  sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
                  className='object-cover'
                />
              </div>
              <Badge variant={"secondary"} className='absolute top-2 left-2'>
                {data.episode_current}
              </Badge>
            </div>
            <h5 className='pt-2 line-clamp-1 hover:text-red-500'>{data.name}</h5>
            <span className='text-sm line-clamp-1 text-slate-400'>{data.origin_name}</span>
          </Link>
        </div>
      )}
    </>
  );
}

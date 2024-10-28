"use client";

import Loading from "@/app/loading";
import SkeletonMovie from "@/components/skeleton-movie";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Item } from "@/types/Movie";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Movie({ data }: { data: Item }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <div>
        <Link href={`/phim/${data.slug}`}>
          <div className='relative w-full max-h-[320px] h-[320px] overflow-hidden rounded-sm'>
            <div className='relative w-full h-full'>
              {!isLoaded && <Skeleton className='w-[220px] max-w-full h-full' />}
              <Image
                src={`${process.env.NEXT_PUBLIC_URL_IMAGE}/uploads/movies/${data.thumb_url}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                width={230}
                height={320}
                onLoadingComplete={handleImageLoad}
                loading='lazy'
                alt={data.name}
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
    </>
  );
}

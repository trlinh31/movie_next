"use client";

import { Movie } from "@/types/Movie";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function MovieList({ data }: { data: Movie | null }) {
  return (
    <div className='container py-5 md:py-10'>
      <div className='flex items-center justify-between pb-5 md:pb-10'>
        <h3 className='font-bold text-base md:text-3xl uppercase'>{data?.data.titlePage}</h3>

        <Link href={data?.data.breadCrumb[0].slug || "/"} className='flex items-center gap-x-1 hover:text-red-500'>
          <span>Xem tất cả</span>
          <ChevronRight size={18} />
        </Link>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}>
        {data?.data.items.map((item) => (
          <SwiperSlide key={item._id}>
            <Link href={`/phim/${item.slug}`}>
              <div className='relative w-full max-h-[320px] h-[320px] overflow-hidden rounded-sm'>
                <div className='relative w-full h-full'>
                  <Image
                    src={`${data.data.APP_DOMAIN_CDN_IMAGE}/uploads/movies/${item.thumb_url}`}
                    alt={item.name}
                    fill
                    sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
                    className='object-cover'
                  />
                </div>
                <Badge variant={"secondary"} className='absolute top-2 left-2'>
                  {item.episode_current}
                </Badge>
              </div>
              <h5 className='pt-2 line-clamp-1 hover:text-red-500'>{item.name}</h5>
              <span className='text-sm line-clamp-1 text-slate-400'>{item.origin_name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

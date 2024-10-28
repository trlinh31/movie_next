"use client";

import { Movie as MovieType } from "@/types/Movie";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "@/components/movie";

export default function MovieList({ data }: { data: MovieType | null }) {
  const breakpoints = {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  };

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
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}>
        {data?.data.items.map((item) => (
          <SwiperSlide key={item._id}>
            <Movie data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

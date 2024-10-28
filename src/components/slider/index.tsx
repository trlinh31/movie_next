"use client";

import { Movie } from "@/types/Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Slider({ data }: { data: Movie | null }) {
  return (
    <div className='min-h-[15vh]'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}>
        {data &&
          data.data.items.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div className='relative h-[50vh] lg:h-[80vh] overflow-hidden'>
                  <div className='blur-[1rem] brightness-50 absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 transition-opacity'>
                    <img
                      src={`${data.data.APP_DOMAIN_CDN_IMAGE}/uploads/movies/${item.thumb_url}`}
                      className='w-full h-full object-cover'
                      loading='lazy'
                      alt={item.name}
                    />
                  </div>
                  <div className='absolute top-0 left-0 right-0 pt-10 bottom-0 w-full h-full grid grid-cols-3 grid-rows-1 gap-x-2 container'>
                    <div className='col-span-2 h-full flex flex-col justify-center'>
                      <div className='text-left space-y-4'>
                        <Link href={`/phim/${item.slug}`} title={item.name}>
                          <h1 className='text-lg lg:text-4xl font-bold md:mb-2 line-clamp-2'>{item.name}</h1>
                          <span className='text-sm md:text-base text-slate-400'>{item.origin_name}</span>
                        </Link>
                        <div className='flex items-center flex-wrap gap-2 md:gap-3 divide-x divide-slate-400'>
                          <div className='flex gap-2 items-center w-max'>
                            <Calendar />
                            <span className='font-bold text-xs md:text-base'>{item.year}</span>
                          </div>
                          <div className='pl-2 md:pl-3'>
                            <Badge className='rounded-none'>
                              <span className='font-bold text-xs md:text-base'>{item.quality}</span>
                            </Badge>
                          </div>
                          <div className='pl-2 md:pl-3'>
                            <span className='font-bold text-xs md:text-base'>{item.episode_current}</span>
                          </div>
                        </div>
                        <div className='!mt-8 md:!mt-12'>
                          <Button size={"lg"} variant={"destructive"}>
                            <Play size={30} />
                            <span>Xem ngay</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-1 h-full flex items-center justify-end'>
                      <Image
                        src={`${data.data.APP_DOMAIN_CDN_IMAGE}/uploads/movies/${item.thumb_url}`}
                        width={300}
                        height={300}
                        quality={100}
                        loading='lazy'
                        className='w-full h-full object-cover max-w-[20rem] lg:max-h-[27rem] max-h-[13rem] shadow-xl bg-transparent transition-transform block rounded-sm'
                        alt={item.name}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

// <div key={item._id} className='backdrop-blur-sm absolute top-0 left-0 w-full h-[85vh] max-h-[85vh] z-0 transition-opacity min-h-[15vh]'>
//   <div>
//     <img src={data.pathImage + item.thumb_url} className='w-full h-full object-cover' loading='lazy' alt={item.name} />
//   </div>
// </div>

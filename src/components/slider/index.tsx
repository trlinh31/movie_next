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
                <div className='relative h-[80vh] overflow-hidden'>
                  <div className='blur-[1rem] brightness-50 absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 transition-opacity'>
                    <img
                      src={`${data.data.APP_DOMAIN_CDN_IMAGE}/uploads/movies/${item.thumb_url}`}
                      className='w-full h-full object-cover'
                      loading='lazy'
                      alt={item.name}
                    />
                  </div>
                  <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full grid grid-cols-3 grid-rows-1 container'>
                    <div className='col-span-2 h-full flex flex-col justify-center'>
                      <div className='text-left space-y-4'>
                        <Link href={`/phim/${item.slug}`} title={item.name}>
                          <h1 className='text-4xl font-bold mb-2'>{item.name}</h1>
                          <span className='text-base text-slate-400'>{item.origin_name}</span>
                        </Link>
                        <div className='flex items-center gap-3 divide-x divide-slate-400'>
                          <div className='flex gap-2 items-center w-max'>
                            <svg width='24' height='24' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.8085 10.2582V10.2619C14.7343 10.2147 14.582 10.1914 14.3908 10.1914V15.0079C14.66 15.0079 14.828 14.9457 14.891 14.8399C14.9533 14.7387 14.9848 14.4379 14.9848 13.9572V11.0899C14.9848 10.7614 14.981 10.5507 14.9533 10.4607C14.93 10.3632 14.8865 10.2964 14.8123 10.2574L14.8085 10.2582ZM22.9138 0.668683H2.12075C1.70268 0.692737 1.30765 0.868116 1.0094 1.16208C0.711161 1.45604 0.530092 1.8485 0.5 2.26618L0.5 23.0472C0.5585 23.9224 1.211 24.5899 2.05475 24.6642C2.0705 24.6679 2.08625 24.6679 2.102 24.6679H22.946C23.3707 24.6253 23.7647 24.4269 24.0518 24.111C24.3389 23.7951 24.4988 23.3841 24.5008 22.9572V2.37868C24.4986 1.9467 24.3344 1.53125 24.0407 1.21448C23.747 0.897711 23.3451 0.702674 22.9145 0.667933L22.9138 0.668683ZM5.29325 16.2934H3.38675V8.92993H5.29325V16.2934ZM11.8318 16.2934H10.1713V11.3209L9.49925 16.2897H8.312L7.613 11.4304L7.6055 16.2897H5.94125V8.92993H8.40575C8.492 9.44968 8.56625 9.97693 8.636 10.5042L8.90525 12.3717L9.35075 8.92993H11.831L11.8318 16.2934ZM16.8088 14.1139C16.8088 14.7664 16.766 15.2074 16.703 15.4339C16.655 15.6381 16.5411 15.8207 16.379 15.9537C16.2154 16.0903 16.0189 16.1818 15.809 16.2192C15.5863 16.2619 15.239 16.2934 14.7898 16.2934L14.786 16.2897H12.4813V8.92993H13.907C14.8213 8.92993 15.356 8.97718 15.6763 9.05518C16.0003 9.14518 16.2508 9.28168 16.4225 9.47743C16.5868 9.65743 16.6963 9.87943 16.7353 10.1217C16.7863 10.3564 16.8095 10.8252 16.8095 11.5242L16.8088 14.1139ZM21.7543 14.5864C21.7543 15.0357 21.707 15.3522 21.6643 15.5787C21.602 15.8014 21.4693 15.9807 21.2578 16.1449C21.0313 16.3129 20.777 16.3872 20.4763 16.3872C20.2573 16.3872 19.976 16.3249 19.7968 16.2507C19.597 16.1445 19.4214 15.9982 19.2808 15.8209L19.1675 16.2934H17.4485V8.92993L17.429 8.92618H19.2298V11.3247C19.3783 11.1492 19.5463 11.0164 19.7375 10.9264C19.9584 10.8422 20.1926 10.7985 20.429 10.7974C20.6555 10.7974 20.8783 10.8327 21.089 10.9144C21.2608 10.9849 21.4093 11.0982 21.5263 11.2429C21.6163 11.3682 21.6748 11.5122 21.7063 11.6652C21.7333 11.8017 21.749 12.0949 21.749 12.5322V14.5872L21.7543 14.5864ZM19.5785 11.8722C19.4615 11.8722 19.3873 11.9149 19.3558 11.9929C19.3243 12.0747 19.2973 12.2817 19.2973 12.6177V14.5632C19.2973 14.8872 19.3243 15.0987 19.3558 15.1879C19.3759 15.2302 19.4083 15.2654 19.4486 15.2891C19.489 15.3127 19.5356 15.3237 19.5823 15.3207C19.6993 15.3207 19.8515 15.2734 19.883 15.1797C19.91 15.0822 19.9258 14.8594 19.9258 14.5077L19.9573 14.5039V12.6132C19.9573 12.3124 19.9415 12.1054 19.8988 12.0117C19.8515 11.9104 19.7038 11.8707 19.5823 11.8707L19.5785 11.8722Z'
                                fill='#FFD600'
                              />
                            </svg>
                            <span className='font-bold'>{item.tmdb.vote_average}/10</span>
                          </div>
                          <div className='flex gap-2 items-center w-max pl-3'>
                            <Calendar />
                            <span className='font-bold'>{item.year}</span>
                          </div>
                          <div className='pl-3'>
                            <Badge className='rounded-none'>
                              <span className='font-bold'>{item.quality}</span>
                            </Badge>
                          </div>
                          <div className='pl-3'>
                            <span className='font-bold'>{item.episode_current}</span>
                          </div>
                        </div>
                        <div className='!mt-12'>
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
                        className='w-full h-full object-cover max-w-[20rem] max-h-[27rem] shadow-xl bg-transparent transition-transform block rounded-xl'
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

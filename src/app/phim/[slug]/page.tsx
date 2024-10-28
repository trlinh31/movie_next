"use client";

import Loading from "@/app/loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useFetchData from "@/hooks/useFetchData";
import { MovieDetail } from "@/types/MovieDetail";
import { Calendar, Eye, Play } from "lucide-react";
import Link from "next/link";

export default function MoviePage({ params }: { params: { slug: string } }) {
  const { data, loading } = useFetchData<MovieDetail>(`/phim/${params.slug}`);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className='relative h-[70vh] overflow-hidden'>
        <div className='blur-[1rem] brightness-50 absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 transition-opacity'>
          <img src={data?.data.seoOnPage.seoSchema.image} className='w-full h-full object-cover' loading='lazy' alt={data?.data.item.name} />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full grid grid-cols-3 grid-rows-1 gap-x-2 container'>
          <div className='col-span-2 h-full pt-32'>
            <div className='text-left space-y-4'>
              <div>
                <h1 className='text-lg lg:text-4xl font-bold md:mb-2 line-clamp-2'>{data?.data.item.name}</h1>
                <span className='text-sm md:text-base text-slate-400'>{data?.data.item.origin_name}</span>
              </div>
              <div className='flex items-center flex-wrap gap-2 md:gap-3 divide-x divide-slate-400'>
                <div className='flex gap-2 items-center w-max'>
                  <Calendar />
                  <span className='font-bold text-xs md:text-base'>{data?.data.item.year}</span>
                </div>
                <div className='pl-2 md:pl-3'>
                  <Badge className='rounded-none'>
                    <span className='font-bold text-xs md:text-base'>{data?.data.item.quality}</span>
                  </Badge>
                </div>
                <div className='flex gap-2 items-center w-max pl-2 md:pl-3'>
                  <Eye />
                  <span className='font-bold text-xs md:text-base'>{data?.data.item.view}</span>
                </div>
              </div>
              <div className='flex gap-x-2 items-center'>
                {data?.data.item.category.map((item) => (
                  <Badge key={item.id} variant={"secondary"} className='rounded-sm'>
                    {item.name}
                  </Badge>
                ))}
              </div>
              <ul className='space-y-2'>
                <li>
                  Diễn viên:{" "}
                  {data?.data.item.actor.map((item, index) => (
                    <span key={index} className='text-slate-400'>
                      {item}
                      {index < data.data.item.actor.length - 1 && ", "}
                    </span>
                  ))}
                </li>
                <li>
                  Đạo diễn:{" "}
                  {data?.data.item.director.map((item, index) => (
                    <span key={index} className='text-slate-400'>
                      {item}
                      {index < data.data.item.director.length - 1 && ", "}
                    </span>
                  ))}
                </li>
                <li>
                  Quốc gia: <span className='text-slate-400'>{data?.data.item.country[0].name}</span>
                </li>
                <li>
                  Thể loại:{" "}
                  {data?.data.item.category.map((item, index) => (
                    <span key={index} className='text-slate-400'>
                      {item.name}
                      {index < data.data.item.category.length - 1 && ", "}
                    </span>
                  ))}
                </li>
                <li>
                  Thời lượng: <span className='text-slate-400'>{data?.data.item.time}</span>
                </li>
                <li>
                  Trạng thái: <span className='text-slate-400'>{data?.data.item.episode_current}</span>
                </li>
              </ul>
              {data?.data.item.status !== "trailer" && (
                <div className='!mt-8'>
                  <Button size={"lg"} variant={"destructive"}>
                    <Play size={30} />
                    <span>Xem ngay</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className='col-span-1 h-full pt-32 flex items-start justify-end'>
            <img
              src={data?.data.seoOnPage.seoSchema.image}
              loading='lazy'
              className='w-full h-full object-cover max-w-[20rem] lg:max-h-[27rem] max-h-[13rem] shadow-xl bg-transparent transition-transform block rounded-sm'
              alt={data?.data.item.name || ""}
            />
          </div>
        </div>
      </div>
      <div className='container py-6'>
        <div className='space-y-4'>
          <div>
            <h2 className='text-2xl font-bold pb-4'>Nội dung phim</h2>
            <div className='text-base text-slate-400' dangerouslySetInnerHTML={{ __html: data?.data.item.content || "" }}></div>
          </div>
          <div>
            <h2 className='text-2xl font-bold pb-4'>Danh sách tập</h2>
            <div className='flex flex-wrap gap-4'>
              {data?.data.item.status === "trailer" ? (
                <Button variant={"secondary"}>Trailer</Button>
              ) : (
                data?.data.item.episodes[0].server_data.map((item) => (
                  <Button key={item.slug} variant={"outline"} asChild>
                    <Link href={`/phim/${data.data.item.slug}/${item.slug}`}>{`Tập ${item.name}`}</Link>
                  </Button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
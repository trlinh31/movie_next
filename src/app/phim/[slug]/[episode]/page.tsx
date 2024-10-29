"use client";

import Loading from "@/app/loading";
import BreadcrumbComponent from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import useFetchData from "@/hooks/useFetchData";
import { MovieDetail } from "@/types/MovieDetail";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MoviePage({ params }: { params: { slug: string; episode: string } }) {
  const { slug, episode } = params;
  const episodeNumber = episode.replace("tap-", "");
  const { data, loading } = useFetchData<MovieDetail>(`/phim/${slug}`);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    document.title = data?.data.seoOnPage.titleHead || "Phim 1080";
    window.scrollTo({
      top: 60,
      behavior: "smooth",
    });
  }, [data]);

  if (loading || !data) {
    return <Loading />;
  }

  const handleIframeLoad = () => {
    console.log("Iframe loaded");
    setIsLoaded(true);
  };

  const episodeEmbedLink = data?.data.item.episodes[0].server_data.find((item) => item.name === episodeNumber)?.link_embed;

  return (
    <div className='container py-[5rem] md:py-[7rem]'>
      <BreadcrumbComponent title={data?.data.item.name + " - Tập " + episodeNumber} subtitle='Phim' />
      {episodeEmbedLink && (
        <iframe
          src={episodeEmbedLink}
          className='w-full h-[30vh] md:h-[82vh]'
          allowFullScreen
          onLoad={handleIframeLoad}
          title={`${data?.data.item.name} - Tập ${episodeNumber}`}
          allow='autoplay'
        />
      )}
      <div className='py-6'>
        <div className='space-y-8'>
          <div>
            <h2 className='text-2xl font-bold pb-2'>Nội dung phim</h2>
            <div className='text-base text-slate-400' dangerouslySetInnerHTML={{ __html: data?.data.item.content || "" }}></div>
          </div>

          <div>
            <h2 className='text-2xl font-bold pb-4'>Danh sách tập</h2>
            <div className='flex flex-wrap gap-4'>
              {data?.data.item.episodes[0].server_data.map((item, index) => (
                <Button key={index} variant={episodeNumber == item.name ? "default" : "outline"} asChild>
                  <Link href={`/phim/${data.data.item.slug}/tap-${item.name}`}>{`Tập ${item.name}`}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

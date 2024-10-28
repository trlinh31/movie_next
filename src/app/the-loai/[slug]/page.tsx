"use client";

import Loading from "@/app/loading";
import BreadcrumbComponent from "@/components/breadcrumb";
import Movie from "@/components/movie";
import PaginationComponent from "@/components/pagination";
import useFetchData from "@/hooks/useFetchData";
import { Movie as MovieType } from "@/types/Movie";
import { useSearchParams, useRouter } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const { data, loading } = useFetchData<MovieType>(`/the-loai/${params.slug}?page=${page}`);

  const handlePageChange = (newPage: number) => {
    router.push(`/danh-sach/${params.slug}?page=${newPage}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container py-[5rem] md:py-[7rem]'>
      <BreadcrumbComponent title={data?.data.breadCrumb[0].name} />
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8'>
        {data?.data.items.map((item) => (
          <Movie key={item._id} data={item} />
        ))}
      </div>
      {data && <PaginationComponent total={1000} current={data?.data.params.pagination.currentPage} onPageChange={handlePageChange} />}
    </div>
  );
}

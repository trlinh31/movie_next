"use client";

import useFetchData from "@/hooks/useFetchData";
import { Category } from "@/types/Category";
import Link from "next/link";

export default function Menu() {
  const { data } = useFetchData<Category>("/the-loai");

  return (
    <nav>
      <ul className='md:flex hidden'>
        <li className='relative font-bold px-6 py-4 cursor-pointer group'>
          Thể loại
          {data && (
            <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-[150%] left-0 group-hover:top-[100%] transition-all duration-300 ease-linear'>
              <ul className='min-w-[500px] bg-black/60 grid grid-cols-3 gap-4 p-6'>
                {data.data.items.map((item) => (
                  <li key={item._id} className='text-sm hover:text-red-500'>
                    <Link href={`/the-loai/${item.slug}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>
          <Link href='/danh-sach/phim-moi-nhat'>Phim mới nhất</Link>
        </li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>
          <Link href='/danh-sach/phim-le'>Phim lẻ</Link>
        </li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>
          <Link href='/danh-sach/phim-bo'>Phim bộ</Link>
        </li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>
          <Link href='/danh-sach/tv-shows'>TV Shows</Link>
        </li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>
          <Link href='/danh-sach/phim-sap-chieu'>Sắp chiếu</Link>
        </li>
      </ul>
    </nav>
  );
}

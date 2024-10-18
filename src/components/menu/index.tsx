"use client";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import Error from "next/error";
import { Category } from "@/types/category";
import Link from "next/link";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  async function getCategories(): Promise<void> {
    const { data, error } = await useFetch("/the-loai");
    if (error) {
      setError(true);
      return;
    }

    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  if (error) {
    return <Error statusCode={500} />;
  }

  return (
    <nav>
      <ul className='flex'>
        <li className='relative font-bold px-6 py-4 cursor-pointer group'>
          Thể loại
          {categories && categories.length > 0 && (
            <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-[150%] left-0 group-hover:top-[100%] transition-all duration-300 ease-linear'>
              <ul className='min-w-[500px] bg-black/30 grid grid-cols-3 gap-4 p-6'>
                {categories.map((category: Category) => (
                  <li key={category._id} className='text-sm hover:text-red-500'>
                    <Link href={`/the-loai/${category.slug}`}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>Phim mới nhất</li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>Phim bộ</li>
        <li className='font-bold px-6 py-4 cursor-pointer hover:text-red-500'>Phim lẻ</li>
      </ul>
    </nav>
  );
}

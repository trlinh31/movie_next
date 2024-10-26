import { Item } from "@/types/Movie";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MovieList({ title, data, href }: { title: string; data: Item[]; href: string }) {
  return (
    <div className='container py-10'>
      <div className='flex items-center justify-between'>
        <h3 className='font-bold text-3xl uppercase'>{title}</h3>

        <Link href={href} className='flex items-center gap-x-1 hover:text-red-500'>
          <span>Xem tất cả</span>
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}

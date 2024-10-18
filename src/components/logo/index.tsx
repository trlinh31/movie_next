import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-x-4'>
      <svg aria-label='Vercel logomark' height='22' role='img' viewBox='0 0 74 64'>
        <path d='M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z' fill='white'></path>
      </svg>
      <div className='font-extrabold text-2xl'>Phim 1080</div>
    </Link>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonMovie() {
  return (
    <div>
      <div className='relative w-full max-h-[320px] h-[320px] overflow-hidden rounded-sm'>
        <Skeleton className='w-full h-full' />
      </div>
      <div className='space-y-2 pt-2'>
        <Skeleton className='h-4 w-[230px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  );
}

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { House } from "lucide-react";
import Link from "next/link";

export default function BreadcrumbComponent({ title, subtitle, currentPage }: { title?: string; subtitle: string; currentPage?: string }) {
  return (
    <>
      <Breadcrumb className='mb-6 pb-6 border-b border-slate-800'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>
              <div className='flex items-center gap-x-1'>
                <House size={17} />
                <span>Trang chủ</span>
              </div>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{subtitle}</BreadcrumbLink>
          </BreadcrumbItem>
          {title && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{title}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          {currentPage && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentPage}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}

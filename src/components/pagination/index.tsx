import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent({ total, current, onPageChange }: PaginationProps) {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  const handleClick = (page: number | string) => {
    if (typeof page === "number" && page !== current) {
      onPageChange(page);
    }
  };

  const pages = generatePageNumbers();

  return (
    <Pagination className='mt-12'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' onClick={() => handleClick(current - 1)}/>
        </PaginationItem>
        {pages.map((page, index) => (
          <PaginationItem key={index}>
            <PaginationLink href='#' onClick={() => handleClick(page)} isActive={page === current}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href='#' onClick={() => handleClick(current + 1)}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

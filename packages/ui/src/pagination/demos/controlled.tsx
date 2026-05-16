"use client";

import { useMemo, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "lynote-ui/pagination";

const TOTAL = 20;

const App: React.FC = () => {
  const [page, setPage] = useState(1);

  const pages = useMemo(() => {
    const result: (number | "ellipsis")[] = [];
    const push = (n: number) => result.push(n);

    push(1);
    if (page > 3) result.push("ellipsis");
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(TOTAL - 1, page + 1);
      i++
    ) {
      push(i);
    }
    if (page < TOTAL - 2) result.push("ellipsis");
    if (TOTAL > 1) push(TOTAL);
    return result;
  }, [page]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.max(1, p - 1));
            }}
          />
        </PaginationItem>
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`e-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.min(TOTAL, p + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default App;

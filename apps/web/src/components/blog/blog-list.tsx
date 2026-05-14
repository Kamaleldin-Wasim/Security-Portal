"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { Locale } from "@/lib/i18n";
import { useInfiniteBlogPosts } from "@/hooks/use-blog";
import { BlogCard, BlogCardSkeleton } from "./blog-card";

export function BlogList({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || undefined;
  
  const { ref, inView } = useInView();
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    prefetchPost
  } = useInfiniteBlogPosts(category);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === "pending") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 font-bold">
          {locale === "ar" ? "تعذر تحميل المقالات." : "Failed to load posts."}
        </p>
        <button 
          onClick={() => fetchNextPage()} 
          className="mt-4 text-navy font-bold underline"
        >
          {locale === "ar" ? "إعادة المحاولة" : "Try Again"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.pages.map((page) =>
          page.data.map((post) => (
            <BlogCard key={post.id} post={post} locale={locale} />
          ))
        )}
      </div>

      {/* Infinite Scroll Trigger */}
      <div ref={ref} className="h-20 flex items-center justify-center">
        {isFetchingNextPage && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[...Array(3)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        )}
        {!hasNextPage && data && data.pages.length > 0 && data.pages[0].data.length > 0 && (
          <p className="text-navy/40 font-bold tracking-widest uppercase text-xs">
            {locale === "ar" ? "نهاية القائمة" : "End of the list"}
          </p>
        )}
      </div>
    </div>
  );
}

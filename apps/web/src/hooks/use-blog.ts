import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import { BlogPost, PaginatedResponse, Category } from "../types/api";

/**
 * High-Performance Infinite Loading for Blog List
 * Uses cursor-based pagination with taxonomy filtering
 */
export function useInfiniteBlogPosts(category?: string) {
  const queryClient = useQueryClient();

  const query = useInfiniteQuery<PaginatedResponse<BlogPost>>({
    queryKey: ["blog-posts-infinite", category],
    queryFn: ({ pageParam }) =>
      api.get("/blog-posts/list", {
        cursor: pageParam as string,
        take: 6,
        ...(category && { category })
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    staleTime: 1000 * 60 * 5,
  });

  const prefetchPost = (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: ["blog-post", slug],
      queryFn: () => api.get("/blog-posts/detail", { slug }),
      staleTime: 1000 * 60 * 5,
    });
  };

  return { ...query, prefetchPost };
}

/**
 * Fetch all categories for filtering UI
 */
export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ["blog-categories"],
    queryFn: () => api.get("/blog-posts/categories"),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}

/**
 * Blog Prefetch Hook - Prefetches blog posts on demand
 */
export function useBlogPrefetch() {
  const queryClient = useQueryClient();

  const prefetchPost = (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: ["blog-post", slug],
      queryFn: () => api.get("/blog-posts/detail", { slug }),
      staleTime: 1000 * 60 * 5,
    });
  };

  return { prefetchPost };
}

/**
 * Standard Single Post Fetcher
 */
export function useBlogPost(slug: string) {
  return useQuery<BlogPost>({
    queryKey: ["blog-post", slug],
    queryFn: () => api.get("/blog-posts/detail", { slug }),
    enabled: !!slug,
  });
}

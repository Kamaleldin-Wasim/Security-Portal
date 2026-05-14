"use client";

import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { BlogPost } from "@/types/api";
import { useBlogPrefetch } from "@/hooks/use-blog";

interface BlogCardProps {
  post: BlogPost;
  locale: Locale;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const { prefetchPost } = useBlogPrefetch();
  const title = locale === "ar" ? post.titleAr : post.titleEn;
  const excerpt = locale === "ar" ? post.excerptAr : post.excerptEn;

  return (
    <Link 
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-col glass-card rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => prefetchPost(post.slug)}
    >
      <div className="relative aspect-[16/10] bg-navy/5 overflow-hidden">
        {/* Post Image Placeholder - Replace with real Image component when needed */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-gold/10 group-hover:scale-110 transition-transform duration-700" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs font-bold text-gold tracking-widest uppercase">
          <span>{new Date(post.createdAt!).toLocaleDateString(locale)}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-navy group-hover:text-royal transition-colors leading-snug">
          {title}
        </h3>

        <p className="mt-4 text-navy/60 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <div className="mt-auto pt-8 flex items-center text-sm font-bold text-navy gap-2 group-hover:gap-4 transition-all">
          <span>{locale === "ar" ? "اقرأ المزيد" : "Read More"}</span>
          <span className="text-gold">→</span>
        </div>
      </div>
    </Link>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col glass-card rounded-[32px] overflow-hidden animate-pulse">
      <div className="aspect-[16/10] bg-navy/5" />
      <div className="p-8">
        <div className="h-4 w-1/4 bg-navy/10 rounded" />
        <div className="mt-4 h-8 w-full bg-navy/10 rounded" />
        <div className="mt-4 h-20 w-full bg-navy/10 rounded" />
        <div className="mt-8 h-4 w-1/3 bg-navy/10 rounded" />
      </div>
    </div>
  );
}

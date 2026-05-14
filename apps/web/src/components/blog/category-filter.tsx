"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Locale } from "@/lib/i18n";
import { useCategories } from "@/hooks/use-blog";

export function CategoryFilter({ locale }: { locale: Locale }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  
  const { data: categories, isLoading } = useCategories();

  const setCategory = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/${locale}/blog?${params.toString()}`, { scroll: false });
  };

  if (isLoading) return <div className="h-10 w-full animate-pulse bg-navy/5 rounded-full" />;

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <button
        onClick={() => setCategory(null)}
        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
          !currentCategory 
            ? "bg-navy text-white shadow-premium" 
            : "bg-navy/5 text-navy hover:bg-navy/10"
        }`}
      >
        {locale === "ar" ? "الكل" : "All"}
      </button>

      {categories?.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.slug)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            currentCategory === cat.slug 
              ? "bg-gold text-white shadow-premium" 
              : "bg-navy/5 text-navy hover:bg-navy/10"
          }`}
        >
          {locale === "ar" ? cat.nameAr : cat.nameEn}
        </button>
      ))}
    </div>
  );
}

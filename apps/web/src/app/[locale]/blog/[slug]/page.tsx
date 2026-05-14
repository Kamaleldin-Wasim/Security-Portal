import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { api } from "@/services/api";
import { Locale } from "@/lib/i18n";
import { BlogPost } from "@/types/api";

// --- MEMOIZED DATA FETCHER ---
// This ensures that generateMetadata and the Page component share the same request.
// Next.js will only fire ONE network call to the API.
const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const post = await api.get("/blog-posts/detail", { slug });
    return post;
  } catch (error) {
    return null;
  }
});

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

// --- DYNAMIC METADATA GENERATION ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: locale === "ar" ? "المقال غير موجود" : "Post Not Found",
      description: locale === "ar" ? "نعتذر، ولكن المقال الذي تبحث عنه غير موجود." : "Sorry, the post you are looking for does not exist.",
    };
  }

  const title = locale === "ar" ? post.titleAr : post.titleEn;
  const description = locale === "ar" ? post.excerptAr : post.excerptEn;

  return {
    title: `${title} | Al-Fahhad Company`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.createdAt,
      authors: ["Al-Fahhad Company"],
      // images: [{ url: post.featuredImage || '/default-blog.jpg' }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// --- PAGE COMPONENT ---
export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const title = locale === "ar" ? post.titleAr : post.titleEn;
  const content = locale === "ar" ? post.contentAr : post.contentEn;

  return (
    <article className="container-shell section-space pt-32">
      <header className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
          {title}
        </h1>
        <div className="mt-8 flex items-center justify-center gap-4 text-navy/60">
           <span className="font-medium">
             {new Date(post.createdAt!).toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", {
               day: "numeric",
               month: "long",
               year: "numeric"
             })}
           </span>
        </div>
      </header>

      <div className="mt-16 max-w-3xl mx-auto prose prose-premium">
        {/* Render content - in a real app, use a Markdown parser or sanitized HTML */}
        <div className="whitespace-pre-line text-lg leading-relaxed text-navy/80">
          {content}
        </div>
      </div>
    </article>
  );
}

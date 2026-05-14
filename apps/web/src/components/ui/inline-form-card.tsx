"use client";

import { FormEvent } from "react";
import { Locale } from "@/lib/i18n";
import { useFeedback } from "@/hooks/use-feedback";
import { LoadingOverlay } from "./loading-overlay";

import { api, ApiRoutes } from "@/services/api";

interface Field {
  name: string;
  label: string;
  type?: string;
}

interface InlineFormCardProps {
  locale: Locale;
  title: string;
  endpoint: keyof ApiRoutes;
  fields: Field[];
}

export function InlineFormCard({
  locale,
  title,
  endpoint,
  fields
}: InlineFormCardProps) {
  const { submit, status, error, isLoading, isSuccess, isError } = useFeedback(endpoint);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const success = await submit(payload);
    if (success) {
      event.currentTarget.reset();
    }
  }

  return (
    <div className="glass-card rounded-[32px] p-7">
      <LoadingOverlay
        isLoading={isLoading}
        message={locale === "ar" ? "جاري المعالجة..." : "Processing..."}
      />
      
      <h3 className="font-arabic text-2xl font-bold text-navy">{title}</h3>
      
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2">
            <span className="text-sm font-medium text-navy/80">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                rows={5}
                required
                className="rounded-2xl border border-navy/10 bg-white px-4 py-3 outline-none transition focus:border-gold"
              />
            ) : (
              <input
                type={field.type ?? "text"}
                name={field.name}
                required
                className="rounded-2xl border border-navy/10 bg-white px-4 py-3 outline-none transition focus:border-gold"
              />
            )}
          </label>
        ))}
        
        <button 
          disabled={isLoading}
          className="mt-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-royal disabled:opacity-50"
        >
          {isLoading
            ? locale === "ar" ? "جاري الإرسال..." : "Sending..."
            : locale === "ar" ? "إرسال الطلب" : "Submit Request"}
        </button>

        {isSuccess && (
          <p className="text-sm font-medium text-[#1FAF5A]">
            {locale === "ar" ? "تم استلام طلبك بنجاح." : "Your request has been received successfully."}
          </p>
        )}
        
        {isError && (
          <p className="text-sm font-medium text-red-600">
            {locale === "ar" 
              ? "تعذر إرسال الطلب حالياً. يرجى المحاولة مرة أخرى." 
              : error || "We could not submit your request right now. Please try again."}
          </p>
        )}
      </form>
    </div>
  );
}

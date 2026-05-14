"use client";

import { useEffect } from "react";

export function DirectionProvider({ children, locale }: { children: React.ReactNode; locale: string }) {
    useEffect(() => {
        // Set direction based on locale
        const isArabic = locale === "ar";
        const htmlElement = document.documentElement;
        htmlElement.dir = isArabic ? "rtl" : "ltr";
        htmlElement.lang = locale;
    }, [locale]);

    return <>{children}</>;
}

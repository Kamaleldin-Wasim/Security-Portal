import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
});

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic", "latin"]
});

export const metadata: Metadata = {
    title: "Al-Fahhad Company for Security Guards",
    description: "Arabic-first premium security services website for Saudi Arabia."
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning className={`${inter.variable} ${cairo.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}

import fonts from "@/lib/fonts";
import type { Metadata } from "next";
import "@workspace/design-system/globals.css";
import nextMetadata from "@/lib/next-metadata";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = nextMetadata();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

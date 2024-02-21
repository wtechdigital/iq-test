import "@/styles/globals.css";
// import { Metadata } from "next";
// import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import dynamic from 'next/dynamic'
import PHProvider from "@/utils/analytics/PostHog/PostHogProvider";
import { GoogleTagManager } from '@next/third-parties/google'

const PostHogPageView = dynamic(() => import('../utils/analytics/PostHog/PostHogPageView'), {
  ssr: false,
})

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <PHProvider>
      <head />
      <body
        className={clsx(
          "h-[calc(100dvh)] font-sans antialiased overflow-x-hidden dark:bg-background",
          fontSans.variable
        )}
      >
        <PostHogPageView />
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col">{children}</div>
        </Providers>
      </body>
      </PHProvider>
       <GoogleTagManager gtmId="GTM-NVBBS8ZS" />
    </html>
  );
}

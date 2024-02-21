"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</NextUIProvider>
	);
}
if (typeof window !== 'undefined') {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
	  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
	  capture_pageview: false // Disable automatic pageview capture, as we capture manually
	})
  }
  
  export function PHProvider({
	children,
  }: {
	children: React.ReactNode
  }) {
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>
  }  
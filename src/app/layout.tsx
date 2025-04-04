import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import ReactQueryProvider from "@/providers/react-query-provider";
import ReduxProvider from "@/providers/redux-provider";


const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murph-AI",
  description: "Future of instagram automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
 {
  return (
    <ClerkProvider>
      <html lang="en">
        <body 
        suppressHydrationWarning
        className={jakarta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
           <ReduxProvider>
           <ReactQueryProvider>
            {children}
            </ReactQueryProvider>
           </ReduxProvider>
            
            
            
            <Toaster />


          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

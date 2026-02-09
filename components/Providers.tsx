'use client';

import { SiteTypeProvider } from "./SiteTypeContext";
import { ArrayProvider } from "./FAQArrayContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SiteTypeProvider>
      <ArrayProvider>
        {children}
      </ArrayProvider>
    </SiteTypeProvider>
  )
}
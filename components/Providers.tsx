'use client';

import { SiteTypeProvider } from "./SiteTypeContext";


export function Providers({ children }: { children: React.ReactNode }) {
  return <SiteTypeProvider>{children}</SiteTypeProvider>;
}
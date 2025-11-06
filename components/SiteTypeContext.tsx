'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type SiteType = 'game' | 'telegram';

interface SiteTypeCtx {
  siteType: SiteType;
  toggleType: (t: SiteType) => void;
}

const SiteTypeContext = createContext<SiteTypeCtx | undefined>(undefined);

export function SiteTypeProvider({ children }: { children: ReactNode }) {
  const [siteType, setSiteType] = useState<SiteType>("game");
  const toggleType = (t: SiteType) => setSiteType(t);

  return (
    <SiteTypeContext.Provider value={{ siteType, toggleType }}>
      {children}
    </SiteTypeContext.Provider>
  );
}

export const useSiteType = () => {
  const ctx = useContext(SiteTypeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
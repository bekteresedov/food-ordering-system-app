"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;

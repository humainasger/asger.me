import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import the toolbar to avoid SSR issues
const TwentyFirstToolbar = dynamic(
  () => import("@21st-extension/toolbar-next").then(mod => mod.TwentyFirstToolbar),
  { ssr: false }
);

import { ReactPlugin } from "@21st-extension/react";

export function ToolbarProvider({ children }: { children: ReactNode }) {
  // Only render the toolbar on the client (browser)
  const isClient = typeof window !== "undefined";
  return (
    <>
      {isClient && <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} />}
      {children}
    </>
  );
}

"use client";
import { createContext, useContext } from "react";
export const LeadContext = createContext<{
  openQuote: (service?: string) => void;
} | null>(null);
export default function useLeadModal() {
  const context = useContext(LeadContext);
  if (!context) throw new Error("Quote controls require LeadProvider.");
  return context;
}

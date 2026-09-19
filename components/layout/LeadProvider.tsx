"use client";
import { useState } from "react";
import LeadModal from "./LeadModal";
import { LeadContext } from "./useLeadModal";
export default function LeadProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [request, setRequest] = useState<{ service?: string } | null>(null);
  return (
    <LeadContext.Provider
      value={{ openQuote: (service) => setRequest({ service }) }}
    >
      {children}
      {request && (
        <LeadModal
          initialService={request.service}
          onClose={() => setRequest(null)}
        />
      )}
    </LeadContext.Provider>
  );
}

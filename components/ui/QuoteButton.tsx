"use client";
import Button, { type ButtonProps } from "./Button";
import { ArrowIcon } from "./Icons";
import useLeadModal from "@/components/layout/useLeadModal";
export default function QuoteButton({
  children = "Get My Free Quote",
  service,
  variant = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  service?: string;
  variant?: ButtonProps["variant"];
  className?: string;
}) {
  const { openQuote } = useLeadModal();
  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => openQuote(service)}
    >
      {children}
      <ArrowIcon />
    </Button>
  );
}

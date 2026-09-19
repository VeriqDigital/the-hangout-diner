import Link from "next/link";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  newTab,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `button button-${variant} ${className}`;
  return href ? (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

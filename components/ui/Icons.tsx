import type { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement>;
function Icon({ children, ...props }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}
export const ArrowIcon = (props: Props) => (
  <Icon {...props}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </Icon>
);
export const MapPinIcon = (props: Props) => (
  <Icon {...props}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);
export const PhoneIcon = (props: Props) => (
  <Icon {...props}>
    <path d="m7 3 3 5-3 3a17 17 0 0 0 6 6l3-3 5 3c-1 6-5 5-9 3S4 14 3 9 3 3 7 3Z" />
  </Icon>
);
export const ClockIcon = (props: Props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </Icon>
);

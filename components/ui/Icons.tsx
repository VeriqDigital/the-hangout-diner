type IconProps = {
  className?: string;
};

const iconClasses = "fill-none stroke-current stroke-[1.7]";

export const SparkleIcon = ({ className = "size-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconClasses} ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c.8 5.2 3.6 8 8.8 8.8C15.6 11.6 12.8 14.4 12 20c-.8-5.6-3.6-8.4-8.8-9.2C8.4 10 11.2 7.2 12 2Z" />
    <path d="M19 3v4M21 5h-4" />
  </svg>
);

export const HomeIcon = ({ className = "size-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconClasses} ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 9-7 9 7" />
    <path d="M5 10v10h14V10M9 20v-6h6v6" />
  </svg>
);

export const MessageIcon = ({ className = "size-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconClasses} ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a8 8 0 0 1-8 8H5l-3 2 1-5a9 9 0 1 1 18-5Z" />
    <path d="M8 12h.01M12 12h.01M16 12h.01" />
  </svg>
);

export const HeartIcon = ({ className = "size-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconClasses} ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  </svg>
);

export const CalendarIcon = ({ className = "size-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconClasses} ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3v4M19 3v4M3 9h18M5 5h14a2 2 0 0 1 2 2v14H3V7a2 2 0 0 1 2-2Z" />
    <path d="m8 15 2 2 5-5" />
  </svg>
);

export const MapPinIcon = ({ className = "size-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconClasses} ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowIcon = ({ className = "size-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconClasses} ${className}`} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);

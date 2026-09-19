import Image from "next/image";
import { imageUrl, type RestaurantImage } from "@/sanity/lib/image";
export default function Photo({
  image,
  fallback,
  alt,
  className = "",
  sizes = "(max-width: 700px) 100vw, 50vw",
  preload = false,
}: {
  image?: RestaurantImage;
  fallback?: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  const src = imageUrl(image) || fallback;
  if (!src)
    return (
      <div className={`photo-placeholder ${className}`}>
        <span aria-hidden="true">✳</span>
        <p>The Hangout Diner</p>
      </div>
    );
  return (
    <div className={`photo ${className}`}>
      <Image
        src={src}
        alt={image?.alt || alt}
        fill
        sizes={sizes}
        loading={preload ? "eager" : "lazy"}
        fetchPriority={preload ? "high" : undefined}
      />
    </div>
  );
}

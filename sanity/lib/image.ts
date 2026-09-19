import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { dataset, projectId, isSanityConfigured } from "../env";
const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;
export type RestaurantImage = SanityImageSource & { alt?: string };
export function imageUrl(source?: RestaurantImage | null, width = 1600) {
  if (!source || !builder) return undefined;
  try {
    return builder.image(source).width(width).auto("format").fit("max").url();
  } catch {
    return undefined;
  }
}

import type { BusinessInfo } from "@/sanity/lib/types";
import { safeUrl } from "@/config/site";
import { ArrowIcon } from "@/components/ui/Icons";

export default function Reviews({ business }: { business: BusinessInfo }) {
  const reviewsUrl = safeUrl(business.reviewsUrl);
  const testimonials =
    business.testimonials?.filter(
      (review) => review.quote && review.author && safeUrl(review.sourceUrl),
    ) || [];
  if (!reviewsUrl && !testimonials.length) return null;
  return (
    <section className="reviews-section" aria-label="Google reviews">
      <div className="site-container">
        <div className="reviews-summary">
          <div>
            {business.googleRating ? (
              <p className="review-score">
                <strong>
                  {business.googleRating.toFixed(1)}
                  <span aria-label=" stars">★</span>
                </strong>{" "}
                on Google
              </p>
            ) : (
              <h2>Google reviews</h2>
            )}
            {business.googleReviewCount ? (
              <p className="review-count">
                {business.googleReviewCount}
                {business.ratingIsApproximate ? "+" : ""} reviews
              </p>
            ) : null}
          </div>
          {reviewsUrl && (
            <a className="text-link" href={reviewsUrl}>
              Read reviews <ArrowIcon />
            </a>
          )}
        </div>
        {testimonials.map((review) => (
          <figure className="real-review" key={review._key}>
            <blockquote>{review.quote}</blockquote>
            <figcaption>
              <a href={safeUrl(review.sourceUrl)}>
                {review.author} · Read original review ↗
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

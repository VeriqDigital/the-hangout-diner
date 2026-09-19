import type { BusinessInfo } from "@/sanity/lib/types";
import { safeUrl } from "@/config/site";
import { ArrowIcon } from "@/components/ui/Icons";
export default function LocalLove({ business }: { business: BusinessInfo }) {
  return (
    <section className="local-love">
      <div className="site-container">
        <div className="local-love-inner">
          <div className="love-symbol" aria-hidden="true">
            ✳
          </div>
          <div>
            <p className="eyebrow">GOOD COMPANY, GOOD WORD OF MOUTH</p>
            <h2>A little local love.</h2>
          </div>
          <div className="love-details">
            {business.googleRating && (
              <p className="review-score">
                {business.ratingIsApproximate ? "Approx. " : ""}
                {business.googleRating.toFixed(1)} / 5{" "}
                {business.googleReviewCount ? (
                  <small>
                    · {business.googleReviewCount}
                    {business.ratingIsApproximate ? "+" : ""} Google reviews
                  </small>
                ) : null}
              </p>
            )}
            <p>See what our neighbors are saying.</p>
            <a className="text-link" href={business.reviewsUrl}>
              Read the Google reviews <ArrowIcon />
            </a>
          </div>
        </div>
        {business.testimonials
          ?.filter(
            (review) =>
              review.quote && review.author && safeUrl(review.sourceUrl),
          )
          .map((review) => (
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

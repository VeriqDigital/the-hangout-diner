import type { Announcement } from "@/sanity/lib/types";
import { safeUrl } from "@/config/site";
import Photo from "./Photo";
import { ArrowIcon } from "@/components/ui/Icons";
export default function Announcements({
  announcements,
}: {
  announcements: Announcement[];
}) {
  if (!announcements.length) return null;
  return (
    <section className="announcements" aria-labelledby="announcements-title">
      <div className="site-container">
        <p className="announcement-label" id="announcements-title">
          Today at The Hangout
        </p>
        {announcements.map((item) => (
          <article className="announcement" key={item._id}>
            {item.image && <Photo image={item.image} alt="" sizes="160px" />}
            <div>
              <h2>{item.title}</h2>
              {item.description && <p>{item.description}</p>}
            </div>
            {item.ctaText && safeUrl(item.ctaUrl) && (
              <a className="text-link" href={safeUrl(item.ctaUrl)}>
                {item.ctaText}
                <ArrowIcon />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

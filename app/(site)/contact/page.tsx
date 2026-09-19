import { pageMetadata } from "@/config/seo";
import { getRestaurantData } from "@/sanity/lib/content";
import Visit, { VisitMap } from "@/components/restaurant/Visit";
import Announcements from "@/components/restaurant/Announcements";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";
import { phoneHref } from "@/config/site";
export const metadata = pageMetadata(
  "Visit Us & Hours",
  "Visit The Hangout Diner at 1014 2nd St, Perry, IA 50220. Check opening hours, get directions, or call (515) 979-3385.",
  "/contact",
);
export default async function ContactPage() {
  const { settings, announcements } = await getRestaurantData();
  return (
    <main id="main-content">
      <section className="page-intro visit-intro">
        <div className="site-container">
          <p className="eyebrow">RIGHT HERE IN PERRY</p>
          <h1>
            Your next stop?
            <br />
            <em>The Hangout.</em>
          </h1>
          <p>
            Bring the family. Meet a friend. Make a little time for a good meal.
          </p>
        </div>
      </section>
      <Announcements announcements={announcements} />
      <Visit business={settings} />
      <div className="site-container">
        <VisitMap business={settings} />
      </div>
      <section className="section">
        <div className="site-container contact-bottom">
          <div>
            <p className="eyebrow">A QUICK QUESTION?</p>
            <h2>Give us a ring.</h2>
            <p>
              For today’s specials, menu questions, or a change in hours,
              <br className="desktop-break" /> the quickest way to reach us is
              by phone.
            </p>
            <a className="text-link" href={phoneHref(settings.phone)}>
              <PhoneIcon />
              {settings.phone}
            </a>
          </div>
          {settings.facebookUrl && (
            <div className="social-note">
              <span aria-hidden="true">✳</span>
              <h3>Catch up with the diner.</h3>
              <p>Find the latest updates on our Facebook page.</p>
              <a className="text-link" href={settings.facebookUrl}>
                Follow along on Facebook <ArrowIcon />
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

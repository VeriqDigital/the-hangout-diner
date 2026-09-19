import Link from "next/link";
import { getRestaurantData } from "@/sanity/lib/content";
import { pageMetadata } from "@/config/seo";
import { phoneHref } from "@/config/site";
import Announcements from "@/components/restaurant/Announcements";
import Photo from "@/components/restaurant/Photo";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";
export const metadata = pageMetadata(
  "Our Menu",
  "Explore The Hangout Diner menu in Perry, Iowa. Breakfast, burgers, sandwiches, and diner comfort food. Call for today’s selection.",
  "/menu",
);
export default async function MenuPage() {
  const data = await getRestaurantData();
  return (
    <main id="main-content">
      <section className="page-intro menu-intro">
        <div className="site-container">
          <p className="eyebrow">THE HANGOUT DINER · PERRY, IOWA</p>
          <h1>
            Something
            <br />
            to <em>look forward to.</em>
          </h1>
          <p>Come hungry. Find your next favorite.</p>
        </div>
      </section>
      <Announcements announcements={data.announcements} />
      <section className="section menu-page">
        <div className="site-container">
          {data.menuState === "preview" && (
            <div className="menu-notice">
              <span className="eyebrow">A TASTE OF THE MENU</span>
              <p>
                A few dishes from our existing menu. The full menu and current
                prices are coming soon. Give us a call for today’s selection.
              </p>
            </div>
          )}
          {data.categories.length ? (
            <>
              <nav className="menu-jump-links" aria-label="Menu categories">
                {data.categories.map((category) => (
                  <a key={category._id} href={`#category-${category.slug}`}>
                    {category.name}
                    <span>↓</span>
                  </a>
                ))}
              </nav>
              <div className="menu-paper">
                <div className="menu-paper-top">
                  <span>THE HANGOUT DINER</span>
                  <span>FOOD · FAMILY · FRIENDS</span>
                </div>
                {data.categories.map((category) => (
                  <section
                    className="menu-category"
                    id={`category-${category.slug}`}
                    key={category._id}
                  >
                    <div className="menu-category-heading">
                      <h2>{category.name}</h2>
                      {category.description && <p>{category.description}</p>}
                    </div>
                    <div className="menu-items">
                      {category.items.map((item) => (
                        <article className="menu-item" key={item._id}>
                          {item.image && (
                            <Photo
                              image={item.image}
                              alt={item.name}
                              sizes="100px"
                            />
                          )}
                          <div className="menu-item-copy">
                            <div className="menu-item-title">
                              <h3>{item.name}</h3>
                              <span
                                className="menu-leader"
                                aria-hidden="true"
                              />
                              {item.price && <strong>{item.price}</strong>}
                            </div>
                            {item.description && <p>{item.description}</p>}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
                <div className="menu-paper-bottom">
                  <span aria-hidden="true">✳</span>
                  <p>Good food. Good company. Right here in Perry.</p>
                  <span aria-hidden="true">✳</span>
                </div>
              </div>
            </>
          ) : (
            <div className="menu-empty">
              <p className="eyebrow">LET’S TALK FOOD</p>
              <h2>
                {data.menuState === "unavailable"
                  ? "The online menu is taking a break."
                  : "The menu is on its way."}
              </h2>
              <p>
                Call the diner for today’s menu, prices, and specials. We’ll
                help you find something good.
              </p>
            </div>
          )}
          <div className="menu-help">
            <div>
              <h2>A question before you order?</h2>
              <p>Ask us about today’s availability or dietary needs.</p>
            </div>
            <a
              className="button button-primary"
              href={phoneHref(data.settings.phone)}
            >
              <PhoneIcon />
              {data.settings.phone}
            </a>
            <Link className="text-link" href="/contact">
              Plan your visit <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

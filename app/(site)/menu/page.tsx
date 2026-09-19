import Link from "next/link";
import { getRestaurantData } from "@/sanity/lib/content";
import { pageMetadata } from "@/config/seo";
import { phoneHref } from "@/config/site";
import Announcements from "@/components/restaurant/Announcements";
import Photo from "@/components/restaurant/Photo";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";
export const metadata = pageMetadata(
  "Our Menu",
  "Explore The Hangout Diner menu in Perry, Iowa. Breakfast, burgers, sandwiches, and comfort food. Call for today’s selection.",
  "/menu",
);

export default async function MenuPage() {
  const data = await getRestaurantData();
  return (
    <main id="main-content">
      <header className="page-intro menu-intro">
        <div className="site-container">
          <h1>Our menu</h1>
        </div>
      </header>
      <Announcements announcements={data.announcements} />
      <section className="section menu-page" aria-label="Dishes and categories">
        <div className="site-container">
          {data.menuState === "preview" && (
            <p className="menu-notice">
              A selection from our menu. For the full menu, current prices, and
              today’s specials,{" "}
              <a href={phoneHref(data.settings.phone)}>
                call {data.settings.phone}
              </a>
              .
            </p>
          )}
          {data.categories.length ? (
            <>
              <nav className="menu-jump-links" aria-label="Menu categories">
                {data.categories.map((category) => (
                  <a key={category._id} href={`#category-${category.slug}`}>
                    {category.name}
                    <span aria-hidden="true">↓</span>
                  </a>
                ))}
              </nav>
              <div className="menu-paper">
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
                              {item.price && (
                                <>
                                  <span
                                    className="menu-leader"
                                    aria-hidden="true"
                                  />
                                  <strong>{item.price}</strong>
                                </>
                              )}
                            </div>
                            {item.description && <p>{item.description}</p>}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </>
          ) : (
            <div className="menu-empty">
              <h2>
                {data.menuState === "unavailable"
                  ? "The online menu is unavailable right now."
                  : "Call for the full menu."}
              </h2>
              <p>We can help with current dishes, prices, and specials.</p>
            </div>
          )}
          <div className="menu-help">
            <div>
              <h2>Menu questions?</h2>
              <p>Call about availability or dietary needs.</p>
            </div>
            <a
              className="button button-primary"
              href={phoneHref(data.settings.phone)}
            >
              <PhoneIcon />
              {data.settings.phone}
            </a>
            <Link className="text-link" href="/contact">
              Visit & hours <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

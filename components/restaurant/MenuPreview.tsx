import Link from "next/link";
import Photo from "./Photo";
import type { RestaurantData } from "@/sanity/lib/types";
import { ArrowIcon } from "@/components/ui/Icons";

export default function MenuPreview({ data }: { data: RestaurantData }) {
  const featured = data.categories
    .flatMap((category) => category.items)
    .filter((item) => item.featured)
    .slice(0, 3);
  const featuredPhoto = featured.find((item) => item.image);
  return (
    <section className="section menu-preview" id="menu-preview">
      <div className="site-container">
        <div className="menu-preview-grid">
          <div className="menu-preview-intro">
            <h2>On the menu.</h2>
            {data.menuState === "preview" && (
              <p>
                Browse a few dishes below. Call for the full selection and
                today’s prices.
              </p>
            )}
            {data.categories.length === 0 && (
              <p>Call us for the current menu and today’s specials.</p>
            )}
            <Link className="button button-primary" href="/menu">
              View menu <ArrowIcon />
            </Link>
            {featuredPhoto && (
              <Photo
                image={featuredPhoto.image}
                alt={featuredPhoto.name}
                className="menu-photo"
              />
            )}
          </div>
          {data.categories.length > 0 && (
            <div className="menu-directory">
              {data.categories.map((category) => (
                <div className="menu-preview-category" key={category._id}>
                  <Link
                    className="menu-category-link"
                    href={`/menu#category-${category.slug}`}
                  >
                    <h3>{category.name}</h3>
                    <ArrowIcon />
                  </Link>
                  <p>
                    {category.description ||
                      category.items
                        .slice(0, 3)
                        .map((item) => item.name)
                        .join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        {featured.length > 0 && (
          <div className="featured-dishes">
            <h3>Featured dishes</h3>
            {featured.map((item) => (
              <article key={item._id}>
                {item.image && item._id !== featuredPhoto?._id && (
                  <Photo image={item.image} alt={item.name} sizes="180px" />
                )}
                <div>
                  <h4>{item.name}</h4>
                  {item.description && <p>{item.description}</p>}
                </div>
                {item.price && <strong>{item.price}</strong>}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import Photo from "./Photo";
import type { RestaurantData } from "@/sanity/lib/types";
import { ArrowIcon } from "@/components/ui/Icons";
const categories = [
  { name: "Breakfast", note: "A good place to start.", href: "/menu" },
  { name: "Burgers & sandwiches", note: "Bring your appetite.", href: "/menu" },
  { name: "Diner dinners", note: "The comfort-food kind.", href: "/menu" },
  { name: "Something sweet", note: "Save a little room.", href: "/menu" },
];
export default function MenuPreview({ data }: { data: RestaurantData }) {
  const featured = data.categories
    .flatMap((category) => category.items)
    .filter((item) => item.featured)
    .slice(0, 3);
  return (
    <section className="section menu-preview" id="menu-preview">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE GOOD STUFF</p>
            <h2>
              Your kind of food.
              <br />
              Your kind of place.
            </h2>
          </div>
          <p>
            From the first bite of breakfast to that
            <br className="desktop-break" /> last French fry. A little something
            <br className="desktop-break" /> for whatever you’re hungry for.
          </p>
        </div>
        <div className="menu-preview-grid">
          <div className="menu-photo-wrap">
            <Photo
              image={data.settings.heroImage}
              fallback="/images/tenderloin.jpg"
              alt="A tenderloin sandwich, golden fries, and pickles at The Hangout Diner"
              className="menu-photo"
            />
            <div className="menu-photo-label">
              <span>NO SMALL APPETITES REQUIRED.</span>
              <span aria-hidden="true">✳</span>
            </div>
          </div>
          <div className="menu-directory">
            {categories.map((item, index) => (
              <Link
                className="menu-category-link"
                href={item.href}
                key={item.name}
              >
                <span className="category-number">0{index + 1}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
                <ArrowIcon />
              </Link>
            ))}
            <Link className="button button-primary" href="/menu">
              View the menu <ArrowIcon />
            </Link>
            <p className="fine-print">
              Ask us about today’s selection and availability.
            </p>
          </div>
        </div>
        {featured.length > 0 && (
          <div className="featured-dishes">
            <p className="eyebrow">A few things to try</p>
            {featured.map((item) => (
              <article key={item._id}>
                {item.image && (
                  <Photo image={item.image} alt={item.name} sizes="180px" />
                )}
                <div>
                  <h3>{item.name}</h3>
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

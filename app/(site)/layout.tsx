import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getRestaurantData } from "@/sanity/lib/content";
import { directionsUrl } from "@/config/site";
export const dynamic = "force-dynamic";
export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings } = await getRestaurantData();
  return (
    <div className="restaurant-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar
        phone={settings.phone}
        address={`${settings.address.street} · ${settings.address.city}, ${settings.address.state}`}
        directions={settings.directionsUrl || directionsUrl(settings.address)}
      />
      {children}
      <Footer business={settings} />
    </div>
  );
}

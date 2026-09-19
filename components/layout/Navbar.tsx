"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Brand from "@/components/ui/Brand";
import QuoteButton from "@/components/ui/QuoteButton";
import { ArrowIcon, MapPinIcon } from "@/components/ui/Icons";
import { navigation, siteConfig } from "@/config/site";
import { containDialogFocus } from "./dialogFocus";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const dialog = menu.current;
    const menuTrigger = trigger.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    const desktop = window.matchMedia("(min-width: 1100px)");
    const handleResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", handleResize);
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", handleResize);
      menuTrigger?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <>
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>
            <MapPinIcon className="size-3.5" />
            Serving the Des Moines metro
          </span>
          <span className="utility-estimate">
            Free personalized estimates <i />{" "}
            <a href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phone}
            </a>
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <QuoteButton className="nav-quote">
              <span className="desktop-quote-label">Get a Quote</span>
              <span className="mobile-quote-label">Quote</span>
            </QuoteButton>
            <button
              ref={trigger}
              className="menu-toggle"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <dialog
          ref={menu}
          id="mobile-navigation"
          className="mobile-menu"
          aria-labelledby="menu-title"
          onCancel={() => setMenuOpen(false)}
          onKeyDown={containDialogFocus}
        >
          <div className="mobile-menu-top">
            <p id="menu-title" className="eyebrow">
              A lighter week starts here
            </p>
            <button
              className="icon-button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span>
                  <small>0{i + 1}</small>
                  {item.label}
                </span>
                <ArrowIcon />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <span>
                <small>06</small>Contact
              </span>
              <ArrowIcon />
            </Link>
          </nav>
          <div className="mobile-menu-bottom">
            <p>Good care. Close to home.</p>
            <a href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phone}
            </a>
            <span>West Des Moines, Iowa</span>
          </div>
        </dialog>
      )}
    </>
  );
}

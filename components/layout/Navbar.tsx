"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Brand from "@/components/ui/Brand";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";
import { navigation, phoneHref } from "@/config/site";
import { containDialogFocus } from "./dialogFocus";
export default function Navbar({
  phone,
  address,
  directions,
}: {
  phone: string;
  address: string;
  directions: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const node = dialog.current;
    const opener = trigger.current;
    const previousOverflow = document.body.style.overflow;
    node?.showModal();
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 900px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      node?.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      opener?.focus();
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <div className="site-container nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <a
              className="nav-phone"
              href={phoneHref(phone)}
              aria-label={`Call ${phone}`}
            >
              <PhoneIcon />
              <span>{phone}</span>
            </a>
            <Link href="/menu" className="button button-primary nav-menu">
              View menu <ArrowIcon />
            </Link>
            <button
              className="menu-toggle"
              type="button"
              ref={trigger}
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <dialog
          ref={dialog}
          id="mobile-navigation"
          className="mobile-menu"
          aria-labelledby="mobile-menu-title"
          onCancel={() => setOpen(false)}
          onKeyDown={containDialogFocus}
        >
          <div className="mobile-menu-top">
            <p id="mobile-menu-title" className="mobile-menu-label">
              Navigation
            </p>
            <button
              autoFocus
              className="close-menu"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ArrowIcon />
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <a href={phoneHref(phone)}>{phone}</a>
            <a href={directions}>
              {address}
              <ArrowIcon />
            </a>
          </div>
        </dialog>
      )}
    </>
  );
}

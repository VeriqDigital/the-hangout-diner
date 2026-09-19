"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowIcon, SparkleIcon } from "@/components/ui/Icons";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { containDialogFocus } from "./dialogFocus";

const steps = ["Your home", "Your cleaning", "Contact"];
const titles = [
  "First, a little about home.",
  "What can we take off your list?",
  "How should we reach you?",
];

export default function LeadModal({
  initialService,
  onClose,
}: {
  initialService?: string;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [contactMethod, setContactMethod] = useState("text");

  useEffect(() => {
    const node = dialog.current;
    const opener =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    node?.showModal();
    title.current?.focus();
    return () => {
      node?.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, []);
  useEffect(() => {
    title.current?.focus();
    dialog.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [step, complete]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    // Demo only. No API, delivery, storage, logging, or simulated backend.
    event.currentTarget.reset();
    setComplete(true);
  }

  return (
    <dialog
      ref={dialog}
      className="quote-dialog"
      aria-labelledby="quote-title"
      aria-describedby="quote-demo-note"
      onCancel={onClose}
      onKeyDown={containDialogFocus}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            onClose();
        }
      }}
    >
      <div className="quote-topline">
        <span>
          <SparkleIcon className="size-5" /> A lighter week starts here
        </span>
        <button
          type="button"
          className="icon-button"
          aria-label="Close quote"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      {complete ? (
        <div className="quote-success">
          <span className="success-sparkle">
            <SparkleIcon className="size-12" />
          </span>
          <p className="eyebrow">Demo complete</p>
          <h2 id="quote-title" ref={title} tabIndex={-1}>
            That’s one less thing.
            <br />
            <span>In a real-life version.</span>
          </h2>
          <p id="quote-demo-note">
            You’ve tried the Sparkle & Shine quote experience. This is a
            fictional website concept by Veriq. Nothing was sent, stored, or
            booked, and no one will contact you.
          </p>
          <button className="button button-primary" onClick={onClose}>
            Back to the good stuff
            <ArrowIcon />
          </button>
        </div>
      ) : (
        <>
          <ol className="quote-progress" aria-label="Quote progress">
            {steps.map((label, i) => (
              <li
                key={label}
                className={i <= step ? "is-active" : ""}
                aria-current={i === step ? "step" : undefined}
              >
                <span>{i < step ? "✓" : `0${i + 1}`}</span>
                {label}
              </li>
            ))}
          </ol>
          <div className="quote-heading">
            <p className="eyebrow">Step {step + 1} of 3</p>
            <h2 id="quote-title" ref={title} tabIndex={-1}>
              {titles[step]}
            </h2>
            <p id="quote-demo-note">
              Concept demo · Try it with sample details. Nothing is sent or
              stored.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <fieldset hidden={step !== 0} disabled={step !== 0}>
              <legend className="sr-only">Your home</legend>
              <div className="form-grid">
                <label>
                  Home type <span aria-hidden="true">*</span>
                  <select
                    className="field"
                    name="homeType"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose your home
                    </option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Townhome</option>
                  </select>
                </label>
                <label>
                  Approximate size
                  <select
                    className="field"
                    name="squareFootage"
                    defaultValue=""
                  >
                    <option value="">Choose square footage</option>
                    <option>Under 1,000 sq ft</option>
                    <option>1,000–1,999 sq ft</option>
                    <option>2,000–2,999 sq ft</option>
                    <option>3,000–3,999 sq ft</option>
                    <option>4,000+ sq ft</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  Bedrooms
                  <input
                    className="field"
                    name="bedrooms"
                    type="number"
                    min="0"
                    max="30"
                    step="1"
                    inputMode="numeric"
                    placeholder="e.g. 3"
                  />
                </label>
                <label>
                  Bathrooms
                  <input
                    className="field"
                    name="bathrooms"
                    type="number"
                    min="0"
                    max="30"
                    step="0.5"
                    inputMode="decimal"
                    placeholder="e.g. 2.5"
                  />
                </label>
                <label className="full-field">
                  Your community <span aria-hidden="true">*</span>
                  <select
                    className="field"
                    name="community"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Where is your home?
                    </option>
                    {siteConfig.location.communities.map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                    <option>Nearby community — add in notes</option>
                  </select>
                </label>
              </div>
            </fieldset>
            <fieldset hidden={step !== 1} disabled={step !== 1}>
              <legend className="sr-only">Your cleaning</legend>
              <div className="form-grid">
                <label className="full-field">
                  Desired service <span aria-hidden="true">*</span>
                  <select
                    className="field"
                    name="service"
                    required
                    defaultValue={initialService ?? ""}
                  >
                    <option value="" disabled>
                      Choose your clean
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="full-field">
                  Preferred frequency
                  <select
                    className="field"
                    name="frequency"
                    defaultValue="not-sure"
                  >
                    <option value="not-sure">Help me decide</option>
                    <option>One time</option>
                    <option>Weekly</option>
                    <option>Every two weeks</option>
                    <option>Monthly</option>
                    <option>Between guest stays</option>
                  </select>
                </label>
                <label className="full-field">
                  Priorities & notes{" "}
                  <span className="optional">(optional)</span>
                  <textarea
                    className="field"
                    name="notes"
                    rows={3}
                    maxLength={2000}
                    placeholder="Rooms that matter most, preferred timing, pets, or special surfaces. Please leave out access codes."
                  />
                </label>
              </div>
            </fieldset>
            <fieldset hidden={step !== 2} disabled={step !== 2}>
              <legend className="sr-only">Contact details</legend>
              <div className="form-grid">
                <label className="full-field">
                  Your name <span aria-hidden="true">*</span>
                  <input
                    className="field"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="e.g. Alex Sample"
                  />
                </label>
                <label className="full-field">
                  Preferred contact method
                  <select
                    className="field"
                    name="contactMethod"
                    value={contactMethod}
                    onChange={(e) => setContactMethod(e.target.value)}
                  >
                    <option value="text">Text message</option>
                    <option value="phone">Phone call</option>
                    <option value="email">Email</option>
                  </select>
                </label>
                <label>
                  Phone{" "}
                  {contactMethod !== "email" && (
                    <span aria-hidden="true">*</span>
                  )}
                  <input
                    className="field"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required={contactMethod !== "email"}
                    minLength={7}
                    maxLength={30}
                    placeholder="515-555-0123"
                  />
                </label>
                <label>
                  Email{" "}
                  {contactMethod === "email" && (
                    <span aria-hidden="true">*</span>
                  )}
                  <input
                    className="field"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required={contactMethod === "email"}
                    maxLength={150}
                    placeholder="alex@example.com"
                  />
                </label>
              </div>
            </fieldset>
            <p className="required-note">
              * Required fields. Exact scope and availability would be confirmed
              with a quote.
            </p>
            <div className="quote-form-actions">
              <button
                className="back-button"
                type="button"
                onClick={() => (step === 0 ? onClose() : setStep(step - 1))}
              >
                {step === 0 ? "Cancel" : "← Back"}
              </button>
              <button className="button button-primary" type="submit">
                {step === 2 ? "Finish Demo Quote" : "Continue"}
                <ArrowIcon />
              </button>
            </div>
          </form>
        </>
      )}
    </dialog>
  );
}

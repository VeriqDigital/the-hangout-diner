"use client";
import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faq";
import { ArrowIcon } from "@/components/ui/Icons";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="faq-layout">
      <div>
        <h2>Before your first clean</h2>
        <p className="section-description">
          Questions about supplies, access, or specific rooms? Here’s how we
          plan a visit and confirm the details with you.
        </p>
        <Link href="/contact" className="text-link">
          Contact & quotes
          <ArrowIcon />
        </Link>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div
            key={item.question}
            className={openIndex === i ? "faq-item is-open" : "faq-item"}
          >
            <h3>
              <button
                type="button"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="faq-plus">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={`faq-answer-${i}`} hidden={openIndex !== i}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { type Locale, products, type ProductCategory } from "@/lib/products";

type Filter = "all" | ProductCategory;

const copy = {
  tr: {
    filters: [
      ["all", "Tümü"],
      ["focus", "Odak"],
      ["productivity", "Üretkenlik"],
      ["personalize", "Kişiselleştirme"],
      ["communication", "İletişim"],
    ] as [Filter, string][],
    open: "Ürünü aç",
    external: "yeni sekmede açılır",
  },
  en: {
    filters: [
      ["all", "All"],
      ["focus", "Focus"],
      ["productivity", "Productivity"],
      ["personalize", "Personalization"],
      ["communication", "Communication"],
    ] as [Filter, string][],
    open: "Open product",
    external: "opens in a new tab",
  },
};

export function ProductShowcase({ locale }: { locale: Locale }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const visibleProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <>
      <div className="filter-row" aria-label="Product filters">
        {copy[locale].filters.map(([value, label]) => (
          <button
            className={activeFilter === value ? "filter active" : "filter"}
            type="button"
            key={value}
            aria-pressed={activeFilter === value}
            onClick={() => setActiveFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.slug}>
            <div className="product-card-top">
              <img src={product.icon} alt="" width="64" height="64" />
              <span>{product.label[locale]}</span>
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description[locale]}</p>
            </div>
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy[locale].open}: ${product.name}, ${copy[locale].external}`}
            >
              {copy[locale].open}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}

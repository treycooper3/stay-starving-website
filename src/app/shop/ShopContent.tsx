"use client";

import { ExternalLink, Shirt } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const PRODUCTS = [
  {
    name: "KXSS Limited Edition Hoodie",
    type: "Hoodie",
  },
  {
    name: "KXSS Sweatpants",
    type: "Sweatpants",
  },
];

export default function ShopContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <Container>
          <FadeInOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Apparel
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Wear the Brand
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              KXSS — a collaboration between KayphoriaX and Stay Starving.
              Streetwear that speaks to the hustle. When you wear it, you&apos;re
              not just wearing clothes — you&apos;re wearing a statement.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Brand Section */}
      <section className="pb-16">
        <Container>
          <FadeInOnScroll>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image placeholder */}
              <div className="aspect-[4/3] rounded-lg bg-surface-elevated border border-border flex items-center justify-center">
                <div className="text-center">
                  <Shirt size={48} className="text-gold/30 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-text-muted/30">
                    KXSS
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <Badge variant="gold" className="mb-4">
                  KayphoriaX x Stay Starving
                </Badge>
                <h2 className="text-3xl font-bold mb-1">KXSS</h2>
                <p className="text-gold font-medium mb-4">
                  Bold Streetwear Collab
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  KXSS merges KayphoriaX&apos;s bold design language with Stay
                  Starving&apos;s relentless identity. Premium hoodies and
                  sweatpants — every piece represents the mindset. Limited drops.
                  No restocks. When it&apos;s gone, it&apos;s gone.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {PRODUCTS.map((product) => (
                    <span
                      key={product.name}
                      className="px-3 py-1 text-xs bg-surface border border-border rounded-full text-text-muted"
                    >
                      {product.type}
                    </span>
                  ))}
                </div>

                <Button
                  href="https://kayphoriax.com/collections/runway/products/kxss-limited-edition-hoodie"
                  variant="ghost"
                  size="sm"
                >
                  Shop Now <ExternalLink size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <Container>
          <StaggerChildren className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {PRODUCTS.map((product) => (
              <StaggerItem key={product.name}>
                <a
                  href="https://kayphoriax.com/collections/runway/products/kxss-limited-edition-hoodie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="aspect-square rounded-lg bg-surface-elevated border border-border flex items-center justify-center mb-4 group-hover:border-gold/30 transition-colors">
                    <Shirt size={48} className="text-gold/20" />
                  </div>
                  <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-muted">KXSS Collection</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Coming Soon Note */}
      <section className="py-20 bg-surface">
        <Container className="text-center max-w-2xl">
          <FadeInOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Coming Soon
            </p>
            <h2 className="text-2xl font-bold mb-4">
              More Drops Loading
            </h2>
            <p className="text-text-secondary">
              New collections and limited releases are in the works. Follow us
              on Instagram to be the first to know when they drop.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="ghost">
                Contact for Orders
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}

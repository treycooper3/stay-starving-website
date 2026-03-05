"use client";

import { useState } from "react";
import { Mail, MessageSquare, Users } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { SOCIAL_LINKS, SKOOL_URL } from "@/lib/constants";

const INQUIRY_TYPES = [
  "General Inquiry",
  "AI Automation Services",
  "Real Estate Services",
  "Membership / The Boardroom",
  "Partnership Opportunity",
  "Media / Press",
];

export default function ContactContent() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      inquiryType: formData.get("inquiryType"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <Container className="max-w-4xl">
          <FadeInOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch — AI Consulting, Real Estate &amp; More
            </h1>
            <p className="text-lg text-text-secondary">
              Need AI automation, Florida real estate services, or a partnership?
              Tell us what you&apos;re building. We respond within 48 hours.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeInOnScroll>
                <div className="rounded-lg border border-border bg-surface-elevated p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare size={20} className="text-gold" />
                    <h2 className="text-xl font-bold">Send a Message</h2>
                  </div>

                  {formState === "success" ? (
                    <div className="p-6 rounded-lg border border-gold/20 bg-gold/5 text-center">
                      <p className="text-lg font-bold text-gold mb-2">Message Sent!</p>
                      <p className="text-sm text-text-secondary">
                        Thanks for reaching out. We typically respond within 48 hours.
                      </p>
                      <button
                        onClick={() => setFormState("idle")}
                        className="mt-4 text-sm text-gold hover:text-gold-light transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            Name
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 bg-surface border border-border rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-secondary mb-2">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 bg-surface border border-border rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          className="w-full px-4 py-3 bg-surface border border-border rounded text-sm text-text-primary focus:outline-none focus:border-gold transition-colors"
                        >
                          {INQUIRY_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Phone (optional)
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 bg-surface border border-border rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell us what you're building, what you need, or how we can help."
                          rows={5}
                          className="w-full px-4 py-3 bg-surface border border-border rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
                          required
                        />
                      </div>

                      {formState === "error" && (
                        <p className="text-sm text-red-400">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto"
                        >
                          {formState === "loading" ? "Sending..." : "Send Message"}
                        </Button>
                        <p className="text-xs text-text-muted">
                          We typically respond within 48 hours.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </FadeInOnScroll>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeInOnScroll delay={0.2}>
                <div className="rounded-lg border border-border bg-surface-elevated p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail size={20} className="text-gold" />
                    <h3 className="font-bold">Direct Contact</h3>
                  </div>
                  <p className="text-sm text-text-muted mb-4">
                    For urgent inquiries, reach us directly.
                  </p>
                  <a
                    href="mailto:hello@staystarving.com"
                    className="text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    hello@staystarving.com
                  </a>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.3}>
                <div className="rounded-lg border border-border bg-surface-elevated p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users size={20} className="text-gold" />
                    <h3 className="font-bold">Follow Us</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-text-muted hover:text-gold transition-colors capitalize"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.4}>
                <div className="rounded-lg border border-gold/20 bg-gold/5 p-6">
                  <h3 className="font-bold mb-2">Join The Boardroom</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Free membership community for operators building wealth through systems.
                  </p>
                  <Button href="/boardroom" variant="ghost" size="sm">
                    Join Free
                  </Button>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

interface JsonLdProps {
  data: Record<string, unknown>;
}

// JSON-LD structured data for SEO and LLM discoverability.
// Content is static/hardcoded schema data — no user input, safe from XSS.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

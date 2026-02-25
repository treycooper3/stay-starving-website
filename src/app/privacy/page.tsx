import Container from "@/components/layout/Container";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Stay Starving Holdings",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-text-muted mb-12">
          Last updated: February 24, 2026
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              {BRAND.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information you
              voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit a contact form (name, email, phone, inquiry type, message)</li>
              <li>Subscribe to our newsletter (email address)</li>
              <li>Interact with our website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send newsletters and updates you have opted into</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              3. Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating our website and conducting our business
              (such as email delivery services), so long as those parties agree
              to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              4. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. You can set your browser to
              refuse all or some browser cookies, or to alert you when websites
              set or access cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, including to
              satisfy any legal, accounting, or reporting requirements. Newsletter
              subscribers can unsubscribe at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              6. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from marketing communications</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at hello@staystarving.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              7. Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party websites and services
              (including Skool, Airbnb, KayphoriaX, Calendly, and social media
              platforms). We are not responsible for the privacy practices of
              these external sites. We encourage you to review their privacy
              policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              8. Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information. However, no method of transmission over the internet
              or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at hello@staystarving.com.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/layout/Container";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service | Stay Starving Holdings",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-text-muted mb-12">
          Last updated: February 24, 2026
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the {BRAND.legalName} website
              (&quot;staystarving.com&quot;), you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use
              our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              2. Description of Services
            </h2>
            <p>
              {BRAND.legalName} is a diversified holding company operating
              multiple divisions including real estate, media, AI automation,
              education, apparel, drone services, and investment services. Our
              website provides information about our divisions, membership
              community (The Boardroom), and service offerings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              3. Membership Terms
            </h2>
            <p className="mb-3">
              The Boardroom membership is hosted on a third-party platform
              (Skool). Membership terms, billing, and cancellation are governed
              by that platform&apos;s terms in addition to ours.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Memberships can be cancelled at any time</li>
              <li>Access continues through the end of your billing period</li>
              <li>Course content is for personal use only and may not be redistributed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              4. Real Estate Services
            </h2>
            <p>
              Trey Cooper Realty provides licensed real estate agent services in
              the state of Florida. All real estate transactions are subject to
              applicable state and federal laws. Information provided on this
              website does not constitute legal or financial advice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              5. AI Automation Services
            </h2>
            <p>
              Luxcor AI provides custom AI automation solutions. Service
              agreements, deliverables, and pricing are defined in individual
              contracts between the client and {BRAND.legalName}.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of {BRAND.legalName} and is
              protected by copyright and intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our
              written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              7. User Conduct
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Submit false or misleading information through our forms</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p>
              This website and its content are provided &quot;as is&quot; without
              warranties of any kind. We do not guarantee the accuracy,
              completeness, or usefulness of any information on the website.
              Investment and real estate decisions should be made with
              independent professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              {BRAND.legalName} shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your
              use of this website or our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              10. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the State of Wyoming. Any
              disputes arising from these terms shall be resolved in the courts
              of Wyoming.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              12. Contact
            </h2>
            <p>
              For questions about these terms, contact us at
              hello@staystarving.com.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

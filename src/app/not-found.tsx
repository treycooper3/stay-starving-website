import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container className="text-center max-w-2xl">
        <p className="text-8xl font-bold text-gradient-gold mb-4">404</p>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-text-secondary mb-8">
          This page doesn&apos;t exist, but your next move does. Head back and keep
          building.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/portfolio" variant="ghost" size="lg">
            Explore Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}

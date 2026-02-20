import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DIVISIONS } from "@/lib/constants";
import DivisionDetailContent from "./DivisionDetailContent";

export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const division = DIVISIONS.find((d) => d.slug === slug);
  if (!division) return {};
  return {
    title: division.name,
    description: division.description,
  };
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = DIVISIONS.find((d) => d.slug === slug);
  if (!division) notFound();

  return <DivisionDetailContent division={division} />;
}

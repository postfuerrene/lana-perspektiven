import type { Metadata } from "next";
import { APDetail } from "@/components/APDetail";
import { workPackages } from "@/lib/content";

const wp = workPackages.find((w) => w.slug === "ap2")!;

export const metadata: Metadata = {
  title: `${wp.id} — ${wp.title} — LaNa-Perspektiven`,
};

export default function AP2Page() {
  return <APDetail wp={wp} />;
}

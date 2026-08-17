import type { Metadata } from "next";
import { APDetail } from "@/components/APDetail";
import { workPackages } from "@/lib/content";

const wp = workPackages.find((w) => w.slug === "ap5")!;

export const metadata: Metadata = {
  title: `${wp.id} — ${wp.title} — LaNa-Perspektiven`,
};

export default function AP5Page() {
  return <APDetail wp={wp} photoSrc="/assets/hero/ap5.jpg" />;
}

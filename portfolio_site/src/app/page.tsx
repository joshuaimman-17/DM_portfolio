import { Suspense } from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";
import { Process } from "@/components/home/Process";
import { Tools } from "@/components/home/Tools";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestPosts } from "@/components/home/LatestPosts";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CardSkeleton, Section } from "@/components/home/Section";

export const metadata: Metadata = {
  title: "Your Name | Digital Marketing Expert",
  description: "SEO and performance marketing that turns traffic into leads and revenue.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />

      <Suspense fallback={<Section><CardSkeleton /></Section>}>
        <FeaturedWorks />
      </Suspense>

      <Process />
      <Tools />

      <Suspense fallback={<Section><CardSkeleton /></Section>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<Section><CardSkeleton /></Section>}>
        <LatestPosts />
      </Suspense>

      <FinalCTA />
    </>
  );
}
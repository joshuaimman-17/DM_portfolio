export type Service = { slug: string; title: string; summary: string; icon: string };
export type Work = { slug: string; client: string; title: string; result: string; tags: string[] };
export type Testimonial = { name: string; role: string; quote: string };
export type Post = { slug: string; title: string; excerpt: string; date: string; readTime: string };

export const services: Service[] = [
  { slug: "seo", title: "SEO", summary: "Rank higher and drive organic traffic that converts.", icon: "🔍" },
  { slug: "paid-ads", title: "Google & Meta Ads", summary: "Profitable paid campaigns with measurable ROAS.", icon: "🎯" },
  { slug: "social-media", title: "Social Media", summary: "Content and community that builds your brand.", icon: "📱" },
  { slug: "content-marketing", title: "Content Marketing", summary: "Blogs, landing pages and copy that sell.", icon: "✍️" },
  { slug: "email-marketing", title: "Email Marketing", summary: "Automations and newsletters that nurture leads.", icon: "📧" },
  { slug: "analytics", title: "Analytics & Reporting", summary: "GA4 dashboards that show what actually works.", icon: "📊" },
];

// Replace these with CMS/DB fetches
export async function getFeaturedWorks(): Promise<Work[]> {
  return [
    { slug: "xyz-seo-growth", client: "XYZ Store", title: "SEO overhaul for an e-commerce brand", result: "+120% organic traffic in 6 months", tags: ["SEO"] },
    { slug: "abc-lead-gen", client: "ABC Realty", title: "Lead generation with Google Ads", result: "CPL reduced by 45%", tags: ["Google Ads"] },
    { slug: "fit-social", client: "FitLife", title: "Instagram growth campaign", result: "+30K followers, 6% engagement", tags: ["Social"] },
  ];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return [
    { name: "Client Name", role: "Founder, XYZ Store", quote: "Our organic traffic more than doubled within six months." },
    { name: "Client Name", role: "Marketing Head, ABC Realty", quote: "Clear reporting, smart strategy, and real results." },
    { name: "Client Name", role: "Owner, FitLife", quote: "Finally someone who explains the numbers and delivers." },
  ];
}

export async function getLatestPosts(): Promise<Post[]> {
  return [
    { slug: "grow-traffic-120", title: "How I grew organic traffic by 120%", excerpt: "The exact process, step by step.", date: "2026-10-01", readTime: "6 min" },
    { slug: "ga4-setup", title: "GA4 setup checklist for beginners", excerpt: "Track what matters from day one.", date: "2026-09-18", readTime: "5 min" },
    { slug: "meta-ads-mistakes", title: "5 Meta Ads mistakes burning your budget", excerpt: "And how to fix each one.", date: "2026-09-02", readTime: "4 min" },
  ];
}
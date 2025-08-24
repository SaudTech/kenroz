import { Metadata } from "next";
import {
  Search,
  TrendingUp,
  Target,
  Mail,
  Share2,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Digital Marketing Services | SEO, PPC, Social Media & Content Marketing",
  description:
    "Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, and email campaigns. Drive traffic, leads, and sales with data-driven strategies.",
  keywords: [
    "digital marketing services",
    "SEO services",
    "PPC advertising",
    "social media marketing",
    "content marketing",
    "email marketing",
    "digital marketing agency Saudi Arabia",
  ],
};

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost visibility and drive organic traffic with smart SEO strategies.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Link Building",
        "Local SEO",
      ],
    },
    {
      icon: Target,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Deliver instant results with targeted ad campaigns that convert.",
      features: ["Google & Meta Ads", "Campaign Setup", "Conversion Tracking"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Grow your brand and connect with audiences on every platform.",
      features: ["Community Engagement", "Social Ads", "Performance Analytics"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Convert leads and retain customers with personalized campaigns.",
      features: [
        "Campaign Design",
        "Automation Flows",
        "Audience Segmentation",
        "Engagement Tracking",
      ],
    },
    {
      icon: BarChart3,
      title: "Content Marketing",
      description:
        "Engage audiences with compelling content that builds trust.",
      features: [
        "Blog & Article Writing",
        "Video & Visual Content",
        "Infographics",
        "Content Distribution",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description:
        "Measure performance and optimize campaigns with real insights.",
      features: [
        "Google Analytics Setup",
        "Custom Dashboards",
        "ROI Analysis",
        "Funnel Insights",
        "Data Visualization",
      ],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Website Traffic",
      description:
        "Drive more qualified visitors to your website through multiple digital channels.",
    },
    {
      icon: Target,
      title: "Better Lead Generation",
      description:
        "Generate high-quality leads that are more likely to convert into customers.",
    },
    {
      icon: Users,
      title: "Enhanced Brand Awareness",
      description:
        "Build brand recognition and establish your business as an industry authority.",
    },
    {
      icon: BarChart3,
      title: "Improved ROI",
      description:
        "Maximize your marketing budget with data-driven strategies and continuous optimization.",
    },
    {
      icon: Globe,
      title: "Expanded Market Reach",
      description:
        "Reach new audiences and expand into new markets with targeted digital campaigns.",
    },
    {
      icon: Eye,
      title: "Better Customer Insights",
      description:
        "Gain valuable insights into customer behavior and preferences through analytics.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Digital Marketing
                <span className="block text-primary">
                  That Delivers Results
                </span>
              </h1>
              <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                Grow your business with comprehensive digital marketing
                strategies. From SEO and PPC to social media and content
                marketing, we help you reach your target audience and achieve
                measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/contact-us?p=digital-marketing"}>
                  <ButtonLink href={"/contact-us?p=digital-marketing"}>
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </ButtonLink>
                </Link>
              </div>
            </div>

            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        150%
                      </div>
                      <div className="text-sm text-gray-900">
                        Traffic Growth
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <Target className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        300%
                      </div>
                      <div className="text-sm text-gray-900">Lead Increase</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      5x ROI
                    </div>
                    <div className="text-sm text-gray-900">
                      Average Return on Investment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section — Compact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Our Digital Marketing Services
            </h2>
            <p className="text-base text-gray-900 max-w-2xl mx-auto">
              Comprehensive solutions to grow your presence and drive results.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-gray-200 bg-white/60 hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-900 mb-3 line-clamp-2">
                  {service.description}
                </p>

                <div className="space-y-1.5">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary/80" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section — Compact */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Why Choose Our Digital Marketing Services?
            </h2>
            <p className="text-base text-gray-900 max-w-2xl mx-auto">
              Drive measurable results with our proven strategies.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-gray-200 bg-white/60 hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-gray-900 line-clamp-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Proven Results
            </h2>
            <p className="text-base text-gray-900">
              Our digital marketing campaigns deliver measurable success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-primary/10 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">200%</div>
              <p className="text-gray-700 font-medium">
                Average Traffic Increase
              </p>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-2xl">
              <div className="text-4xl font-bold text-secondary mb-2">150%</div>
              <p className="text-gray-700 font-medium">
                Lead Generation Growth
              </p>
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">5x</div>
              <p className="text-gray-700 font-medium">Return on Ad Spend</p>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-2xl">
              <div className="text-4xl font-bold text-secondary mb-2">90%</div>
              <p className="text-gray-700 font-medium">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Grow Your Business Online?
        </h2>
        <p className="mb-8">
          Let&apos;s create a digital marketing strategy that drives real
          results. Get a free marketing audit and discover growth opportunities.
        </p>
        <ButtonLink href="/contact-us?p=digital-marketing" variant={"secondary"}>
          Contact Us <ArrowRight className="ml-2 w-5 h-5" />
        </ButtonLink>
      </section>
    </main>
  );
}

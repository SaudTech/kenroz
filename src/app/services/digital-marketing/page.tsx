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
        "Improve your website's visibility in search results and drive organic traffic with proven SEO strategies.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Link Building",
        "Local SEO",
        "SEO Audits",
      ],
      color: "blue",
    },
    {
      icon: Target,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Generate immediate results with targeted paid advertising campaigns across Google, Facebook, and other platforms.",
      features: [
        "Google Ads",
        "Facebook Ads",
        "Campaign Management",
        "A/B Testing",
        "Conversion Tracking",
        "ROI Optimization",
      ],
      color: "green",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build brand awareness and engage with your audience across all major social media platforms.",
      features: [
        "Content Creation",
        "Community Management",
        "Social Advertising",
        "Influencer Marketing",
        "Analytics",
        "Strategy Development",
      ],
      color: "purple",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Nurture leads and retain customers with personalized email campaigns that drive conversions.",
      features: [
        "Campaign Design",
        "List Management",
        "Automation",
        "Segmentation",
        "A/B Testing",
        "Performance Tracking",
      ],
      color: "orange",
    },
    {
      icon: BarChart3,
      title: "Content Marketing",
      description:
        "Create valuable, relevant content that attracts and engages your target audience throughout their journey.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Content",
        "Infographics",
        "eBooks",
        "Content Distribution",
      ],
      color: "red",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description:
        "Track, measure, and optimize your marketing performance with comprehensive analytics and insights.",
      features: [
        "Google Analytics",
        "Custom Dashboards",
        "Performance Reports",
        "ROI Analysis",
        "Conversion Tracking",
        "Data Visualization",
      ],
      color: "indigo",
    },
  ];

  // const process = [
  //   {
  //     step: "01",
  //     title: "Strategy Development",
  //     description: "We analyze your business, competitors, and target audience to create a comprehensive digital marketing strategy.",
  //     deliverables: ["Market Research", "Competitor Analysis", "Target Audience Personas", "Marketing Strategy Document"]
  //   },
  //   {
  //     step: "02",
  //     title: "Campaign Setup",
  //     description: "Set up tracking, create campaigns, and implement necessary tools and platforms for optimal performance.",
  //     deliverables: ["Analytics Setup", "Campaign Creation", "Landing Pages", "Tracking Implementation"]
  //   },
  //   {
  //     step: "03",
  //     title: "Content Creation",
  //     description: "Develop compelling content across all channels including copy, visuals, and multimedia assets.",
  //     deliverables: ["Ad Copy", "Visual Assets", "Video Content", "Blog Posts"]
  //   },
  //   {
  //     step: "04",
  //     title: "Campaign Launch",
  //     description: "Launch campaigns across selected channels with proper monitoring and initial optimization.",
  //     deliverables: ["Campaign Launch", "Initial Monitoring", "Performance Baseline", "Quick Optimizations"]
  //   },
  //   {
  //     step: "05",
  //     title: "Optimization & Testing",
  //     description: "Continuously test, analyze, and optimize campaigns for better performance and higher ROI.",
  //     deliverables: ["A/B Tests", "Performance Analysis", "Optimization Reports", "Strategy Adjustments"]
  //   },
  //   {
  //     step: "06",
  //     title: "Reporting & Growth",
  //     description: "Provide detailed reports and insights while scaling successful campaigns for continued growth.",
  //     deliverables: ["Monthly Reports", "ROI Analysis", "Growth Recommendations", "Strategy Evolution"]
  //   }
  // ];

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

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    indigo: "bg-indigo-100 text-indigo-600",
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
                  Data-Driven Marketing
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Digital Marketing
                <span className="block text-orange-600">
                  That Delivers Results
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Grow your business with comprehensive digital marketing
                strategies. From SEO and PPC to social media and content
                marketing, we help you reach your target audience and achieve
                measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        150%
                      </div>
                      <div className="text-sm text-gray-600">
                        Traffic Growth
                      </div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        300%
                      </div>
                      <div className="text-sm text-gray-600">Lead Increase</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      5x ROI
                    </div>
                    <div className="text-sm text-gray-600">
                      Average Return on Investment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to grow your online
              presence and drive business results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 ${
                    // @ts-expect-error Test
                    colorClasses[service.color]
                  } rounded-xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Digital Marketing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive measurable results with our proven digital marketing
              strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to digital marketing success
            </p>
          </div>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8 p-8 bg-white rounded-2xl shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {step.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Our digital marketing campaigns deliver measurable success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">200%</div>
              <p className="text-gray-700 font-medium">
                Average Traffic Increase
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">150%</div>
              <p className="text-gray-700 font-medium">
                Lead Generation Growth
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">5x</div>
              <p className="text-gray-700 font-medium">Return on Ad Spend</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <p className="text-gray-700 font-medium">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Grow Your Business Online?
        </h2>
        <p className="mb-8">
          Let&apos;s create a digital marketing strategy that drives real
          results. Get a free marketing audit and discover growth opportunities.
        </p>
        <Link
          href={"/contact-us"}
          className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
        >
          Contact Us <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}

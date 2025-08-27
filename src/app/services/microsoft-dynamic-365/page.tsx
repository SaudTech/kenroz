import { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  Target,
} from "lucide-react";
import Link from "next/link";
import EngagementSection from "@/components/EngagementSection";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 Implementation & Customization Services",
  description:
    "Expert Microsoft Dynamics 365 implementation, customization, and support services. Transform your business operations with unified CRM and ERP solutions tailored to your needs.",
  keywords: [
    "Microsoft Dynamics 365",
    "Dynamics 365 implementation",
    "CRM solutions",
    "ERP systems",
    "business process automation",
    "Dynamics 365 customization",
    "Microsoft partner Saudi Arabia",
  ],
};

export default function MicrosoftDynamic365Page() {
  const modules = [
    {
      name: "Sales",
      description: "Streamline your sales process from lead to close",
      icon: Target,
      features: [
        "Lead Management",
        "Opportunity Tracking",
        "Sales Analytics",
        "Mobile Access",
      ],
    },
    {
      name: "Customer Service",
      description: "Deliver exceptional customer experiences",
      icon: Users,
      features: [
        "Case Management",
        "Knowledge Base",
        "Omnichannel Support",
        "SLA Management",
      ],
    },
    {
      name: "Finance & Operations",
      description: "Optimize financial processes and operations",
      icon: BarChart3,
      features: [
        "Financial Reporting",
        "Supply Chain",
        "Project Management",
        "Compliance",
      ],
    },
    {
      name: "Marketing",
      description: "Create targeted campaigns and nurture leads",
      icon: Zap,
      features: [
        "Campaign Management",
        "Lead Scoring",
        "Email Marketing",
        "Customer Journey",
      ],
    },
  ];

  const benefits = [
    "Unified view of customer data across all touchpoints",
    "Automated workflows reducing manual tasks by 60%",
    "Real-time analytics and reporting for better decisions",
    "Scalable solution that grows with your business",
    "Enhanced collaboration across departments",
    "Mobile access for productivity anywhere, anytime",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Microsoft Dynamics 365
                <span className="block text-primary">Implementation</span>
              </h1>
              <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                Transform your business operations with unified CRM and ERP
                solutions. Our expert team delivers customized Dynamics 365
                implementations that streamline processes, boost productivity,
                and drive growth.
              </p>
            </div>
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
                <Image
                  src="/Microsoft Dynamic 365.webp"
                  alt="Microsoft Dynamics 365 Dashboard Interface"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dynamics 365?
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Unify your business operations with intelligent applications that
              adapt to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dynamics 365 Modules We Implement
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {module.name}
                  </h3>
                </div>
                <p className="text-gray-900 mb-6">{module.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-900">
              Real results from our Dynamics 365 implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary/10 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <p className="text-gray-700 font-medium">
                Reduction in manual processes
              </p>
            </div>
            <div className="text-center p-8 bg-secondary/10 rounded-2xl">
              <div className="text-4xl font-bold text-secondary mb-2">40%</div>
              <p className="text-gray-700 font-medium">
                Increase in sales productivity
              </p>
            </div>
            <div className="text-center p-8 bg-primary/10 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <p className="text-gray-700 font-medium">
                Faster decision making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EngagementSection
        title="Ready to transform your business?"
        description="Let's discuss how Microsoft Dynamics 365 can streamline your operations and drive growth. Get a free consultation today."
        button1Url="/contact-us?p=microsoft-dynamic-365"
        button1Text="Contact us"
      />
    </main>
  );
}

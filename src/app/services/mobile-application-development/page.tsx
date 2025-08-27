import { Metadata } from "next";
import {
  Smartphone,
  Tablet,
  Zap,
  Shield,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Apple,
  Play,
  Code,
  Layers,
  Bell,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import EngagementSection from "@/components/EngagementSection";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android Apps",
  description:
    "Professional mobile application development for iOS and Android. Create engaging, high-performance mobile apps with native and cross-platform solutions using React Native, Flutter, and Swift.",
  keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native",
    "Flutter development",
    "cross-platform apps",
    "mobile app development Saudi Arabia",
  ],
};

export default function MobileApplicationDevelopmentPage() {
  const developmentApproaches = [
    {
      title: "Native Development",
      description:
        "Platform-specific apps for optimal performance and user experience",
      technologies: [
        "Swift/Objective-C",
        "Kotlin/Java",
        "Xcode",
        "Android Studio",
      ],
      pros: [
        "Best Performance",
        "Full Platform Features",
        "Optimal UX",
        "App Store Optimization",
      ],
      icon: Smartphone,
    },
    {
      title: "Cross-Platform",
      description:
        "Single codebase for multiple platforms with near-native performance",
      technologies: ["React Native", "Flutter", "Xamarin", "Ionic"],
      pros: [
        "Cost Effective",
        "Faster Development",
        "Code Reusability",
        "Consistent UI",
      ],
      icon: Layers,
    },
    {
      title: "Hybrid Development",
      description:
        "Web technologies wrapped in native containers for quick deployment",
      technologies: ["Cordova", "PhoneGap", "Ionic", "HTML5"],
      pros: ["Quick Launch", "Web Skills", "Easy Updates", "Lower Cost"],
      icon: Code,
    },
  ];

  const appTypes = [
    {
      title: "E-commerce Apps",
      description:
        "Shopping apps with payment integration, product catalogs, and user accounts",
      features: [
        "Product Catalog",
        "Secure Payments",
        "User Profiles",
        "Push Notifications",
      ],
      icon: CreditCard,
    },
    {
      title: "Social & Communication",
      description:
        "Social networking, messaging, and community-building applications",
      features: [
        "Real-time Chat",
        "Social Features",
        "Media Sharing",
        "User Communities",
      ],
      icon: Users,
    },
    {
      title: "Business & Productivity",
      description:
        "Enterprise apps for workflow management, collaboration, and productivity",
      features: [
        "Task Management",
        "Team Collaboration",
        "Document Sharing",
        "Analytics",
      ],
      icon: Layers,
    },
    {
      title: "On-Demand Services",
      description:
        "Service marketplace apps connecting users with service providers",
      features: [
        "GPS Integration",
        "Booking System",
        "Payment Gateway",
        "Rating System",
      ],
      icon: Bell,
    },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Native Performance",
      description:
        "Optimized for each platform to deliver the best possible user experience and performance.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Built with security best practices including data encryption and secure authentication.",
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description:
        "Optimized for speed with smooth animations and quick response times.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "Intuitive interfaces designed based on user research and platform guidelines.",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description:
        "Engage users with targeted, personalized push notifications and in-app messaging.",
    },
    {
      icon: Star,
      title: "App Store Optimization",
      description:
        "Optimized for app store discovery with proper metadata and compelling descriptions.",
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
                Mobile Application
                <span className="block text-primary">Development</span>
              </h1>
              <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                Create engaging mobile experiences that users love. Our expert
                team builds high-performance iOS and Android apps using native
                and cross-platform technologies for maximum reach and user
                satisfaction.
              </p>
            </div>
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
                <div className="relative flex items-center justify-center space-x-4">
                  <div className="bg-white rounded-3xl shadow-2xl p-4 transform rotate-12">
                    <div className="w-48 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex flex-col items-center justify-center space-y-4">
                      <Smartphone className="w-12 h-12 text-primary" />
                      <div className="space-y-2 w-32">
                        <div className="h-3 bg-primary/20 rounded"></div>
                        <div className="h-3 bg-secondary/20 rounded w-3/4"></div>
                        <div className="h-3 bg-primary/20 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl shadow-2xl p-4 transform -rotate-12">
                    <div className="w-48 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl flex flex-col items-center justify-center space-y-4">
                      <Tablet className="w-12 h-12 text-secondary" />
                      <div className="space-y-2 w-32">
                        <div className="h-3 bg-secondary/20 rounded"></div>
                        <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                        <div className="h-3 bg-secondary/20 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approaches */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Development Approaches
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Choose the right approach for your project needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {developmentApproaches.map((approach, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <approach.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {approach.title}
                </h3>
                <p className="text-gray-900 mb-6">{approach.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {approach.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Advantages:
                  </h4>
                  <div className="space-y-2">
                    {approach.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-gray-700">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Mobile Development Services?
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              We deliver exceptional mobile applications with cutting-edge
              technology and user-focused design
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Mobile Apps We Build
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              From simple utility apps to complex enterprise solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((app, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {app.title}
                  </h3>
                </div>
                <p className="text-gray-900 mb-6">{app.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {app.features.map((feature, idx) => (
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

      {/* Platform Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Support
            </h2>
            <p className="text-xl text-gray-900">
              We develop for all major mobile platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Apple className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                iOS Development
              </h3>
              <p className="text-gray-900 mb-6">
                Native iOS apps using Swift and Objective-C for iPhone and iPad
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <span>iPhone</span>
                <span>•</span>
                <span>iPad</span>
                <span>•</span>
                <span>Apple Watch</span>
              </div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Android Development
              </h3>
              <p className="text-gray-900 mb-6">
                Native Android apps using Kotlin and Java for all Android
                devices
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <span>Smartphones</span>
                <span>•</span>
                <span>Tablets</span>
                <span>•</span>
                <span>Wear OS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EngagementSection
        title="Ready to Build Your Mobile App?"
        description="Transform your idea into a successful mobile application. Let's
            discuss your project and create an app that users will love."
        button1Url="/contact-us?p=mobile-application-development"
        button1Text="Contact us"
      />
    </main>
  );
}

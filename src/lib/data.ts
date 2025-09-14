// TODO: replace with real data source
export type Service = {
  slug: string;
  name: string;
  summary?: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImageUrl?: string;
  faq?: { q: string; a: string }[];
};

const services: Service[] = [
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    summary: "Cloud migration, optimization, and DevSecOps services.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    summary: "Digital marketing solutions to grow your business.",
  },
  {
    slug: "mobile-application-development",
    name: "Mobile Application Development",
    summary: "Custom mobile app development services.",
  },
  {
    slug: "microsoft-dynamic-365",
    name: "Microsoft Dynamics 365",
    summary: "Microsoft Dynamics 365 implementation and customization services.",
  },
  {
    slug: "outsourcing",
    name: "Outsourcing",
    summary: "IT outsourcing services for scalable teams.",
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    summary: "Modern web application development services.",
  },
];

export async function listServices() {
  return services;
}

export async function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Placeholder implementations for other content types
export async function listProducts() {
  return [] as any[]; // TODO: implement
}
export async function listPosts() {
  return [] as any[]; // TODO: implement
}
export async function listCaseStudies() {
  return [] as any[]; // TODO: implement
}
export async function getProductBySlug(_slug: string) {
  return null; // TODO: implement
}
export async function getPostBySlug(_slug: string) {
  return null; // TODO: implement
}
export async function getCaseStudyBySlug(_slug: string) {
  return null; // TODO: implement
}

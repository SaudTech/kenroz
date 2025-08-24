export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    slug: 'python-developer',
    title: 'Python Developer',
    department: 'Engineering',
    location: 'Remote',
    description:
      'Build scalable APIs and services that power our core products and deliver a great experience for our customers.',
    responsibilities: [
      'Design, build and maintain scalable Python services',
      'Collaborate with cross-functional teams to define, design, and ship new features',
      'Write clean, maintainable, and testable code',
    ],
    requirements: [
      '2+ years of professional Python experience',
      'Understanding of RESTful APIs and microservices',
      'Familiarity with relational and NoSQL databases',
    ],
  },
  {
    slug: 'java-developer',
    title: 'Java Developer',
    department: 'Engineering',
    location: 'Remote',
    description:
      'Design robust backend systems using Java and help scale our applications to support global customers.',
    responsibilities: [
      'Implement backend features in Java and Spring Boot',
      'Improve performance and scalability of existing services',
      'Participate in code reviews and contribute to team best practices',
    ],
    requirements: [
      '3+ years of Java development experience',
      'Knowledge of Spring Boot and cloud-native architectures',
      'Experience with CI/CD pipelines and unit testing',
    ],
  },
];

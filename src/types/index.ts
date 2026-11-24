export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface ServiceDetail extends ServiceItem {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeywords: string[];
  supportingKeywords: string[];
  longDescription: string[];
  features: string[];
  processSteps: { title: string; description: string }[];
  relatedServiceIds: string[];
}

export interface GalleryProject {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  alt?: string;
}

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
}


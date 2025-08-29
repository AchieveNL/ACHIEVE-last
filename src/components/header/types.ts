export interface NavigationLink {
  title: string;
  description: string;
}

export interface NavigationData {
  id: string;
  value: string;
  slug: string;
  links: Record<string, NavigationLink>;
}

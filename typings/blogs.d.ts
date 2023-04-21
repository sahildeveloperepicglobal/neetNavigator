export interface BlogsTypes {
  name: string;
  slug: string;
  content: string;
  images: string[];
  categories: string[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

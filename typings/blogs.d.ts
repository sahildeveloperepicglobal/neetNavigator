export interface BlogsTypes {
  _id?: string;
  createdAt?: string;
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

interface StoryTypes {
  _id?: string;
  name: string;
  slug: string;
  content: string;
  image: string;
  quotes: string[];
  createdAt?: string;
  categories: string[];
}

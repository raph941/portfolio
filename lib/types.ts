interface FeaturedImageType {
  altText: string;
  caption: string;
  id: string;
  sizes: string;
  sourceUrl: string;
  srcSet: string;
}

interface CategoryType {
    name: string
}

export interface BlogType {
  id: string;
  slug: string;
  title: string;
  date: string;
  categories: CategoryType[];
  content: string;
  modified: string;
  featuredImage: FeaturedImageType;
}


export interface ProjectType {
  title: string;
  image?: string;
  description?: string;
  stacks?: string[];
  liveLink?: string;
  codeHost?: string;
  showDetailView?: boolean
}
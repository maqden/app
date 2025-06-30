
export interface User {
  account: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  cover: string;
  products?: Thumbnail[];
  services?: Thumbnail[];
}

export interface Price {
  id: string;
  name: string;
  description: string;
  type: string;
  price: number;
  features: string[];
  settings: {
    popular: boolean;
  };
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Thumbnail {
  cover: string;
  title: string;
  target: string;
  description?: string;
}


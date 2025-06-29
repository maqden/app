
export interface User {
  account: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  products?: Thumbnail[];
  services?: Thumbnail[];
}

export interface Thumbnail {
  cover: string;
  title: string;
  target: string;
  description?: string;
}


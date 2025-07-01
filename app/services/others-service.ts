import {api} from "~/lib/api";

export interface Thumbnail {
  cover: string;
  title: string;
  target: string;
  description?: string;
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

export class OthersService {
  async highlights(type: string): Promise<Thumbnail[]> {
    const response = await api.get(`/highlights/${type}`);

    return api.json<Thumbnail[]>(response);
  }

  async popular(): Promise<Thumbnail[]> {
    const response = await api.get('/popular');

    return api.json<Thumbnail[]>(response);
  }

  async search(term: string): Promise<Thumbnail[]> {
    const response = await api.get(`/search?q=${encodeURIComponent(term)}`);

    return api.json<Thumbnail[]>(response);
  }

  async prices(): Promise<Price[]> {
    const response = await api.get('/prices');

    return api.json<Price[]>(response);
  }

  async faqs(): Promise<Faq[]> {
    const response = await api.get('/faqs');

    return api.json<Faq[]>(response);
  }

  async getInTouch(): Promise<Faq[]> {
    const response = await api.post('/get-in-touch');

    return api.json<Faq[]>(response);
  }
}

export const othersService = new OthersService();
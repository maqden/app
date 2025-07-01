import {api} from "~/lib/api";
import type {Thumbnail} from "~/services/others-service";

export interface Profile {
  account: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  cover: string;
  products?: Thumbnail[];
  services?: Thumbnail[];
}

class AccountService {
  async get(account: string): Promise<Profile> {
    const response = await api.get(`/account/${encodeURIComponent(account)}`);

    return api.json<Profile>(response);
  }
}

export const accountService = new AccountService();
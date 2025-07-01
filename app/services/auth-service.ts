import {api} from "~/lib/api";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    await api.getCsrfToken();

    const response = await api.post('/login', credentials);

    return api.json<User>(response);
  }

  async register(data: RegisterData): Promise<User> {
    await api.getCsrfToken();

    const response = await api.post('/register', data);

    return api.json<User>(response);
  }

  async logout(): Promise<void> {
    const response = await api.post('/logout');

    if (!response.ok) {
      throw new Error('Erro ao fazer logout');
    }
  }

  async getUser(): Promise<User> {
    const response = await api.get('/user');

    return api.json<User>(response);
  }

  async refreshUser(): Promise<User> {
    const response = await api.get('/user');

    return api.json<User>(response);
  }
}

export const authService = new AuthService();
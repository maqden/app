class Api {
  private readonly baseURL: string;
  private readonly defaultHeaders: HeadersInit;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
    this.defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
  }

  private async request(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      credentials: 'include',
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      ...options,
    };

    return await fetch(url, config);
  }

  async get(endpoint: string, options?: RequestInit) {
    return this.request(endpoint, {method: 'GET', ...options});
  }

  async post(endpoint: string, data?: any, options?: RequestInit) {
    const body = data instanceof FormData ? data : JSON.stringify(data);
    const headers = data instanceof FormData ? {} : this.defaultHeaders;

    return this.request(endpoint, {
      method: 'POST',
      body: body,
      headers: {
        ...headers,
        ...options?.headers,
      },
      ...options,
    });
  }

  async put(endpoint: string, data?: any, options?: RequestInit) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  }

  async delete(endpoint: string, options?: RequestInit) {
    return this.request(endpoint, {method: 'DELETE', ...options});
  }

  async json<T = any>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await this.extractError(response);
      throw new Error(error);
    }

    return response.json();
  }

  private async extractError(response: Response): Promise<string> {
    try {
      const errorData = await response.json();

      if (errorData.errors) {
        const firstError = Object.values(errorData.errors)[0];
        return Array.isArray(firstError) ? firstError[0] : String(firstError);
      }

      return errorData.message || `Erro HTTP ${response.status}`;
    } catch {
      return `Erro HTTP ${response.status}`;
    }
  }

  async getCsrfToken(): Promise<void> {
    await fetch(`${this.baseURL}/sanctum/csrf-cookie`, {credentials: 'include'});
  }
}

export const api = new Api();
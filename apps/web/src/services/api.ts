import {
  CreateMessageDto,
  CreateQuoteDto,
  CreateJobApplicationDto,
  BlogPost,
  CreateBlogPostDto,
  PaginatedResponse,
  Category,
  FeedbackResponse
} from "../types/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export interface ApiErrorResponse {
  status: number;
  message: string;
  data?: Record<string, unknown>;
}

export type ApiRoutes = {
  "/feedback/messages": { body: CreateMessageDto; response: FeedbackResponse };
  "/feedback/quotes": { body: CreateQuoteDto; response: FeedbackResponse };
  "/feedback/job-applications": { body: CreateJobApplicationDto; response: FeedbackResponse };
  "/blog-posts": { body: CreateBlogPostDto; response: BlogPost };
  "/blog-posts/list": { body: never; response: PaginatedResponse<BlogPost> };
  "/blog-posts/detail": { body: never; response: BlogPost };
  "/blog-posts/categories": { body: never; response: Category[] };
};

class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    // Use relative URLs for Next.js proxy endpoints, absolute URLs for backend API
    const url = endpoint.startsWith('/api/')
      ? endpoint
      : `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})) as ApiErrorResponse;
      // Throw structured errors with proper typing
      const error = new Error(errorData.message || "API_ERROR") as Error & ApiErrorResponse;
      error.status = response.status;
      error.data = errorData.data;
      throw error;
    }

    if (response.status === 204) return {} as T;
    return response.json() as Promise<T>;
  }

  async get<K extends keyof ApiRoutes>(
    path: K,
    params?: Record<string, string | number>,
    options?: RequestInit
  ): Promise<ApiRoutes[K]["response"]> {
    const queryString = params
      ? "?" + new URLSearchParams(
        Object.entries(params).reduce<Record<string, string>>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
      ).toString()
      : "";
    return this.request<ApiRoutes[K]["response"]>(`${path}${queryString}`, {
      ...options,
      method: "GET",
    });
  }

  async post<K extends keyof ApiRoutes>(
    path: K,
    data: ApiRoutes[K]["body"],
    options?: RequestInit
  ): Promise<ApiRoutes[K]["response"]> {
    return this.request<ApiRoutes[K]["response"]>(path, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Add GET, PUT, DELETE with similar type safety...
}

export const api = new ApiClient();

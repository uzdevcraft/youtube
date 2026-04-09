export interface ApiError {
  code: number;
  message: string;
  errors?: Array<{
    message: string;
    domain: string;
    reason: string;
  }>;
}

export interface ApiErrorResponse {
  error: ApiError;
}

export type LoadingState = "idle" | "loading" | "success" | "error";

export interface PaginationState {
  nextPageToken?: string;
  prevPageToken?: string;
  totalResults: number;
  resultsPerPage: number;
}

export interface WithPagination<T> {
  items: T[];
  pagination: PaginationState;
}

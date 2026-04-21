export declare namespace IApi {
  export interface Response<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
  }

  export interface Request {
    page?: number;
    language?: string;
    region?: string;
  }
}

export declare namespace IEntity {
  export interface Meta {
    kind: string;
    etag: string;
    page_info: PageInfo;
  }

  export interface Params {
    page?: number;
    language?: string;
    region?: string;
  }

  export interface PageInfo {
    total_results: number;
    results_per_page: number;
  }
}

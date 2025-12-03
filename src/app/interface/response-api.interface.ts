export interface IResponseApi {
  total: number;
  total_pages: number;
  results: Result[];
}

export interface Result {
  urls: Urls;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

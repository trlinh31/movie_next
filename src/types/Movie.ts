export interface Movie {
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  seoOnPage: SEOOnPage;
  breadCrumb: BreadCrumb[];
  titlePage: string;
  items: Item[];
  params: Params;
  type_list: string;
  APP_DOMAIN_FRONTEND: string;
  APP_DOMAIN_CDN_IMAGE: string;
}

export interface BreadCrumb {
  name: string;
  slug?: string;
  isCurrent: boolean;
  position: number;
}

export interface Item {
  tmdb: Tmdb;
  imdb: Imdb;
  modified: Modified;
  _id: string;
  name: string;
  origin_name: string;
  type: ItemType;
  thumb_url: string;
  poster_url: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: Quality;
  lang: Lang;
  slug: string;
  year: number;
  category: Category[];
  country: Category[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Imdb {
  id: null | string;
}

export enum Lang {
  LồngTiếng = "Lồng Tiếng",
  Vietsub = "Vietsub",
}

export interface Modified {
  time: Date;
}

export enum Quality {
  HD = "HD",
}

export interface Tmdb {
  type: TmdbType;
  id: string;
  season: number | null;
  vote_average: number;
  vote_count: number;
}

export enum TmdbType {
  Movie = "movie",
  Tv = "tv",
}

export enum ItemType {
  Series = "series",
  Single = "single",
}

export interface Params {
  type_slug: string;
  filterCategory: string[];
  filterCountry: string[];
  filterYear: string;
  filterType: string;
  sortField: string;
  sortType: string;
  pagination: Pagination;
}

export interface Pagination {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
}

export interface SEOOnPage {
  og_type: string;
  titleHead: string;
  descriptionHead: string;
  og_image: string[];
  og_url: string;
}

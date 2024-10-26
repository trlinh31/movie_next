export interface Category {
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  items: Item[];
}

export interface Item {
  _id: string;
  name: string;
  slug: string;
}

import BaseApi from "@/api/BaseApi";
import { Category } from "./../types/Category";

class CategoryApi extends BaseApi {
  constructor() {
    super();
  }

  static getCategories = async (): Promise<Category | null> => {
    return await this.get("/the-loai");
  };
}

export default CategoryApi;

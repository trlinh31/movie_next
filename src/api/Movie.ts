import BaseApi from "@/api/BaseApi";
import { Movie } from "@/types/Movie";

class MovieApi extends BaseApi {
  constructor() {
    super();
  }

  static getNewUpdateMovies = async (page = 1, year = 2024): Promise<Movie | null> => {
    return await this.get(`/danh-sach/phim-moi-cap-nhat?sort_field=modified.time&page=${page}&year=${year}`);
  };

  static getNewMovies = async (page = 1, year = 2024, country: string = ""): Promise<Movie | null> => {
    return await this.get(`/danh-sach/phim-moi?sort_field=modified.time&page=${page}&year=${year}&country=${country}`);
  };

  static getUpcomingMovies = async (page = 1): Promise<Movie | null> => {
    return await this.get(`/danh-sach/phim-sap-chieu?sort_field=modified.time&page=${page}`);
  };
}

export default MovieApi;

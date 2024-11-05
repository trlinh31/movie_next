import BaseApi from "@/apiRequest/BaseApi";
import { Movie } from "@/types/Movie";

class MovieApi extends BaseApi {
  constructor() {
    super();
  }

  static async getMoviesByType(
    endpoint: string,
    options: { page?: number; year?: number; category?: string; country?: string } = {}
  ): Promise<Movie | null> {
    const params = {
      sort_field: "modified.time",
      page: options.page ?? 1,
      year: options.year ?? "",
      category: options.category ?? "",
      country: options.country ?? "",
    };

    const urlParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== "") {
        urlParams.append(key, String(value));
      }
    }

    return await this.get(`${endpoint}?${urlParams.toString()}`);
  }

  static async searchMovies(query: string): Promise<Movie | null> {
    return await this.get(`/tim-kiem?keyword=${query}`);
  }
}

export default MovieApi;

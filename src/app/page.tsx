import MovieApi from "@/api/Movie";
import MovieList from "@/components/movie-list";
import Slider from "@/components/slider";
import { MOVIE_ENDPOINTS } from "@/constants/endpoints";

export default async function Home() {
  const slideData = await MovieApi.getMoviesByType(MOVIE_ENDPOINTS.PHIM_MOI, { page: 1, year: 2024, country: "han-quoc" });
  const newKoreaMoviesData = await MovieApi.getMoviesByType(MOVIE_ENDPOINTS.PHIM_MOI, { page: 2, year: 2024, country: "han-quoc" });
  const newMoviesData = await MovieApi.getMoviesByType(MOVIE_ENDPOINTS.PHIM_MOI, { page: 2, year: 2024 });
  const actionMoviesData = await MovieApi.getMoviesByType(MOVIE_ENDPOINTS.PHIM_MOI, { page: 1, year: 2024, category: "hanh-dong" });
  const cartoonMoviesData = await MovieApi.getMoviesByType(MOVIE_ENDPOINTS.PHIM_HOAT_HINH, { page: 1, year: 2024 });
  const vietsubMoviesData = await MovieApi.getMoviesByType(MOVIE_ENDPOINTS.PHIM_VIETSUB, { page: 1, year: 2024 });
  const vietnameMoviesData = await MovieApi.getMoviesByType(MOVIE_ENDPOINTS.PHIM_VIETSUB, { page: 1, country: "viet-nam" });

  return (
    <>
      <Slider data={slideData} />
      <MovieList data={newKoreaMoviesData} />
      <MovieList data={newMoviesData} />
      <MovieList data={actionMoviesData} />
      <MovieList data={cartoonMoviesData} />
      <MovieList data={vietsubMoviesData} />
      <MovieList data={vietnameMoviesData} />
    </>
  );
}

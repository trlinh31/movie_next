import MovieApi from "@/api/Movie";
import MovieList from "@/components/movie-list";
import Slider from "@/components/slider";

export default async function Home() {
  const slideData = await MovieApi.getNewMovies(1, 2024, "han-quoc");

  return (
    <>
      <Slider data={slideData} />
      <MovieList title='Phim mới' data={[]} href='/phim-moi' />
      <MovieList title='Phim mới' data={[]} href='/phim-moi' />
      <MovieList title='Phim mới' data={[]} href='/phim-moi' />
    </>
  );
}

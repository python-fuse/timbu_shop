import HeroMovie from "./HeroMovie";
import SideMovieCard from "./SideMovieCard";

let movies;

const getPopularMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.ACCESS_TOKEN,
    },
  };

  try {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        movies = json.results;
      })
      .catch((err) => console.error("error:" + err));
  } catch (e) {
    console.log(e);
  }
};

getPopularMovies();

const PopularMovies = () => {
  return (
    <div className="flex my-5 gap-x-4 h-[80dvh]">
      <HeroMovie movie={movies} />
      <div className="flex flex-col justify-between">
        <p className="text-3xl font-bold">Popular</p>
        {movies?.slice(1, 4).map((movie) => (
          <SideMovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

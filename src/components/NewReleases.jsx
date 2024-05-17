import SideMovieCard from "./SideMovieCard";

let movies;

const getNewMovies = async () => {
  const url = "https://api.themoviedb.org/3/movie/latest?language=en-US&page=1";
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

getNewMovies();
console.log(movies);

const LatestMovies = () => {
  return (
    <section className="flex flex-col mt-4">
      <h2 className="font-bold text-3xl">Latest</h2>
      <div className="grid grid-cols-3">
        {movies?.map((movie) => (
          <SideMovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default LatestMovies;

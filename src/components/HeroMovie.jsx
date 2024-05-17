import React from "react";
import Rating from "./Rating";
import { formatDate } from "@/utils/formatDate";
import YouTube from "react-youtube";

const HeroMovie = ({ movie }) => {
  let trailer;

  fetch(
    `https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Extract trailer information from the response
      trailer = data?.results[61];
      console.log(trailer);
      // You can perform operations with the trailer information here
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return (
    // <div
    //   className={`w-3/4 p-4 h-[600px] rounded-2xl relative z-30 overflow-hidden border-2 border-green-400`}
    //   style={{
    //     backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="w-full h-full bg-black bg-opacity-20 -z-10 absolute top-0 left-0"></div>

    //   <h2 className="font-extrabold text-3xl z-50">{movie.title}</h2>

    //   <p className="font-bold text-gray-200">
    //     {formatDate(movie.release_date)}
    //   </p>

    //   <Rating vote_average={movie.vote_average} />

    //   <p className="text-sm w-3/4 mt-auto">{movie.overview}</p>
    // </div>
    <div className="w-3/4 rounded-2xl overflow-hidden">
      <YouTube
        opts={{
          width: "100%",
          height: "100%",
          playerVars: { autoplay: 1 },
        }}
        videoId=`mo`
      />
    </div>
  );
};

export default HeroMovie;

import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="p-2 flex flex-col gap-y-3">
      <Image
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={120}
        height={150}
      />
    </div>
  );
};

export default MovieCard;

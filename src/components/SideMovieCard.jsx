import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import Rating from "./Rating";
import { formatDate } from "@/utils/formatDate";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const SideMovieCard = ({ movie }) => {
  return (
    <div
      className={` flex gap-x-2 ${poppins.className} border-2 p-2 rounded-lg border-green-400`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="flex flex-col justify-evenly">
        <h2 className={`text-2xl font-bold`}>{movie.title}</h2>
        <p className="font-semibold text-sm text-gray-200">
          {formatDate(movie.release_date)}
        </p>
        <Rating vote_average={movie.vote_average} />
      </div>
    </div>
  );
};

export default SideMovieCard;

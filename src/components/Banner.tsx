import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import { Movie } from "../interface/movie";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);

    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncate = (str: string, num: number) => {
    return str.length > num ? str.slice(0, num - 1) + "..." : str;
  };

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1> {movie.title || movie.original_title}</h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">More Information</button>
        </div>
        <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;

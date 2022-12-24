import React, { useEffect, useState, useCallback } from "react";
import { Data } from "../App";
import axios from "../api/axios";
import { MovieRow } from "../interface/movie";
import "./Row.css";

const Row = ({ title, id, fetchUrl, isLargeRow = false }: Data) => {
  const [movies, setMovies] = useState<MovieRow[] | undefined>(undefined);

  const fetchMovieData = useCallback(async () => {
    const request = await axios.get(fetchUrl);
    if (request.data) {
      setMovies(request.data.results);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const clickArrow = (id: string, direction: "right" | "left") => {
    const elem = document.querySelector(`#${id}`);
    if (elem) {
      switch (direction) {
        case "left":
          elem.scrollLeft -= window.innerWidth - 80;
          break;
        case "right":
          elem.scrollLeft += window.innerWidth - 80;
          break;
      }
    }
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      {movies?.length !== 0 && (
        <div className="slider">
          <div
            className="slider__arrow arrow-left"
            onClick={() => clickArrow(id, "left")}
          >
            <span className="arrow">&lt;</span>
          </div>
          <div id={id} className="row__posters">
            {movies?.map((movie) => (
              <img
                alt={movie.name}
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__poster-large"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              />
            ))}
          </div>
          <div
            className="slider__arrow arrow-right"
            onClick={() => clickArrow(id, "right")}
          >
            <span className="arrow">&gt;</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Row;

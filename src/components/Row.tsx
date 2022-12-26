import React, { useEffect, useState, useCallback } from "react";
import axios from "../api/axios";
import { MovieDetails } from "../interface/movie";
import MovieModal from "./MovieModal";
import { Data } from "../pages/MainPage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Row.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Row = ({ title, id, fetchUrl, isLargeRow = false }: Data) => {
  const [movies, setMovies] = useState<MovieDetails[] | undefined>(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | undefined>(
    undefined
  );

  const fetchMovieData = useCallback(async () => {
    const request = await axios.get(fetchUrl);
    if (request.data) {
      setMovies(request.data.results);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  // const clickArrow = (id: string, direction: "right" | "left") => {
  //   const elem = document.querySelector(`#${id}`);
  //   if (elem) {
  //     switch (direction) {
  //       case "left":
  //         elem.scrollLeft -= window.innerWidth - 80;
  //         break;
  //       case "right":
  //         elem.scrollLeft += window.innerWidth - 80;
  //         break;
  //     }
  //   }
  // };

  const clickMovie = (movie: MovieDetails) => {
    setOpenModal(true);
    setSelectedMovie(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      {movies?.length !== 0 && (
        <div className="slider">
          {/* <div
            className="slider__arrow arrow-left"
            onClick={() => clickArrow(id, "left")}
          >
            <span className="arrow">&lt;</span>
          </div> */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            loop
            breakpoints={{
              1378: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
              998: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              625: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              0: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            <div id={id} className="row__posters">
              {movies?.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <img
                    alt={movie.name}
                    className={`row__poster ${
                      isLargeRow && "row__poster-large"
                    }`}
                    src={`https://image.tmdb.org/t/p/original/${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    onClick={() => clickMovie(movie)}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          {/* <div
            className="slider__arrow arrow-right"
            onClick={() => clickArrow(id, "right")}
          >
            <span className="arrow">&gt;</span>
          </div> */}
        </div>
      )}
      {openModal && (
        <MovieModal movie={selectedMovie} setOpenModal={setOpenModal} />
      )}
    </section>
  );
};

export default Row;

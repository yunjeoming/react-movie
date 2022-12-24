import React, { useEffect, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { MovieDetails } from "../../interface/movie";
import "./MovieModal.css";

type Props = {
  movie: MovieDetails | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieModal = ({ movie, setOpenModal }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {
    setOpenModal(false);
  });

  useEffect(() => {
    if (!movie) return;
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [movie]);

  if (!movie) return null;
  return (
    <div className="modal-background">
      <div className="modal" ref={ref}>
        <button
          className="modal__close-btn"
          onClick={() => setOpenModal(false)}
        >
          X
        </button>
        <img
          alt="modal__poster-img"
          className="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        />
        <div className="modal__content">
          <p className="modal__details">
            <span className="modal__user-percent">100% for you</span>
            <span className="modal__release-date">
              {movie.release_date || movie.first_air_date}
            </span>
          </p>

          <h2 className="modal__title">{movie.title || movie.name}</h2>
          <p className="modal__overview">평점: {movie.vote_average}</p>
          <p className="modal__overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

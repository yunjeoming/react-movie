import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MovieDetails } from "../interface/movie";

const DetailPage = () => {
  const { movieId } = useParams();
  const { state } = useLocation();
  const [movie, setMovie] = useState<MovieDetails>(state);
  console.log(movieId, state);
  return (
    <StyledDetail>
      <img
        className="modal__poster-img"
        alt="movie detail"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
    </StyledDetail>
  );
};

export default DetailPage;

const StyledDetail = styled.section`
  background-color: #000000;
`;

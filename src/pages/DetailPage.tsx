import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const DetailPage = () => {
  const { state } = useLocation();
  return (
    <StyledDetail>
      <img
        className="modal__poster-img"
        alt="movie detail"
        src={`https://image.tmdb.org/t/p/original${state.backdrop_path}`}
      />
    </StyledDetail>
  );
};

export default DetailPage;

const StyledDetail = styled.section`
  background-color: #000000;
`;

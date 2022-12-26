import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import requests from "../api/request";
import { MovieDetails } from "../interface/movie";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState<MovieDetails | undefined>(undefined);
  const [isClicked, setIsClicked] = useState({
    play: false,
    info: false,
  });

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

  if (!movie) return <></>;
  if (isClicked.play)
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </HomeContainer>
      </Container>
    );

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
          <button
            className="banner__button play"
            onClick={() => setIsClicked((prev) => ({ ...prev, play: true }))}
            disabled={movie.videos.results.length === 0}
          >
            Play
          </button>
          <button
            className="banner__button info"
            onClick={() => setIsClicked((prev) => ({ ...prev, info: true }))}
          >
            More Information
          </button>
        </div>
        <h1 className="banner__description">
          {isClicked.info ? movie.overview : truncate(movie.overview, 100)}
        </h1>
        {/* <h1 className="banner__description">{truncate(movie.overview, 100)}</h1> */}
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 90vh;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieDetails } from "../interface/movie";
import axios from "../api/axios";
import "./SearchPage.css";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [searchResults, setSearchResult] = useState<MovieDetails[]>([]);
  const navigate = useNavigate();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const value = query.get("q") || "";
  const searchTerm = useDebounce(value, 300);

  const fetchSearchMovie = async (searchTerm: string) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResult(request.data.results);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const clickMovie = (movie: MovieDetails) => {
    navigate(`/detail/${movie.id}`, {
      state: movie,
    });
  };

  return (
    <section className="search__container">
      {searchResults.length > 0 ? (
        searchResults
          .filter(
            (movie) => movie.backdrop_path && movie.media_type !== "person"
          )
          .map((movie) => {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div key={movie.id} className="movie">
                <img
                  alt="movie__image"
                  src={movieImageUrl}
                  className="movie__poster"
                  onClick={() => clickMovie(movie)}
                />
              </div>
            );
          })
      ) : (
        <div className="search__no-results">
          "{searchTerm}"에 해당하는 검색 결과가 없습니다
        </div>
      )}
    </section>
  );
  // return searchResults.length > 0 ? (
  //   <section className="search__container">
  //     {searchResults.map((movie) => {
  //       if (movie.backdrop_path !== null && movie.media_type !== "person") {
  //         const movieImageUrl =
  //           "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
  //         return (
  //           <div className="movie">
  //             <img
  //               alt="movie__image"
  //               src={movieImageUrl}
  //               className="movie__poster"
  //             />
  //           </div>
  //         );
  //       } else {
  //         return <div>앗 !</div>;
  //       }
  //     })}
  //   </section>
  // ) : (
  //   <section className="no-results">
  //     <div className="no-results__text">
  //       "{searchTerm}"에 해당하는 검색 결과가 없습니다
  //     </div>
  //   </section>
  // );
};

export default SearchPage;

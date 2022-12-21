export interface Movie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type GenreName = "액션" | "스릴러" | "범죄";

interface Genre {
  id: string;
  name: GenreName;
}

interface ProductionCountry {
  name: string;
  [iso: number]: string;
}

interface SpokenLanguage {
  [iso: number]: string;
  name: string;
  english_name: string;
}

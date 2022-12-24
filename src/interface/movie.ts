interface MovieCommons {
  id: number;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  original_language: string;
  overview: string;
}

export interface MovieDetails extends MovieCommons {
  adult: boolean;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  original_title: string;
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: Video[];
  };
  genre_ids: number[];
  first_air_date: string;
  name: string;
  origin_countres: string[];
  original_name: string;
  popularity: number;
  poster_path: string;
  media_type: string;
}

export interface MovieRow extends MovieCommons {
  genre_ids: number[];
  first_air_date: string;
  name: string;
  origin_countres: string[];
  original_name: string;
  popularity: number;
  poster_path: string;
}

type GenreName = "액션" | "스릴러" | "범죄";

interface Genre {
  id: string;
  name: GenreName;
}

interface ProductionCountry {
  name: string;
  [iso: string]: string;
}

interface SpokenLanguage {
  [iso: string]: string;
  name: string;
  english_name: string;
}

interface Video {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

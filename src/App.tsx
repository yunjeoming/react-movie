import React from "react";
import requests from "./api/request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";

export type Data = {
  title: string;
  id: string;
  fetchUrl: string;
  isLargeRow: boolean;
};

const rowDatas: Data[] = [
  {
    title: "NETFLIX ORIGINALS",
    id: "NO",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "Trending Now",
    id: "TN",
    fetchUrl: requests.fetchTrending,
    isLargeRow: false,
  },
  {
    title: "Top Rated",
    id: "TR",
    fetchUrl: requests.fetchTopRated,
    isLargeRow: false,
  },
  {
    title: "Action Movies",
    id: "AM",
    fetchUrl: requests.fetchActionMovies,
    isLargeRow: false,
  },
  {
    title: "Comedy Movies",
    id: "CM",
    fetchUrl: requests.fetchComedyMovies,
    isLargeRow: false,
  },
  {
    title: "Horror Movies",
    id: "HM",
    fetchUrl: requests.fetchHorrorMovies,
    isLargeRow: false,
  },
];

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {rowDatas.map((data) => (
        <Row
          key={data.id}
          title={data.title}
          id={data.id}
          fetchUrl={data.fetchUrl}
          isLargeRow={data.isLargeRow}
        />
      ))}
    </div>
  );
}

export default App;

import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { DetailPage, MainPage, SearchPage } from "./pages";


const Layout = () => {
  return (
    <LayoutStyle>
      <Nav />
      <Outlet />
      <Footer />
    </LayoutStyle>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="detail/:movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const LayoutStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Request";
const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId="1" title="Up Coming" fetchURL={request.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchURL={request.requestPopular} />
      <Row rowId="3" title="Top Rated" fetchURL={request.requestTopRated} />
      <Row rowId="4" title="Trending" fetchURL={request.requestTrending} />
      <Row rowId="5" title="Television Shows" fetchURL={request.requestTv} />
      
    </div>
  );
};

export default Home;

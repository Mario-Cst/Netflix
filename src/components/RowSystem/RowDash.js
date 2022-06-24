import React from "react";
import Row from "./Row";
import requests from "../../Requests";

const RowDash = () => {
  return (
    <div>
      <h1>DashRow</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Ahora" fetchUrl={requests.fetchTrending} />
      <Row title="Mejor Valorado" fetchUrl={requests.fetchTopRated} />
      <Row title="Accion" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Románticas" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentales" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default RowDash;

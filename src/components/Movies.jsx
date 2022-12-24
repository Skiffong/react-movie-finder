import React from "react";
import { Movie } from "./Movie";

export const Movies = (props) => {
  const { movies = [], showInfo, setActive } = props;
  return (
    <div className="cards">
      {movies.length ? (
        movies.map((item) => {
          return (
            <Movie
              key={item.imdbID}
              showInfo={showInfo}
              setActive={setActive}
              {...item}
            />
          );
        })
      ) : (
        <h2 className="search-error center-align">
          Sorry, can't find any movies
        </h2>
      )}
    </div>
  );
};

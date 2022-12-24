import React from "react";

export const Popout = (props) => {
  const {
    Title,
    Poster,
    Year,
    Rated,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
  } = props.movie;

  const { active, setActive } = props;

  return (
    <div
      className={active ? "row popout active" : "row popout"}
      onClick={() => {
        setActive();
      }}
    >
      <div
        className={
          active
            ? "card blue-grey darken-1 popout-card active"
            : "card blue-grey darken-1 popout-card "
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="main-title card-title center-align">{Title}</div>
        <div className="main-info">
          <div className="card-image waves-block waves-light">
            <img className="activator popout-img" src={Poster} alt={Title} />
          </div>
          <div className="card-content">
            <p>
              Year: <span>{Year}</span>
            </p>
            <p>
              Rated: <span>{Rated}</span>
            </p>
            <p>
              Runtime: <span>{Runtime}</span>
            </p>
            <p>
              Genre: <span>{Genre}</span>
            </p>
            <p>
              Director: <span>{Director}</span>
            </p>
            <p>
              Writer: <span>{Writer}</span>
            </p>
            <p>
              Actors: <span>{Actors}</span>
            </p>
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{Plot}</p>
        </div>
      </div>
    </div>
  );
};

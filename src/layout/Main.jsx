import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Popout } from "../components/Popout";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      movies: [],
      movie: {},
      popoutActive: false,
      body: false,
    };
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ movies: result.Search, loaded: true });
      });
  }

  searchMovie = (str = "avengers", type) => {
    this.setState({ loaded: false });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({ movies: result.Search, loaded: true });
      });
  };

  showInfo = (id) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ movie: result });
      });
  };

  popoutSetActive = () => {
    this.setState({
      popoutActive: this.state.popoutActive ? false : true,
      body: this.state.body ? false : true,
    });
    let body = document.querySelector("body");
    if (!this.state.body) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }
  };

  render() {
    const { movies, loaded, movie, popoutActive } = this.state;
    return (
      <div className="main">
        <div className="container">
          {movie ? (
            <Popout
              movie={movie}
              active={popoutActive}
              setActive={this.popoutSetActive}
            />
          ) : (
            ""
          )}
          <Search searchMovie={this.searchMovie} />
          {loaded ? (
            <Movies
              movies={movies}
              showInfo={this.showInfo}
              setActive={this.popoutSetActive}
            />
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    );
  }
}

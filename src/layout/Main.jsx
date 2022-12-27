import React, { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Popout } from "../components/Popout";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [loaded, setLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [popoutAtive, setPopoutActive] = useState(false);
  const [body, setBody] = useState(false);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.Search);
        setLoaded(true);
      });
  }, []);

  const searchMovie = (str = "avengers", type) => {
    setLoaded(false);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.Search);
        setLoaded(true);
      });
  };

  const showInfo = (id) => {
    setMovie({});
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((result) => {
        setMovie(result);
      });
  };

  const popoutSetActive = () => {
    popoutAtive ? setPopoutActive(false) : setPopoutActive(true);
    body ? setBody(false) : setBody(true);
    let bodyEl = document.querySelector("body");
    if (!body) {
      bodyEl.classList.add("lock");
    } else {
      bodyEl.classList.remove("lock");
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="main">
      <div className="container">
        {movie ? (
          <Popout
            movie={movie}
            active={popoutAtive}
            setActive={popoutSetActive}
          />
        ) : (
          <Preloader />
        )}
        <Search searchMovie={searchMovie} />
        {loaded ? (
          <Movies
            movies={movies}
            showInfo={showInfo}
            setActive={popoutSetActive}
          />
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default Main;

// export default class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//       movies: [],
//       movie: {},
//       popoutActive: false,
//       body: false,
//     };
//   }

//   componentDidMount() {
//     fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({ movies: result.Search, loaded: true });
//       });
//   }

//   searchMovie = (str = "avengers", type) => {
//     this.setState({ loaded: false });
//     fetch(
//       `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
//         type !== "all" ? `&type=${type}` : ""
//       }`
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({ movies: result.Search, loaded: true });
//       });
//   };

//   showInfo = (id) => {
//     fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({ movie: result });
//       });
//   };

//   popoutSetActive = () => {
//     this.setState({
//       popoutActive: this.state.popoutActive ? false : true,
//       body: this.state.body ? false : true,
//     });
//     let body = document.querySelector("body");
//     if (!this.state.body) {
//       body.classList.add("lock");
//     } else {
//       body.classList.remove("lock");
//     }
//   };

//   render() {
//     const { movies, loaded, movie, popoutActive } = this.state;
//     return (
//       <div className="main">
//         <div className="container">
//           {movie ? (
//             <Popout
//               movie={movie}
//               active={popoutActive}
//               setActive={this.popoutSetActive}
//             />
//           ) : (
//             ""
//           )}
//           <Search searchMovie={this.searchMovie} />
//           {loaded ? (
//             <Movies
//               movies={movies}
//               showInfo={this.showInfo}
//               setActive={this.popoutSetActive}
//             />
//           ) : (
//             <Preloader />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

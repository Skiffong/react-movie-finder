import React, { useEffect, useState } from "react";

export const Movie = (props) => {
  const [id, setId] = useState("");
  const [click, setClick] = useState(false);

  const { Title, Year, imdbID, Type, Poster, showInfo, setActive } = props;

  const showPopout = () => {
    setClick(true);
    setId(imdbID);
    setActive();
  };

  useEffect(() => {
    if (click) {
      showInfo(id);
      setClick(false);
    }
  }, [click]);

  return (
    <div className="card blue-grey darken-1">
      <div className="card-image waves-block waves-light">
        <img className="activator" src={Poster} alt={Title} />
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{Title}</span>
        <span className=" card-type">{Year}</span>
        <span className=" card-year right">{Type}</span>
        <p>
          <button
            className="right waves-effect waves-light btn-small"
            id={imdbID}
            onClick={showPopout}
          >
            More information
          </button>
        </p>
      </div>
    </div>
  );
};

// import React, { Component } from "react";

// export class Movie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: "",
//     };
//   }

//   showPopout = () => {
//     this.setState(
//       () => ({ id: this.props.imdbID }),
//       () => {
//         this.props.showInfo(this.state.id);
//       }
//     );
//     this.props.setActive();
//   };

//   render() {
//     const { Title, Year, imdbID, Type, Poster } = this.props;
//     return (
//       <div className="card blue-grey darken-1">
//         <div className="card-image waves-block waves-light">
//           <img className="activator" src={Poster} alt={Title} />
//         </div>
//         <div className="card-content">
//           <span className="card-title grey-text text-darken-4">{Title}</span>
//           <span className=" card-type">{Year}</span>
//           <span className=" card-year right">{Type}</span>
//           <p>
//             <button
//               className="right waves-effect waves-light btn-small"
//               id={imdbID}
//               onClick={this.showPopout}
//             >
//               More information
//             </button>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

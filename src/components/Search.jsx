import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "" || "avengers",
    type: "all",
  };

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  keyHandler = (e) => {
    if (e.key === "Enter" || e.target.id === "search-btn") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  radioHandler = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <input
              id="search"
              type="search"
              placeholder="Search a movie"
              autoComplete="off"
              onChange={this.searchHandler}
              onKeyDown={this.keyHandler}
            />
            <button
              id="search-btn"
              className="waves-effect waves-light btn-small search-btn"
              onClick={this.keyHandler}
            >
              Search
            </button>
          </div>
          <label className="radioBtn">
            <input
              className="with-gap"
              name="radio"
              type="radio"
              data-type="all"
              onChange={this.radioHandler}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label className="radioBtn">
            <input
              className="with-gap"
              name="radio"
              type="radio"
              data-type="movie"
              onChange={this.radioHandler}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label className="radioBtn">
            <input
              className="with-gap"
              name="radio"
              type="radio"
              data-type="series"
              onChange={this.radioHandler}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </form>
      </div>
    );
  }
}

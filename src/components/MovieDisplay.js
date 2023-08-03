//define a function that is our component
// we can also destructure your props directly from the parameter list
function MovieDisplay(movie) {
  //function to return loaded JSX
  const loaded = () => {
    //the component must return some JSX
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };
  //function to return loading JSX
  const loading = () =>{
    return <h1>No movie to display</h1>
  }

  //ternary operator will determine which functions JSX we will return
  return movie ? loaded():loading()
}

export default MovieDisplay;

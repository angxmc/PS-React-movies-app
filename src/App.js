import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const apiKey = "c03094a2";

  const [movie, setMovie] = useState(null);

  //>> function to getMovies
  const getMovie = async (searchTerm) => {
    try {
      //make fetch request and store response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      //parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  //
  /*  
  = useEffect: run on first render
    - in the useEffect syntax, the first argument is a function, that function will run once when the component first loads. The second component is an array. 
    - on each render of the component the items in teh array are compared to their value on the previous render, and if they are different value, the function will run again. 
    - this gives us a logic in component that doesn't run on every render, but only when changes happen
*/
  useEffect(() => {
    getMovie("Clueless");
  }, []);
  // = USE OUR COMPONENTS IN APPs RETURNED JSX
  // we pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;

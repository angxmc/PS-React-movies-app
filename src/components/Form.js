import { useState, useEffect } from "react";

//define a function for the component
export default function Form(props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (e) => {
    //use the event (e) object to detect key and value to update
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    //prevent page from refreshing on form submission
    e.preventDefault();
    //pass the search term to moviesearch prop, which is app's getMovie function
    props.moviesearch(formData.searchterm);
  };

  //the components must return some JSX
  return (
    <form>
      <input
        type="text"
        name="searchterm"
        onChange={handleChange}
        value={formData.searchterm}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

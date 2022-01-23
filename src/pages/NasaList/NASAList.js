import React, { useState } from "react";
import axios from "axios";
import NasaData from "../../components/NasaData/NasaData";
import "./NasaList.css";

const NASAList = () => {
  // functional components are considered stateless
  // class components are considered stateful

  // Write your state towards the very top of your component
  // 1) import useState at the top of your code
  // 2) First argument = the name of your state
  // 3) Second arg = your method to update your state
  // const [state, setState] = useState(initialState)
  // const [like, setLike] = useState("unliked");
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // In functional components, we no longer have to use the keyword 'this'

  // const toggle = () => {
  //   console.log("toggling");
  //   // Ternary
  //   like === "unliked" ? setLike("liked") : setLike("unliked");

  // reg if/else
  //  if(data === 'unliked') {
  //    setData('liked')
  //  } else {
  //    setData('unliked')
  //  }
  // };

  const handleChange = (e) => {
    console.log("handling change", e.target.value);
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // Prevent default submit function of refreshing page
    e.preventDefault();
    console.log("HandleSubmit:");
    // GET REQUEST
    // Any AJAX calls/HTTP REQUEST using axios/fetch will return a Promise => response
    axios.get(`https://images-api.nasa.gov/search?q=${userInput}`)
      .then((res) => {
        setData(res.data.collection.items);
        // setLoading(false);
      })

      .catch((err) => console.error(err));
  };
  return (
    <div className="container d-flex  flex-column ">
      <h1 className='justify-content-center d-flex'>NASAgram</h1>
      <h3 className='justify-content-center d-flex'>Discover all of the images and data from NASA!</h3>
      {/* {console.log("state", data)} */}
      {/* CONTROLLED FORM - meaning handle our change via state */}
      <form className='justify-content-center d-flex mb-2'onSubmit={handleSubmit}>
        <label htmlFor="userInput">
          <span>Search:</span>
        </label>
        <input
          type="text"
          id="userInput"
          onChange={handleChange}
          value={userInput}
        />

        <input type="submit" value="submit" />
      </form>

      {/* { <button onClick={toggle} className="likeButton">{like}</button> */}

      <div id="nasa-container">
        {data.map((item) => {
          return (
            // <div key={item.data[0].nasa_id}>Hello</div>
            <NasaData key={item.data[0].nasa_id} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default NASAList;

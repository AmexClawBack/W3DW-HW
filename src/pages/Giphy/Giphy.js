import axios from "axios";
import React, { useState, useEffect } from "react";

const Giphy = () => {
  const [data, setData] = useState("");

  // const [toggle, setToggle] = useState(true)
  // try/catch and async/await
  // try/catch - tells our code to run the block of code and not break our application

  const handleSubmit = async () => {
    try {
      // AJAX call
      // async/await is syntactical sugar for our thennables
      // we need the keyword async in front of our function
      // we create a variable that will hold our response
      // await can only be used inside an async function in regular js
      // await replaces our then()
      const response = await axios
        .get(
          "https://api.giphy.com/v1/gifs/random?api_key=FKaaTYX9cjWW0QgtHWYDfe5ghOuPJiDW&tag=&rating=g"
        )
        setData(response.data.data.images.original.url)
    }  catch (error) {
        console.error(error)
    } //finally{

    // }
  };

  // using thennables
  // axios
  // .get('https://api.giphy.com/v1/gifs/random?api_key=FKaaTYX9cjWW0QgtHWYDfe5ghOuPJiDW&tag=&rating=g'
  // )
  // .then ((res) =>
  //     setData(res.data.data.images.original.url)

  // )
  // .catch((err) => console.error(err))}

  //     // Change State of Toggle
  //     //  setToggle(!toggle)
  // }

  // useEffect is a React hook we have to import
  // It takes in two arguments
  // first argument is the function, second is our dependacy array
  useEffect(() => {
    console.log("We mounted");

    handleSubmit();
    // An empty dependacy array allows us to call our useEffect once only
    // Any dependancy you pass inside our dependency array will tell our component to listen for changes in those dpenedencies
  }, []);

  return (
    <div>
      <div>
        <h1>GIPHY</h1>
        {/* {toggle ? <img src={data} alt="" />: <img src={data} alt="" />} */}
        <button onClick={handleSubmit}>click</button>
        {data && <img src={data} alt="random" />}
      </div>
    </div>
  );
};

export default Giphy;

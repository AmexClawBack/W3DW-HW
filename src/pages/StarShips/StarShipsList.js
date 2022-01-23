import React, { useState, useEffect } from "react";
import StarShipData from "../../components/StarShipData/StarShipData";
import axios from "axios";

const Starships = () => {
  const [shipList, setShipList] = useState([]);


  const fetchData = async () => {
    try {
      const res = await Promise.all([
        axios.get("https://swapi.dev/api/starships/?format=json"),
        axios.get("https://swapi.dev/api/starships/?page=2&format=json"),
        axios.get("https://swapi.dev/api/starships/?page=3&format=json"),
        axios.get("https://swapi.dev/api/starships/?page=4&format=json")
      ]);
      const data = res.map((res) => res.data.results);
      setShipList(data.flat());
      console.log(data)
      
    } catch {
      throw Error('Promise failed')
    }
    // const pageOneAPI = "https://swapi.dev/api/starships/?format=json";
    // const pageTwoAPI = "https://swapi.dev/api/starships/?page=2&format=json";
    // const pageThreeAPI = "https://swapi.dev/api/starships/?page=3&format=json";
    // const pageFourAPI = "https://swapi.dev/api/starships/?page=4&format=json";
    
    // const getPageOne = axios.get(pageOneAPI);
    // const getPageTwo = axios.get(pageTwoAPI);
    // const getPageThree = axios.get(pageThreeAPI);
    // const getPageFour = axios.get(pageFourAPI);
    // axios.all([getPageOne, getPageTwo, getPageThree, getPageFour]).then(
      //   axios.spread((...allData) => {
    //     const pageOne = allData[0].data.results;
    //     const pageTwo = allData[1].data.results;
    //     const pageThree = allData[2].data.results;
    //     const pageFour = allData[3].data.results;
    
    //     //   console.log(pageOne)
    //     //   console.log(pageTwo)
    //     //   console.log(pageThree)
    //     //   console.log(pageFour)
    
    //     setPageOneList(pageOne);
    //     setPageTwoList(pageTwo);
    //     setPageThreeList(pageThree);
    //     setPageFourList(pageFour);
    //   })
    // );
  };
  
  useEffect(() => {
    console.log("Mounted on page load. Here is your data:");
    fetchData();
  }, []);
  
  // Get Current Ship Data
  //   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="d-flex flex-wrap d-flex justify-content-center ">
      {shipList.map((ship) => {
        // console.log(ship, index)
        return <StarShipData key={ship.name} ship={ship} />;
      })}
      
    </div>
  );
};

export default Starships;

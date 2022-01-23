import React, { useState, useEffect } from "react";
import StarShipCard from "../../../components/StarShipData/StarShipCard";
import Pagination from "../../../components/Pagination";
import axios from "axios";

const Starships = () => {
  const [ships, setShipList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [shipsPerPage] = useState(10);

  useEffect(() => {
    console.log("Mounted on page load. Here is your data:");
    const fetchShips = async () => {
      try {
        setLoading(true)
        const res = await Promise.all([
          axios.get("https://swapi.dev/api/starships/?format=json"),
          axios.get("https://swapi.dev/api/starships/?page=2&format=json"),
          axios.get("https://swapi.dev/api/starships/?page=3&format=json"),
          axios.get("https://swapi.dev/api/starships/?page=4&format=json"),
        ]);
        const data = res.map((res) => res.data.results);
        setShipList(data.flat());
        setLoading(false)
        console.log(data);
      } catch {
        throw Error("Promise failed");
      }
    };
    fetchShips();
  }, []);

  // Get Current Ship Data
    const indexOfLastShip = currentPage * shipsPerPage;
    const indexOfFirstShip = indexOfLastShip - shipsPerPage;
    const currentShips = ships.slice(indexOfFirstShip, indexOfLastShip);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="d-flex flex-wrap d-flex justify-content-center ">
      {currentShips.map((ship) => {
        // console.log(ship, index)
        return <StarShipCard key={ship.name} loading={loading} ship={ship} />;
                
      })}
      <Pagination shipsPerPage={shipsPerPage} totalShips={ships.length} paginate={paginate}/>
    </div>
  );
};

export default Starships;

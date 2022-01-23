import React from "react";

const Starshipdata = ({ ship, loading }) => {
  
  if(loading) {
    console.log('loading')
    return <h2>loading...</h2>
  }

 return (
    <div
      className="card text-white bg-dark  mt-2 mb-2 d-flex p-2 m-2   border border-secondary border-3"
      style={{ width: "18rem" }}
    >
      <div
        className="card-body overflow-auto d-flex flex-column justify-content-between   "
        style={{ height: "18rem" }}
      >
        <h5 className="card-title">Name: {ship.name}</h5>
        <p>Model: {ship.model}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
      
        <a href="d" className="btn btn-primary">
          Description
        </a>
      </div>
    </div>
 )
};

export default Starshipdata;

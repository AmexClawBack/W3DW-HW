import React from 'react';

const Starshipdata = (props) => {
  // console.log(props.ship)
    return (
      
        <div  >
        {/* <div className="d-flex flex-row"> */}
        <div className="card text-white bg-dark mb-2 mt-2 " style={{ width: "18rem" }}>
         {/* <img
          src='#'
          className="card-img-top"
          alt="..."
        />  */}
        <div className="card-body overflow-auto" style={{ height: "18rem" }} >
          <h5 className="card-title">Name: {props.ship.name}</h5>
          <p>Model: {props.ship.model}</p>
          <p>Manufacturer: {props.ship.manufacturer}</p>
          <p className="card-text">{}</p>
          <a href="d" className="btn btn-primary">
            Description
          </a>
        </div>
      </div>
      </div>
      
      // </div>
    );
}

export default Starshipdata;

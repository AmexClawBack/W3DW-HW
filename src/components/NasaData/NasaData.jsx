import React from "react";
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext'

// import "./NasaData.css";

const NasaData = (props) => {
  // const [active, setActive] = useState(false);
  // In className components, we access props using this.props
  // In hooks, we dont use this, we just access it directly
  // We pass props in the parameter inside of this component
  // so we can have access to the props object

  // console.log("we are inside NasaData", user);
  const user = useContext(UserContext)
  console.log('We are inside NASAData our user is', user)

  return (
    // <div classNameName='contentContainer'>
    /* <div classNameName="nasaData" >
      <h3>Title: {props.item.data[0].title}</h3>
      <div classNameName="nasa-img">{props.item.links && <img src={props.item.links[0].href } alt=''/>}</div>
      <p>Description: {props.item.data[0].description}</p>
      <p>Location: {props.item.data[0].location}</p>
      <p>Created: {props.item.data[0].date_created}</p>
      <div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
    </div>
    </div> */

    <div className="card text-white bg-dark mb-3" style={{ width: "18rem" }}>
      <img
        src={props.item.links?.[0].href}
        className="card-img-top mb-2"
        alt="..."
      />
      <div className="card-body overflow-auto" style={{ height: "18rem" }}>
        <h5 className="card-title">{props.item.data[0].title}</h5>
        <p>Location: {props.item.data[0].location}</p>
        <p>Created: {props.item.data[0].date_created}</p>
        <p className="card-text">{props.item.data[0].description}</p>
        <a href="d" className="btn btn-primary">
          Description
        </a>
      </div>
    </div>
    //  </div>
  );
};

export default NasaData;

// <div key={desc.data[0].nasa_id}>
//      <h3>{desc.data[0].title}</h3>
//       <p>Description: {desc.data[0].description}</p>
//      <p>Location: {desc.data[0].location}</p>
//      <p>Created: {desc.data[0].date_created}</p>
//      </div>

import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
// import './About.css'

const About = () => {
    const user = useContext(UserContext)

    console.log('About', user)

    user.setUser ('Evan')
    return (
        <div>
            <p>
          This is about page
            </p>
          {
            user.user === 'David'
            ? 'Hello David'
            : 'Hello Evan'
          }
  
        </div>
    );
}

export default About;



/*  BOOTSTRAP FORM  */
/* <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */
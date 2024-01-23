import React from "react";
import tiffin from '../src/img/tiffin.png';
const Main = () => {
  return (
    <div className="main-con">
      <div>
        <h1 className="subs">Subscribe Now</h1>
        <h1 className="news">to Our Newssletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        </p>
        <input  className="name" name="myinput" type="text" defaultValue="Name"/><br/>
        <input className="email" name="myinput" type="email" defaultValue="Email"/><br/>
        <button>Send</button>
      </div>
      <div>
      <img className='Img' src={tiffin} alt="Image" />
      </div>
    </div>
  );
};

export default Main;

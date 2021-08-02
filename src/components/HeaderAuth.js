import React from "react";
import {
  Link,
  useHistory
} from "react-router-dom";

function Header(props) {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        <Link to="/">
          <span className="ml-3 text-2xl text-white">{props.title}</span>
          </Link>
        <nav className="md:ml-auto lg:mr-8  sm:my-2 flex flex-wrap items-center text-base space-around">
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <Link to="/app">Dashboard</Link>
          </span>
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <Link to="#play">Play</Link>
          </span>
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <Link to="#rankings">Rankings</Link>
          </span>
        </nav>
      </div>
    </header>



  )


}

export default Header
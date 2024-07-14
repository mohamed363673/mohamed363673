import React, { useEffect } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';







const Navbar = () => {
  window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".navBar");
    navbar.classList.toggle("Active", window.scrollY > 10);
  })
  return (
    <>
      <nav className="navBar sm:shadow-sm ">
        <div className=" lg:px-32  sm:px-6 w-full h-full flex justify-between items-center">
          <div className="logo"><Link to="/">logo</Link></div>
          <ul className="all items-center sm:hidden lg:flex">
            <li className="navI"><NavLink to={"/"} className="navL">Home</NavLink></li>
            <li className="navI"><NavLink to={"/Table"} className="navL">Table</NavLink></li>
            <li className="navI"><NavLink to={'/chart'} className="navL">Chart</NavLink></li>
          </ul>
          <button  onClick={(e) => {
            let bars = document.getElementById("bars");
            let all2 = document.querySelector(".all2")
            bars.classList.toggle("fa-xmark")
            all2.classList.toggle("all2A")
          }} className='w-12 h-10 sm:flex lg:hidden bars justify-center items-center lg:bg-none rounded-sm text-2xl cursor-pointer active:scale-90 active:bg-slate-900 bg-slate-950 shadow-lg text-white'><i id='bars' className='fas fa-bars'></i></button>
        </div>
        <ul className="all2 sm:flex items-center lg:hidden w-full transition-all 1s  overflow-hidden bg-slate-950 px-6">
          <li className="navI"><NavLink to={"/"} className="navL">Home</NavLink></li>
          <li className="navI"><NavLink to={"/Table"} className="navL">Table</NavLink></li>
          <li className="navI"><NavLink to={'/chart'} className="navL">Chart</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

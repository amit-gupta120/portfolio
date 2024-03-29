import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [Nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-gray-500 fixed px-4 pt-2 shadow-2xl">
      <div>
        <h1 className="text-5xl font-signature ml-2">Amit Gupta</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-bold text-white hover:text-cyan-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
          >
           <Link to={link} smooth duration={500}> {link} </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!Nav)}
        className="cursor-pointer py-4 z-10 text-gray-500 md:hidden"
      >
        {Nav ? <FaTimes size={30} /> : <FaBars size={40} />}
      </div>

      {Nav && (
        <ul
          className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6">
             <Link onClick={()=>setNav(!Nav) }  to={link} smooth duration={500}> {link} </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

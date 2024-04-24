import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"> 
          <p className= "blue-gradient_text">SM</p> 
        </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Contact
        </NavLink>
        <a href="https://drive.google.com/uc?export=download&id=1AdMfhli5Hcga-ZDHCHTkmb8wBo1jgtPM">Resume</a>
      </nav>
    </header>
  );
};

export default Navbar;

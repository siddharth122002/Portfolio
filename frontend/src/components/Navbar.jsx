import { useContext, useEffect} from "react";
import w2 from "../assets/wolf2.png"
import {Link} from 'react-scroll'
import { UserContext } from "../context/UserContext";
function Navbar(){
  const {dark,setDark} = useContext(UserContext);
  const night=()=>{
    setDark(!dark);
  }
  return (
    <div className={dark?"dark" :"light"}>
      <nav className="dark:bg-slate-900 shadow-lg bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-semibold text-white">
              <img src={w2} className="w-12 dark:invert cursor-pointer animate-pulse"
              onClick={(e)=>(night(e))}
              />
            </div>
            <div className="flex space-x-4 lg:space-x-8">
              <Link 
                className="text-purple-400 hover:text-black dark:hover:text-white hover:cursor-pointer"
                activeClass='active'
                to={'/about'}
                spy={true}
                smooth={true}
                duration={500}
              >About</Link>
              <Link 
                className="text-purple-500 hover:text-black dark:hover:text-white hover:cursor-pointer"
                activeClass='active'
                to={'/skills'}
                spy={true}
                smooth={true}
                duration={500}
              >Skills</Link>
              <Link 
                className="text-purple-600 hover:text-black dark:hover:text-white hover:cursor-pointer"
                activeClass='active'
                to={'/projects'}
                spy={true}
                smooth={true}
                duration={500}
              >Projects</Link>
              <Link 
                className="text-purple-700 hover:text-black dark:hover:text-white hover:cursor-pointer"
                activeClass='active'
                to={'/contact'}
                spy={true}
                smooth={true}
                duration={500}
              >Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      </div>
  );
}
export default Navbar;
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const Hover = ({ isActive }) =>
    isActive ? "text-subMain" : "hover:text-subMain transitions text-white";
  return (
    <div className="sticky bg-main shadow-md  top-0 z-50">
      <div className="container  mx-auto py-6 px-5 lg:grid gap-10 grid-cols-7 justify-between items-center">
        {/* logo */}
        <div className="hidden col-span-1 lg:block skew-x-12 text-subMain font-bold">
          <Link to="/">
            <span className="text-2xl tracking-wider">BahStream</span>
          </Link>
        </div>
        {/* search */}
        <div className="col-span-3">
          <form className="w-full h-full text-sm bg-dryGray rounded flex-betw gap-4">
            <button
              type="submit"
              className="bg-subMain w-14 flex-column h-12 rounded text-white"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search  Movie Name from here"
              className="w-full h-12 font-medium placeholder:text-border rounded bg-transparent border-none text-black pr-2"
            />
          </form>
        </div>
        {/* menus */}
        <div className="col-span-3 font-medium text-sm hidden lg:flex justify-between items-center  xl:justify-end xl:gap-14 2xl:gap-20">
          <NavLink to={"/movies"} className={Hover}>
            Movies
          </NavLink>
          <NavLink to={"/about-us"} className={Hover}>
            About Us
          </NavLink>
          <NavLink to={"/contact"} className={Hover}>
            Contact
          </NavLink>
          <NavLink to={"/login"} className={Hover}>
            <AiOutlineUser className="w-8 h-8" />
          </NavLink>
          <NavLink to={"/favorite"} className={`${Hover} relative`}>
            <FaHeart className="w-6 h-6" />
            <div className="absolute -top-2  -right-1 w-5 h-5 text-xs flex-column rounded-full bg-subMain text-white">
              0
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

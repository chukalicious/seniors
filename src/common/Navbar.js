import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content border-b-8 border-primary">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <BiMenuAltLeft className="text-5xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/over60">Over 60? California has a plan for you</Link>
            </li>
            <li>
              <Link to="/services">
                Services for Older Adults For aging adults in each region of
                California
              </Link>
            </li>
            <li>
              <Link to="/vaccines">
                Vaccines Provide a Pathway to connection
              </Link>
            </li>
            <li>
              <Link to="/">Feeling Isolated? Here's how to reconnect</Link>
            </li>
            <li>
              <Link to="/">
                Elder Abuse and Neglect How to spot it and how you can help
              </Link>
            </li>
            <li>
              <Link to="/">
                Directory of Resources List of older adults resources
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex text-center md:flex-row-reverse ">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {" "}
            Aging in California
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

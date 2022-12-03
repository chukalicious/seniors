const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content border-b-8 border-primary">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            What's Inside
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Over 60? California has a plan for you</a>
            </li>
            <li>
              <a>
                Services for Older Adults For aging adults in each region of
                California
              </a>
            </li>
            <li>
              <a>Vaccines Provide a Pathway to connection</a>
            </li>
            <li>
              <a>Feeling Isolated? Here's how to reconnect</a>
            </li>
            <li>
              <a>Elder Abuse and Neglect How to spot it and how you can help</a>
            </li>
            <li>
              <a>Directory of Resources List of older adults resources</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex text-center md:flex-row-reverse ">
          <a className="btn btn-ghost normal-case text-xl">
            Aging in California
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

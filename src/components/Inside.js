import { Link } from "react-router-dom";
const Inside = () => {
  return (
    <div className="bg-neutral">
      <div className="navbar bg-primary text-primary-content">
        <h2 className="btn btn-ghost text-2xl uppercase">What's Inside</h2>
      </div>
      <div className="flex flex-col text-primary px-2 py-4 md:grid grid-cols-2 gap-4">
        <Link to="/over60">
          <div className="hover:bg-primary hover:text-neutral rounded-lg p-2 my-2">
            <h3 className="text-2xl text-bold uppercase">Over 60?</h3>
            <p className="capitalize">California has a plan for you</p>
          </div>
        </Link>
        <Link to="/services">
          <div className="hover:bg-primary hover:text-neutral rounded-lg p-2 my-2">
            <h3 className="text-2xl text-bold uppercase">
              Services for older adults
            </h3>
            <p>For aging adults in each region of California</p>
          </div>
        </Link>
        <Link to="/vaccines">
          <div className="hover:bg-primary hover:text-neutral rounded-lg p-2 my-2">
            <h3 className="text-2xl text-bold uppercase">
              Vaccines provide a pathway
            </h3>
            <p>to connection</p>
          </div>
        </Link>
        <Link to="/reconnect">
          <div className="hover:bg-primary hover:text-neutral rounded-lg p-2 my-2">
            <h3 className="text-2xl text-bold uppercase">Feeling Isolated?</h3>
            <p>Here's how to reconnect</p>
          </div>
        </Link>
        <Link to="/abuse">
          <div className="hover:bg-primary hover:text-neutral rounded-lg p-2 my-2">
            <h3 className="text-2xl text-bold uppercase">
              Elder abuse and Neglect
            </h3>
            <p>How to spot it and how you can help</p>
          </div>
        </Link>
        <div className="hover:bg-primary hover:text-neutral rounded-lg p-2 my-2">
          <h3 className="text-2xl text-bold uppercase">
            Directory of resources
          </h3>
          <p>list of older adult resources</p>
        </div>
      </div>
    </div>
  );
};

export default Inside;

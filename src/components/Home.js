import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="hero min-h-[65vh] lg:min-h-screen"
      style={{
        backgroundImage: `url("https://live.staticflickr.com/65535/52539291794_382460c3b1_o.jpg")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-sm mt-40 md:w-md">
          <h1 className="mt-44 text-4xl font-bold uppercase md:mt-40">
            Your one-stop Resource Guide
          </h1>
          <p className="md:my-5 md:text-xl md:font-semibold">
            Peruse this guide to find out what resources and services are
            available to you.
          </p>
          <p className="hidden md:flex text-8xl font-semibold w-full mt-48">
            <FaChevronDown className="text-center mx-auto animate-bounce" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

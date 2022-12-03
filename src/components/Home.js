const Home = () => {
  return (
    <div
      className="hero min-h-[65vh]"
      style={{
        backgroundImage: `url("https://live.staticflickr.com/65535/52539291794_382460c3b1_o.jpg")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-sm mt-40 md:w-md">
          <h1 className="mt-44 text-4xl font-bold uppercase">
            Your one-stop Resource Guide
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

const Home = () => {
  return (
    <div
      className="hero min-h-[75vh]"
      style={{
        backgroundImage: `url("https://live.staticflickr.com/65535/52539291794_382460c3b1_o.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-sm mt-40">
          <h1 className="mb-5 text-5xl font-bold">
            Your one-stop Resource Guide
          </h1>
          <button className="btn btn-primary">See What's Inside</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

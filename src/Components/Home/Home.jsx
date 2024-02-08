import "./Home.css";

const Home = () => {
  return (
    <>
      <section
        id="home"
        class="overlay-home d-flex justify-center align-items-center"
      >
        <div class="  p-5 text-center container ">
          <h1 class="tr-text  mb-5 animate__animated wow animate__zoomIn">
            Don't limit your challenges.
          </h1>

          <p class="prg p-3 animate__animated  animate__fadeInUp">
            {" "}
            If you want something you've never had, you must be willing to do
            something you've never done
          </p>
          <button type="button" class="btn btn-outline-warning ">
            Register Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

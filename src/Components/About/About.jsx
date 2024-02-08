import "./About.css";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <section id="about" class="p-5">
        <div class="container">
          <h1 class="tr-text wow animate__animated animate__zoomIn">
            {" "}
            About Us
          </h1>
          <div class="row pt-5 pb-5 ">
            <div class=" col-lg-6 wow animate__animated  animate__fadeInLeft">
              <div class="about-img m-3">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/95/06/34/1000_F_295063452_m2GQUK8OuemByfVrF8iXNPCS98AAkyJM.jpg"
                  class="  rounded float-start container-fluid  p-0 border1 border-3"
                  alt=""
                />
              </div>
            </div>
            <div class=" col-lg-6 wow animate__animated animate__fadeInRight d-flex align-items-center">
              <div class="about-contan m-3 align-items-center">
                <h2>Best Bikers of India </h2>
                <br />
                <p class="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere accusantium nobis eaque. Est minus eligendi quo
                  inventore, cupiditate sed vitae consequatur exercitationem ab
                  perspiciatis corrupti harum voluptas illo optio dignissimos
                  aut maxime iure perferendis dolorem rem quae saepe? Libero
                  tempora velit fugiat nam vel, pariatur minus quae. Adipisci,
                  temporibus. Omnis, magnam id deleniti soluta fugit atque illo
                  neque? Temporibus, a. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Porro eos, commodi dignissimos enim
                  repellendus veritatis obcaecati? Sit quaerat ab culpa deserunt
                  at consequatur quidem. Perspiciatis tenetur error a ipsam
                  iusto.
                </p>
                <div class="row text-center">
                  <div class="col-md-4 col-sm-4 col-lg-4">
                    <h3>500</h3>
                    <p>monthly subscriber</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-lg-4">
                    <h3>1.8K</h3>
                    <p>Members</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-lg-4">
                    <h3>40</h3>
                    <p>Coaches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

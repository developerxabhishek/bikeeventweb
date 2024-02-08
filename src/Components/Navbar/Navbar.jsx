import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <section class="heading mt-3 p-0 ">
        <nav class="navbar align-items-center p-0">
          <div class="navbar-container align-items-center m-0 p-0">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items  p-0">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Partners</a>
              </li>

              <li>
                <a href="#gallary">Gallary</a>
              </li>

              <li>
                <a href="#team">Team</a>
              </li>
            </ul>
            <a href="#home">
              <h1 class="logo m-4 mt-1 pt-1" style={{ fontSize: "2.5vmax" }}>
                <span style={{ color: "#fff" }}>Expert</span>Riders
              </h1>
            </a>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;

import "./Header.css";
import video from "./headervideo.mp4";
const Header = () => {
  return (
    <>
      <div className="home-video" style={{ maxHeight: "100vh" }}>
        <h1 id="headerquotes">
          LIFE IS SHORT <br /> BUY THE MOTORCYCLE <br /> HAVE A RIDE LIVE YOUR
          DREAMS <br />
          <button type="button" class="btn btn-outline-warning " id="homebtnl">
            IBW 2024 DETAILS OUT SOON
          </button>
        </h1>

        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className="home-videos"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Header;

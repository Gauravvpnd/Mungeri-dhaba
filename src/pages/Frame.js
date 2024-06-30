import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
// import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Frame.css";
import FrameComponent6 from "../components/FrameComponent6";

const Frame = () => {
  return (
    <div className="desktop-5-parent">
      <main className="desktop-5">
        <section className="desktop-2">
          <img
            className="offer-section-2"
            alt=""
            src="/offer-section-2@2x.png"
          />
          <FrameComponent5 />
          <FrameComponent4 />
          <FrameComponent3 />
          {/* <FrameComponent1 /> */}
        </section>
        <FrameComponent />
        <FrameComponent6 />

      </main>
    </div>
  );
};

export default Frame;

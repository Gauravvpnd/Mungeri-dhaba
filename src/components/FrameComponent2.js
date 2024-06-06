import "./FrameComponent2.css";

const FrameComponent2 = ({
  delights,
  foodCakeUndefinedGlyphUnd,
  sENSATIONALFLAVORSANDCULI,
}) => {
  return (
    <div className="frame-parent20">
      <div className="delights-wrapper">
        <div className="delights">{delights}</div>
      </div>
      <div className="food-cake-undefined-glyph-wrapper">
        <img
          className="food-cake-undefined-glyph"
          loading="lazy"
          alt=""
          src={foodCakeUndefinedGlyphUnd}
        />
      </div>
      <div className="sensational-flavors-and">{sENSATIONALFLAVORSANDCULI}</div>
    </div>
  );
};

export default FrameComponent2;

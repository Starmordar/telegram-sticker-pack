import React from "react";
import "./StickerPack.css";

class StickerPack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sticker-card col-xl-3 col-lg-4 col-md-6">
        <div
          className="background-wall"
          style={{ backgroundImage: `url(${this.props.image})` }}
        >
          <div className="pack-title-container">
            <h4 className="pack-title-container__pack-title ellipsis-text">
              Sticker Squad Sticker Squad Sticker Squad Sticker Squad Sticker
              Squad Sticker Squad Sticker Squad Sticker Squad
            </h4>
          </div>

          <div className="pack-title-container">
            <h4 className="pack-title-container__pack-title full-text">
              Sticker Squad Sticker Squad Sticker Squad Sticker Squad Sticker
              Squad Sticker Squad Sticker Squad Sticker Squad
            </h4>
          </div>

          <div className="button-container">
            <button className="change-pack-btn">Change pack</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StickerPack;

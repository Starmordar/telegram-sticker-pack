import React from "react";
import "./Main.css";

import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import NewStickerCard from "../../components/NewStickerCard/NewStickerCard";
import StickerPack from "../../components/StickerPack/StickerPack";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="left-side">
          <LeftNavbar />
        </div>
        <div className="right-side">
          <TopNavbar />

          <div className="pack-section">
            <div className="container-fluid">
              <div className="row">
                <NewStickerCard />
                <StickerPack image="https://slm-assets2.secondlife.com/assets/3806158/view_large/512x512%20PNG%20Landscape%20Texture%20-%20Sunrise%20Lake.jpg?1309205114" />
                <StickerPack image="https://image.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg" />
                <StickerPack image="https://i.imgur.com/j2hM7gw.jpg" />
                <StickerPack image="https://i.warosu.org/data/biz/img/0106/88/1534254219061.jpg" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;

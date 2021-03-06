import React from "react";
import axios from "axios";
import queryString from "query-string";
import "./Home.css";

import LoginButton from "../../components/LoginButton/LoginButton";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import HorizaontalCard from "../../components/HorizontalCard/HorizontalCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userData = queryString.parse(window.location.search, { sort: false });
    console.log(userData);
    const auth = async () => {
      try {
        let res = await axios.get("/auth", { params: userData });

        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    auth();
  }

  render() {
    const cardContent = [
      {
        icon: "fa fa-sitemap",
        title: "Automate Creating Packs",
        text:
          "You can create a new sticker pack or start editing an already created pack within minute.",
      },
      {
        icon: "fa fa-tools",
        title: "Image Editing",
        text:
          "The service has a wide selection of tools for editing your images. You can crop, resize and even add your own text",
      },
      {
        icon: "fa fa-business-time",
        title: "A Powerful Time-saving",
        text:
          "You no longer have to spend time changing the format or size of the picture, we will do all this for you",
      },
    ];

    const btnFontSize = "1.2rem";

    return (
      <section className="landing">
        <div className="container h-100">
          <div className="row h-100 justify-content-center sm-justify-content-between align-items-center flex-wrap">
            <div className="landing__short-description">
              <LandingHeader />
              <img
                className="landing__short-description__main-hero"
                src={require("../../assets/images/octopus.png")}
                alt=""
              ></img>
            </div>

            <div className="landing__call-to-action">
              {cardContent.map((val, index) => {
                return (
                  <HorizaontalCard
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    text={val.text}
                  />
                );
              })}

              <div className="card text-center border-0">
                <div className="card-body">
                  <LoginButton font={btnFontSize} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

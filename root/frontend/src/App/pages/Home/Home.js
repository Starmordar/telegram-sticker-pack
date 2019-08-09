import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import './Home.css'

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
        let res = await axios.get('/auth', { params: userData });

        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    auth();
  }

  render() {
    const cardContent = [{
      icon: 'fa fa-sitemap',
      title: 'Automate Creating Packs',
      text: 'You can create a new sticker pack or start editing an already created pack within minute.'
    }, {
      icon: 'fa fa-tools',
      title: 'Image Editing',
      text: 'The service has a wide selection of tools for editing your images. You can crop, resize, cut out easily, and even add your own text'
    }, {
      icon: 'fa fa-business-time',
      title: 'A Powerful Time-saving',
      text: 'You no longer have to spend time changing the format or size of the picture, we will do all this for you'
    }]

    return (
      <section className="landing">
        <div className="container">
          <div className='row justify-content-between align-items-center'>

            <div className="brief-info">
              <LandingHeader />
              <img className="octopus"
                src={require('../../assets/images/octopus.png')}
                alt=""></img>
            </div>

            <div className='form'>
              <div className="landing__header">

                {
                  cardContent.map((val, index) => {
                    return <HorizaontalCard
                      key={index}
                      icon={val.icon}
                      title={val.title}
                      text={val.text} />
                  })
                }

                <div className='card text-center border-0'>
                  <div className="card-body">
                    <LoginButton />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Home;
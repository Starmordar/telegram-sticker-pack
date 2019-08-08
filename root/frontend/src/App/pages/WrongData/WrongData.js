import React from 'react';
import './WrongData.css'

import LoginButton from "../../components/LoginButton/LoginButton";
import SVGLaptop from "../../components/SVGLaptop/SVGLaptop";

class WrongData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            width: 0
        }

        this.updateSize = this.updateSize.bind(this);
    }

    updateSize(height, width) {
        this.setState({
            height: height,
            width: width
        });
    }

    render() {
        const SVG_BORDER_SIZE = 42;
        return (
            <section className="someth-wrong">
                <div className="container h-100">
                    <div className='row justify-content-center align-items-center h-100'>

                        <div className='svg-shadow'
                            style={{
                                height: this.state.height,
                                width: this.state.width
                            }}></div>

                        <div className='svg-container'>
                            <SVGLaptop updateSize={this.updateSize} />

                            <header className='header' style={{ width: this.state.width - SVG_BORDER_SIZE }}>
                                <h2 className="heading font-weight-bold">WRONG DATA</h2>
                                <p className="subheader">You trying to log-in with invalid or outdated data.
                                 Make sure that you are using 
                                 <a className='loginbot-link' href='tg://resolve?domain=testSamples_bot'> @login_bot </a> 
                                  for sign-in and try again</p>
                                <LoginButton />
                            </header>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default WrongData;
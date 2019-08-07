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
    }

    getSize = (height, width) => {
        this.setState({
            height: height,
            width: width
        })
    }

    render() {

        return (
            <section className="someth-wrong">
                <div className="container h-100">
                    <div className='row justify-content-center align-items-center h-100'>
                        <div className="gradient">
                            <div className='test'
                                style={{
                                    height: this.state.height,
                                    width: this.state.width
                                }}></div>
                            <div className='svg-container'>

                                <SVGLaptop getSize={this.getSize} />

                                <header className='header'>
                                    <h2>Somethin' went wrong</h2>
                                    <p>You trying to log in with wrong or outdated data, please try again</p>
                                    <LoginButton />
                                </header>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WrongData;
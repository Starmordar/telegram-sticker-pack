import React from 'react';
import './WrongData.css'

import SVGLaptop from "../../components/SVGLaptop/SVGLaptop";
import GlitchHeader from "../../components/GlitchHeader/GlitchHeader";

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

                            <GlitchHeader width={this.state.width} />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default WrongData;
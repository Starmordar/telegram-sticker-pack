import React from 'react';
import './SVGLaptop.css'

class SVGLaptop extends React.Component {
    constructor(props) {
        super(props);

        this.onResize = this.onResize.bind(this);
    }

    onResize () {
        let height = this.divElement.getBoundingClientRect().height,
        width = this.divElement.getBoundingClientRect().width;
        
       this.props.updateSize(height, width);
    }

    componentDidMount() {
        this.onResize();

        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize)
    }

    render() {
        return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511 511" style={{enableBackground: 'new 0 0 511 511'}}>
    <g ref={ (divElement) => this.divElement = divElement}>
	    <path d="M39.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3c0-1.98-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2
		c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C35.59,102.2,37.52,103,39.5,103z" fill={'white'}/>
	    <path d="M63.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2
		c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C59.59,102.2,61.53,103,63.5,103z" fill={'white'}/>
	    <path d="M87.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2
		c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C83.59,102.2,85.53,103,87.5,103z" fill={'white'}/>
	    <path d="M119.5,103h304c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-304c-4.142,0-7.5,3.358-7.5,7.5S115.358,103,119.5,103z" fill={'white'}/>
	    <path d="M455.5,103h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S451.358,103,455.5,103z" fill={'white'}/>
	
	    <path className="onstyle" d="M471.5,56h-432C17.72,56,0,73.72,0,95.5v320C0,437.28,17.72,455,39.5,455h432c21.78,0,39.5-17.72,39.5-39.5v-320
		C511,73.72,493.28,56,471.5,56z M39.5,71h432c13.509,0,24.5,10.991,24.5,24.5V120H15V95.5C15,81.991,25.991,71,39.5,71z M471.5,440
		h-432C25.991,440,15,429.009,15,415.5V135h481v280.5C496,429.009,485.009,440,471.5,440z" fill={'white'}/>
    </g>
    </svg> 
        )
    }
}

export default SVGLaptop;
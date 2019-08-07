import React from 'react';
import './Button.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        // event.preventDefault()
    }

    render() {
        return (
            <a href={this.props.href} className='btn'
                style={this.props.style} onClick={this.handleClick}>{this.props.textContent}</a>
        )
    }
}

export default Button;
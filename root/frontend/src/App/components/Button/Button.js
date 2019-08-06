import React from 'react';
import './Button.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.href}
                className='btn'
                style={this.props.style}>{this.props.textContent}</a>
        )
    }
}

export default Button;
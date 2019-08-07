import React from 'react';
import './LoginButton.css'

import Button from '../Button/Button'

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        this.btnContent = 'Login with Telegram';
        this.btnStyle = {
            backgroundColor: '#dc3545',
            color: '#ffffff',
            padding: '13px 40px',
            fontSize: '20px'
        }
        this.href = 'tg://resolve?domain=testSamples_bot'
    }



    render() {
        return (
            <Button href={this.href} textContent={this.btnContent} style={this.btnStyle} />
        )
    }
}

export default LoginButton;
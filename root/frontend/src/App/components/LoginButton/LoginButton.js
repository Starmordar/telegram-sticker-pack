import React from 'react';
import './LoginButton.css'

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        this.btnContent = 'Login with Telegram';
        this.href = 'tg://resolve?domain=testSamples_bot'
    }

    render() {
        return (
            <a href={this.href}
                className='btn btn-danger'
                style={{
                    backgroundColor: '#dc3545',
                    color: '#ffffff',
                    padding: '13px 40px',
                    fontSize: '20px'
                }}
            >{this.btnContent}</a>
        )
    }
}

export default LoginButton;
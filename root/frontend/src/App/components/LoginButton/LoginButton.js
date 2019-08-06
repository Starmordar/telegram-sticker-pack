import React from 'react';
import './LoginButton.css'

import Button from '../Button/Button'

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const btnContent = 'Login with Telegram';

        const btnStyle = {
            backgroundColor: '#dc3545',
            color: '#ffffff',
            padding: '13px 40px',
            fontSize: '20px'
        }
        const href = 'javascript:void(0)'

        return (
            <Button href={href} textContent={btnContent} style={btnStyle} />
        )
    }
}

export default LoginButton;
import React from 'react';
import './LoginButton.css'

class LoginButton extends React.Component {
    render() {
        return (
            <a href='tg://resolve?domain=testSamples_bot'
                className='btn btn-danger login-btn'
                style={{ padding: '13px 40px', fontSize: '1.4em' }}>
                Login with Telegram</a>
        )
    }
}

export default LoginButton;
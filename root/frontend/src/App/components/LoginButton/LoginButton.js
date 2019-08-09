import React from 'react';
import './LoginButton.css'

class LoginButton extends React.Component {
    render() {
        return (
            <a href='tg://resolve?domain=testSamples_bot'
                className='btn btn-danger'
                style={{ padding: '13px 40px', fontSize: '23px' }}>
                Login with Telegram</a>
        )
    }
}

export default LoginButton;
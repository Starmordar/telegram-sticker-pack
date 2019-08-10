import React from 'react';
import './GlitchHeader.css'

import LoginButton from '../LoginButton/LoginButton';

class GlitchHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    calculateFontSize = (height, width) => {
        if (window.innerWidth < 480) return (height + width) / 50;
        return (height + width) / 85;
    }

    render() {
        const btnFontSize = '1.4em';
        return (
            <header className='glitch-header'
                style={{
                    width: this.props.width - (this.props.width / 12),
                    fontSize: this.calculateFontSize(this.props.height, this.props.width)
                }}>
                <h2 className='glitch-header__heading font-weight-bold'>WRONG DATA</h2>
                <h2 className='glitch-header__heading glitch-header__heading-clone font-weight-bold'>WRONG DATA</h2>
                <p className='glitch-header__subheader'>You trying to log-in with invalid or outdated data.
                 Make sure that you are using
                 <a className='loginbot-link' href='tg://resolve?domain=testSamples_bot'> @login_bot </a>
                    for sign-in and try again</p>
                <LoginButton font={btnFontSize} />
            </header>
        )
    }
}

export default GlitchHeader;
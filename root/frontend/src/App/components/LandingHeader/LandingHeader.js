import React from 'react';
import './LandingHeader.css'

class LandingHeader extends React.Component {
    render() {
        return (
            <header className='landing-info'>
                <h1 className='landing-info__heading font-weight-bold'>SERVICE TO CREATE STICKER PACKS</h1>
                <h4 className='landing-info__subheader font-weight-bold'>REALIZE YOUR CRAZY IDEAS WITH TELEGRAM STICKERS</h4>
            </header>
        )
    }
}

export default LandingHeader;
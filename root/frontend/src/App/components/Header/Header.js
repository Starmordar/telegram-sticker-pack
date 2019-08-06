import React from 'react';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="info">
                <h1 className="info__heading font-weight-bold">{this.props.heading}</h1>
                <h4 className="info__subheader font-weight-bold">{this.props.subheader}</h4>
            </header>
        )
    }
}

export default Header;
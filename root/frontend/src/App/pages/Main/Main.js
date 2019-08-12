import React from 'react';
import './Main.css';

import NavSection from '../../components/NavSection/NavSection';

class Main extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className='left-side-navbar dark-blue'>
                <div className='navbar-content'>
                    <div className='brand-wrapper'>
                        <a href='/' className='brand-name'>Sticker Squad</a>
                    </div>

                    <NavSection num={1} />
                    <NavSection num={2} />
                    <NavSection num={3} />
                    <NavSection num={4} />
                </div>
            </div>
        )
    }
}

export default Main;
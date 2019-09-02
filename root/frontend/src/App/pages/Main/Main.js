import React from 'react';
import './Main.css';

import NavSection from '../../components/NavSection/NavSection';
import TopNavbar from '../../components/TopNavbar/TopNavbar';

class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div className='left-side'>
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
                </div>
                <div className='right-side'>
                    <TopNavbar />
                </div>
            </>
        )
    }
}

const ExpandElement = (props) => {
    return (
        <li className='custom-collapse__element'>
            <a href='javascript:void(0)' className='custom-collapse__element__link'>{props.packName}</a>
        </li>
    )
}

export default Main;
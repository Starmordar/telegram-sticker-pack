import React from 'react';
import './LeftNavbar.css';

import NavSection from '../../components/NavSection/NavSection';

class LeftNavbar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const textContent = [{
            dataNumber: 1,
            head: 'YOUR PACKS',
            content: ['StickerSquadStickerSquad', 'StickerSquadStickerSquad', 'StickerSquad', 'StickerSquad'],
            isInfo: false,
            isOpen: true
        },
        {
            dataNumber: 2,
            head: 'MANAGE',
            content: ['Mix packs', 'Change', 'Delete'],
            isInfo: true,
            isOpen: false
        },
        {
            dataNumber: 3,
            head: 'ACCOUNT',
            content: ['Profile', 'Notification'],
            isInfo: true,
            isOpen: false
        }]

        return (
            <div className='left-side-navbar dark-blue'>
                <div className='navbar-content'>
                    <div className='brand-wrapper'>
                        <a href='/' className='brand-name'>Sticker Squad</a>
                    </div>

                    {
                        textContent.map((val, index) => {
                            return <NavSection
                                num={val.dataNumber}
                                content={val.content}
                                head={val.head}
                                isInfo={val.isInfo}
                                isOpen={val.isOpen}
                                key={index} />
                        })
                    }

                </div>
            </div>
        )
    }
}

export default LeftNavbar;
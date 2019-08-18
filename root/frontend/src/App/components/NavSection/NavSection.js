import React from 'react';
import './NavSection.css'

import StickerPackLink from '../StickerPackLink/StickerPackLink'

class NavSection extends React.Component {
    constructor(props) {
        super(props);

        this.clickHander = this.clickHander.bind(this);
    }

    clickHander(e) {
        const eventTrigger = e.currentTarget,
            uniqueID = eventTrigger.dataset.num;

        const collapse = document.querySelector(`.custom-collapse[data-num="${uniqueID}"]`),
            arrowIcon = document.querySelector(`i[data-num="${uniqueID}"]`);

        if (collapse.classList.contains("hidden-section")) {

            arrowIcon.classList.remove('fa-chevron-down');
            arrowIcon.classList.add('fa-chevron-up');

            collapse.classList.remove("hidden-section");
            collapse.classList.add("open-section");

            collapse.parentNode.classList.add('open-element');
            eventTrigger.classList.add('open-link');

        } else {

            arrowIcon.classList.remove('fa-chevron-up');
            arrowIcon.classList.add('fa-chevron-down');

            collapse.classList.remove("open-section");
            collapse.classList.add("hidden-section");

            collapse.parentNode.classList.remove('open-element');

            setTimeout(() => { eventTrigger.classList.remove('open-link'); }, 400);

        }
    }


    render() {
        const text = ['StickerSquadStickerSquad',
            'StickerSquadStickerSquad',
            'StickerSquadStickerSquad',
            'StickerSquadStickerSquad',
            'StickerSquadStickerSquad',
            'StickerSquad',
            'StickerSquad',
            'StickerSquad',
            'StickerSquad'];

        return (
            <div className='navbar-section'>

                <div onClick={this.clickHander}
                    className='collapse-trigger-wrapper'
                    data-num={this.props.num}>
                    <a href='javascript:void(0)' className='collapse-trigger'>YOURS PACKS</a>
                    <i className='fas fa-chevron-down' data-num={this.props.num}></i>
                </div>

                <ul className='custom-collapse hidden-section' data-num={this.props.num}>
                    {
                        text.map((val, index) => {
                            return (
                                <StickerPackLink key={index} packName={val} />
                            )
                        })
                    }
                    <CreateNewPack />
                </ul>

            </div>
        )
    }
}

const CreateNewPack = (props) => {
    return (
        <li className='custom-collapse__element'>
            <a href='javascript:void(0)' className='custom-collapse__element__link d-flex align-items-center'
                style={{ color: '#00d7d2' }}>
                <i className="fas fa-plus create-new-icon"></i>
                <span style={{ fontSize: '15px' }}>New Pack</span></a>
        </li>
    )
}

export default NavSection;
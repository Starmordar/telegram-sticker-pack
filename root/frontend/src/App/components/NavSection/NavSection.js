import React from 'react';
import './NavSection.css'

import StickerPackLink from '../StickerPackLink/StickerPackLink'

class NavSection extends React.Component {
    constructor(props) {
        super(props);

        this.expandedAreaHandler = this.expandedAreaHandler.bind(this);
    }

    expandedAreaHandler(e) {
        const el = e.currentTarget;
        let dataNum = e.currentTarget.dataset.num;

        let elem = document.querySelector(`.custom-collapse__collapse-elements[data-num="${dataNum}"]`);

        let icon = document.querySelector(`i[data-num="${dataNum}"]`);

        if (elem.classList.contains("hidden-section")) {

            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');

            elem.classList.remove("hidden-section");
            elem.classList.add("open-section");

            elem.parentNode.classList.add('open-element');
            el.classList.add('open-link');

        } else {

            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');

            elem.classList.remove("open-section");
            elem.classList.add("hidden-section");

            elem.parentNode.classList.remove('open-element');

            setTimeout(() => { el.classList.remove('open-link'); }, 400);

        }
    }


    render() {
        const text = ['StickerSquadStickerSquad', 'StickerSquadStickerSquad', 'StickerSquadStickerSquad', 'StickerSquadStickerSquad', 'StickerSquad', 'StickerSquad', 'StickerSquad', 'StickerSquad'];
        return (
            <div className='custom-collapse'>
                <div onClick={this.expandedAreaHandler} className='custom-collapse__collapse-trigger-wrapper' data-num={this.props.num}>
                    <a href='javascript:void(0)' className='collapse-trigger'>YOURS PACKS</a>
                    <i className='fas fa-chevron-down' data-num={this.props.num}></i>
                </div>
                <ul className='custom-collapse__collapse-elements hidden-section' data-num={this.props.num}>
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
        <li className='custom-collapse__collapse-elements__element'>
            <a href='javascript:void(0)' className='custom-collapse__collapse-elements__element__link d-flex align-items-center'
                style={{ color: '#00d7d2' }}>
                <i className="fas fa-plus create-new-icon"></i>
                <span style={{ fontSize: '15px' }}>New Pack</span></a>
        </li>
    )
}

const ExpandElement = (props) => {
    return (
        <li className='custom-collapse__collapse-elements__element'>
            <a href='javascript:void(0)' className='custom-collapse__collapse-elements__element__link'>{props.packName}</a>
        </li>
    )
}

export default NavSection;
import React from 'react';
import './StickerPackLink.css'

const HALF_HEIGHT_OF_LINK = 10

class StickerPackLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,
            moreInfo: false
        }

        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
    }


    mouseOverHandler(e) {
        const scrollTopLinks = e.currentTarget.parentNode.scrollTop;
        const scrollTopNavbar = document.querySelector('.navbar-content').scrollTop
        
        const topPosition = e.currentTarget.offsetTop + HALF_HEIGHT_OF_LINK - scrollTopNavbar - scrollTopLinks;

        e.currentTarget.firstChild.style.top = topPosition + 'px';
        e.currentTarget.firstChild.style.left = '220px';
        e.currentTarget.firstChild.style.display = 'block';
    }

    mouseOutHandler(e) {
        e.currentTarget.firstChild.style.display = 'none'
    }

    componentDidMount() {
        if (this.props.text.length > 13) {
            this.setState({
                text: this.props.text.slice(0, 11).concat('...'),
                moreInfo: true
            })
        }
    }

    render() {
        return (
            <li className='expandable-elements__element' onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}>

                {this.state.moreInfo ? (<ArrowBox text={this.props.text} />) : null}

                <a href='javascript:void(0)' className='expandable-elements__element__link d-flex align-items-center'>
                    <img src={require('../../assets/images/octopus.png')}
                        alt="" width='30' height='30' style={{
                            objectFit: 'contain',
                            marginRight: '15px'
                        }}></img>
                    <span>{this.state.text}</span></a>
            </li>
        )
    }
}

const ArrowBox = (props) => {
    return (
        <div className='arrow-box'>{props.text}</div>
    )
}


export default StickerPackLink;
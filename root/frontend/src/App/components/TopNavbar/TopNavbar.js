import React from 'react';
import './TopNavbar.css';


class TopNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    }

    onFocus(e) {
        const eventTrigger = e.currentTarget;
        const pathOfSearchSvgIcon = eventTrigger.previousElementSibling.firstChild;

        pathOfSearchSvgIcon.style.fill = 'blue';
    }

    onFocusOut(e) {
        const eventTrigger = e.currentTarget;
        const pathOfSearchSvgIcon = eventTrigger.previousElementSibling.firstChild;

        pathOfSearchSvgIcon.style.fill = 'gray';
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between" style={{ backgroundColor: '#ffffff' }}>

                <form className="form-inline w-75 search-form flex-nowrap mr-sm-2 pl-sm-4 ml-sm-2">

                    <svg aria-hidden="true" className="svg-icon" width="13" height="13" viewBox="0 0 18 18">
                        <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z" fill={'gray'}>
                        </path>
                    </svg>

                    <input className="form-control w-100 search-form__input ml-sm-2"
                        type="search"
                        tabIndex="0"
                        placeholder=" Search by sticker pack name"
                        aria-label="Search"
                        onFocus={this.onFocus}
                        onBlur={this.onFocusOut} />
                </form>

                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">

                        <li className="nav-item mr-sm-2 ml-sm-2">
                            <button type="button" className="btn btn-success create-button">Create</button>
                        </li>

                        <li className="nav-item mr-sm-2">
                            <a className="nav-link" href="/support"><i className="fas fa-cog support"></i></a>
                        </li>

                        <li className="nav-item mr-sm-2">
                            <a className="nav-link" href="/notifications"><i className="far fa-bell notification"></i></a>
                        </li>

                        <li className="nav-item mr-sm-3 pl-sm-3 border-left">
                            <div className='total'>
                                <span className='total-number'>27</span>
                                <p className='total-text'>packs</p>
                            </div>
                        </li>

                        <li className="nav-item" >
                            <a className='avatar-link' href='/'>
                                <img src='https://images.alphacoders.com/914/914670.jpg'
                                    alt="User avatar" className='avatar' />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default TopNavbar;
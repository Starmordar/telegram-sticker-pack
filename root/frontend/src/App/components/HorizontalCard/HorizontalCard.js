import React from 'react';
import './HorizontalCard.css'

class HorizontalCard extends React.Component {
    constructor(props) {
        super(props);

        this.iconStyle = {
            position: 'absolute',
            right: '20px',
            top: '20px',
            fontSize: '40px',
            color: '#f07869'
        }
    }

    render() {
        return (
            <div className='card border-right-0 border-left-0 border-top-0'>
                <div className='row no-gutters'>

                    <div className="icon col-md-3">
                        <i className={this.props.icon} aria-hidden="true" style={this.iconStyle}></i>
                    </div>

                    <div className="text-content col-md-9">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default HorizontalCard;
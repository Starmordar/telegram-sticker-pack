import React from 'react';
import './NewStickerCard.css';

class NewStickerCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='sticker-card col-xl-3 col-lg-4 col-md-6'>
                <div className='border-dark'>

                    <div className='sticker-card__plus-section'>
                        <i className="fas fa-plus sticker-card__plus"></i>
                    </div>

                    <div className='sticker-card__text-wrapper'>
                        <h3 className='sticker-card__text-wrapper__text'>Create new telegram sticker pack</h3>
                    </div>

                </div>

            </div>
        )
    }
}

export default NewStickerCard;
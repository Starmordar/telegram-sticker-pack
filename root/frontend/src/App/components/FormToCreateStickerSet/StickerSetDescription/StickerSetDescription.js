import React from 'react';
import './StickerSetDescription.css';

class StickerSetDescription extends React.Component {
    constructor(props) {
        super(props);

        this.onInput = this.onInput.bind(this);
    }

    onInput(){
        console.log(1);
    }

    render() {

        return (
            <div className='form-container'>
                <header className='form-container__header'>
                    <h2 className='form-container__header__heading'>Create new sticker set</h2>
                </header>

                <form>
                    <div className="form-group">
                        <label htmlFor="setName">Name your set</label>

                        <input type="text"
                            className="form-control"
                            id="setName"
                            aria-describedby="setNameHelp"
                            placeholder="Enter name" 
                            onChange={this.onInput}
                            />
                        <small id="setNameHelp" className="form-text text-muted">Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores. 1-64 characters.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="setTitle">Title your set</label>
                        <input type="text"
                            className="form-control"
                            id="setTitle"
                            placeholder="Enter title" />
                        <small id="setTitleHelp" className="form-text text-muted">	Sticker set title, 1-64 characters.</small>
                    </div>

                    <button type="submit" className="btn btn-danger w-100">Create sticker set</button>
                </form>
            </div >
        )
    }
}


export default StickerSetDescription;
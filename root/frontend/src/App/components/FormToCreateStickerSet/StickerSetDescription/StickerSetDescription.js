import React from 'react';
import './StickerSetDescription.css';

class StickerSetDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='form-container'>
                <header className='form-container__header'>
                    <h2 className='form-container__header__heading'>Create new sticker set</h2>
                </header>

                <form>
                    <div class="form-group">
                        <label for="setName">Name your set</label>

                        <input type="text"
                            class="form-control"
                            id="setName"
                            aria-describedby="setNameHelp"
                            placeholder="Enter name" />
                        <small id="setNameHelp" class="form-text text-muted">Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores. 1-64 characters.</small>
                    </div>

                    <div class="form-group">
                        <label for="setTitle">Title your set</label>
                        <input type="text"
                            class="form-control"
                            id="setTitle"
                            placeholder="Enter title" />
                        <small id="setTitleHelp" class="form-text text-muted">	Sticker set title, 1-64 characters.</small>
                    </div>

                    <button type="submit" class="btn btn-danger w-100">Create sticker set</button>
                </form>
            </div >
        )
    }
}


export default StickerSetDescription;
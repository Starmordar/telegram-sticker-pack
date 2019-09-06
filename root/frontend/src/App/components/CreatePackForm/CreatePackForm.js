import React from 'react';
import './CreatePackForm.css';

class CreatePackForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='form-container'>
                <header className='form-container__header'>
                    <h2>Create new pack</h2>
                </header>

                <form>
                    <div class="form-group">
                        <label for="stickerName">Name your pack</label>

                        <input type="email"
                            class="form-control"
                            id="stickerName"
                            aria-describedby="stickerNameHelp"
                            placeholder="Enter name" />
                        <small id="stickerNameHelp" class="form-text text-muted">Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores. 1-64 characters.</small>
                    </div>
                    <div class="form-group">
                        <label for="stickerTitle">Name your title</label>
                        <input type="password"
                            class="form-control"
                            id="stickerTitle"
                            placeholder="Password" />
                        <small id="stickerTitleHelp" class="form-text text-muted">	Sticker set title, 1-64 characters.</small>
                    </div>

                    <button type="submit" class="btn btn-danger w-100">Create pack</button>
                </form>
            </div >
        )
    }
}


export default CreatePackForm;
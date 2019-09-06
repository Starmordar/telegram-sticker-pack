import React from 'react';
import './StickerPackForm.css';

import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import StickerSetDescription from '../../components/FormToCreateStickerSet/StickerSetDescription/StickerSetDescription';

class StickerPackForm extends React.Component {
    constructor(props) {
        super(props);

        this.formSteps = [{
            stepNumber: 1,
            stepDescription: 'Pack description',
            isDisable: false
        }, {
            stepNumber: 2,
            stepDescription: 'First sticker',
            isDisable: true
        }]
    }

    render() {

        return (
            <>
                <div className='left-side'>
                    <LeftNavbar />
                </div>
                <div className='right-side'>
                    <TopNavbar />

                    <div className='form-section'>
                        <div className='container-fluid'>
                            <div className='row flex-column justify-content-center'>
                                <div className='form-step-container'>

                                    {
                                        this.formSteps.map((val, index) => {
                                            return <FormStep
                                                stepNumber={val.stepNumber}
                                                description={val.stepDescription}
                                                isDisable={val.isDisable}
                                                key={index}
                                            />
                                        })
                                    }

                                </div>
                                <StickerSetDescription />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const FormStep = (props) => {
    let className1 = '';
    if (props.isDisable) className1 = 'disabled';

    return (
        <div className={'form-step ' + className1}>
            <h3 className='form-step__step-number'>{props.stepNumber}</h3>
            <h4 className='form-step__step-description'>{props.description}</h4>
        </div>
    )
}

export default StickerPackForm;
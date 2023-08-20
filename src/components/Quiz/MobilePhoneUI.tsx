import React from 'react';
import './iPhoneMockup.css';
import Heading from '../common/Heading';
import MarkDownText from './MarkDownText';
import Carousel from './Carousel';

const MobilePhoneUI = (modalValue: any) => {

    console.log('modalValue', modalValue);



    return (
        <div className="iphone-container">
            <div className="iphone-frame">
                <div className="iphone-screen">
                    {/* <MarkDownText markdownText={markdownText.markdownText} /> */}
                    <Carousel markdownText={modalValue} />
                </div>
            </div>
        </div>
    );
};

export default MobilePhoneUI;

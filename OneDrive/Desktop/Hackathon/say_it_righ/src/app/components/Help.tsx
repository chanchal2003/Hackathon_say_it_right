import React from 'react';
import FAQs from './FAQs';
import CardHeader from './CardHeader';
import HelpHeader from './HelpHeader';

type Props = {};

const Help = (props: Props) => {
    return (
        <div className='pb-[20px] bg-gray-100'>
            <HelpHeader></HelpHeader>
            <CardHeader />
            <FAQs />
        </div>
    );
}

export default Help;

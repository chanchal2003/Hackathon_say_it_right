import React from 'react';
import FAQs from './FAQs';
import CardHeader from './CardHeader';
import CardMain from './CardMain';
import Header from './Header';

type Props = {};

const Help = (props: Props) => {
    return (
        <div className='pb-[20px] bg-gray-100'>
            <Header></Header>
            <CardHeader />
            {/* <CardMain></CardMain> */}
            <FAQs />
        </div>
    );
}

export default Help;

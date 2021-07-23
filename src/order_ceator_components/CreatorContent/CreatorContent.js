import React from 'react';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import TabControl from '../TabControl/TabControl';
import './CreatorContent.scss';

function CreatorContent(){
    return (
        <section>
            <PageHeader/>
            <TabControl/>
        </section>
    );
}

export default CreatorContent;
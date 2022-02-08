import React, { useState } from 'react';
import TabDisplay from '../components/TabDisplay';
import TabSelector from '../components/TabSelector';


const TabView = (props) => {

    const [tab, setTab] = useState([
        {
            name: "Tab One",
            content: "You have selected tab one"
        },
        {
            name: "Tab Two",
            content: "You have selected tab two"
        },
        {
            name: "Tab Three",
            content: "You have selected tab three"
        }
    ]);
    const [activeTab, setActivetTab] = useState (0)


    return (
        <div>
            <TabSelector tab={tab} setTab={setTab} activeTab={activeTab} setActiveTab={setActivetTab}/>
            <TabDisplay tabText={tab[activeTab].content} />
        </div>
    )
}

export default TabView;

// Test
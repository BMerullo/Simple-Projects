import React, { useState } from 'react';


const TabSelector = (props) => {

    const {tab, setTab, activeTab, setActiveTab } = props

        const activatedTab = (tabIndex) =>(
            setActiveTab(tabIndex)
        )

        const tabStyle =(index) => {
            if(activeTab === index) {
                return "selected"
            } else {
                return "notSelected"
            }
        }


    return (
        <div>
            {
                tab
                    .map((tab, index) => (
                        <div key={index}
                            className={tabStyle(index)}
                            onClick={()=>activatedTab(index)}
                        >{tab.name}</div>
                    ))
            }
        </div>
    )
}


export default TabSelector;
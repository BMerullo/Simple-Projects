import React from 'react';



const TabDisplay = (props) => {

    const {tabText} = props

    return(
        <div className="tabDisplay">
            {tabText}            
        </div>
    )
}

export default TabDisplay;
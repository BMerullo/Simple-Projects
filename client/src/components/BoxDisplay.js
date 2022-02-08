import React from 'react';


const BoxDisplay = (props) => {

    const { boxArray } = props;
    return (
        <div>
            {
                boxArray.map((box, index) => (
                    <div
                    key={index}
                    style={{
                        display: "inline-block",
                        backgroundColor: box.color,
                        width: box.size,
                        height: box.size,
                        margin: "15px"
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxDisplay;
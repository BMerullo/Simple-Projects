import React, { useState } from 'react';
import BoxDisplay from '../components/BoxDisplay';
import BoxForm from '../components/BoxForm';


const BoxView = (props) => {

    const [boxArray, setBoxArray] = useState([]);
    const handleDelete = (e) => {
        setBoxArray([])
    }

    return (
        <div>
            
            <BoxForm boxArray={boxArray} setBoxArray={setBoxArray} />
            <BoxDisplay boxArray={boxArray} setBoxArray={setBoxArray}/>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BoxView;
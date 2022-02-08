import React, {useState} from 'react';


const BoxForm = (props) => {

    const {boxArray, setBoxArray} = props;
    const [boxColor, setBoxColor] = useState("");
    const [boxSize, setBoxSize] = useState(50)

    const submitHandler = (e) => {
        e.preventDefault()
        setBoxArray ([
            ...boxArray, ({
                color:boxColor,
                size:boxSize + "px"
            })
        ])
        setBoxColor("")
        setBoxSize(50)
    }   
    


    return (
        <div>
            <form className="box-form-style"
            action="boxGenerator"
            onSubmit={submitHandler}>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input 
                    type="text"
                    name="color"
                    value={boxColor} 
                    onChange={(e)=>setBoxColor(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="size">Size:</label>
                    <input 
                    type="text" 
                    name="size"
                    value={boxSize}
                    onChange={(e)=>setBoxSize(e.target.value)}/>
                </div>
                <button type="submit">Add Box</button>
            </form>
        </div>
    )
}

export default BoxForm;
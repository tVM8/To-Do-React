import React, { useState } from "react";

const Input = (props) => {
    const [inputItem, setInputItem] = useState('');

    return (
        <>
            <div className="input_div">
                <input className="input" type="text" value={inputItem} placeholder="Write your tasks" onChange={e=>{setInputItem(e.target.value)}} />
                <button className="add_btn" title="Add Items" onClick={()=>{
                    props.add(inputItem)
                    setInputItem("")
                }}><i class="fa-solid fa-plus"></i></button>
            </div>

        </>
    )
}

export default Input;
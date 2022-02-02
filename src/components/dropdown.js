import React, { useState } from "react"





const Dropdown = (props) =>
{
    const [selection,setSelection] = useState("");
    const [dropdown,setDropdown] = useState(false);

    const check = () =>
    {
        if(dropdown === false)
        {
            return "menu visible transition"
        }
        else
        {
            return "menu transition"
        }

    }

    const items = props.options.map((option) =>{return <div key={option.value} className="item" onClick={() =>{setSelection(option.title)}}>{option.title}</div>})

    return(
        <div className="ui form">
            <div className="field">
                <label>select</label>
                <div className="ui selection dropdown visible active" onClick={() => {setDropdown(!dropdown)}}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selection}</div>
                    <div className={check()}>{items}</div>
                </div>
            </div>

        </div>
    )
}

function worthless()
{
 return history;
}

export default Dropdown;
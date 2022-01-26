import React, { useState } from "react";

const Accordian = (props) =>
{
    const [activeIndex, setActiveIndex] = useState(null);
    console.log(activeIndex)

    const ontTitleClick = (index) => 
    {
        if(index == activeIndex)
        {
            setActiveIndex(null)
        }
        else
        {
            setActiveIndex(index)
        }

    }

    const thing = props.items.map((item, index) => 
    {
        if(index == activeIndex)
        {
    return  <React.Fragment key={item.title}>
                <div className="title active" onClick={() => ontTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    { item.title }
                </div>
                <div className="content active">
                     <p>{item.content}</p>
                 </div>
            </React.Fragment>
        }
    else 
    {
        return  <React.Fragment key={item.title}>
        <div className="title" onClick={() => ontTitleClick(index)}>
            <i className="dropdown icon"></i>
            { item.title }
        </div>
        <div className="content">
             <p>{item.content}</p>
         </div>
    </React.Fragment>
    }

     });


  return <div className="ui styled accordion"> {thing} </div>
}


export default Accordian;
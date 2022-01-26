import React from "react";
import Accordian from "./Accordian";

const items = [
  {
    title: 'what is react',
    content: ' use it'
  },
  {
    title: 'what of react',
    content: ' use it'
  },
  {
    title: 'what when react',
    content: ' use it'
  }
]


const App = () =>
{
  return <div> 
            <Accordian items={items}/>
        </div>
}

export default App

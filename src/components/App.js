import React from "react";
import Accordian from "./Accordian";
import Dropdown from "./dropdown";
import search from "./Search";

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

const options = [
  {
    title: 'green',
    value: 'green'
  },
  {
    title: 'red',
    value: 'red'
  },
  {
    title: 'blue',
    value: 'blue'
  }
]


const App = () =>
{
  return <div> 
            <Dropdown options={options}/>
        </div>
}

export default App

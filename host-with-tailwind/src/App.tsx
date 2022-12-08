import React from "react";
import ReactDOM from "react-dom";
import Header from 'componentsFed/Header';
import headerAdapter from 'componentsFed/headerAdapter';

import "./index.scss";

const App = () => {
  const handleClick = ()=>{
    headerAdapter({
      target: ".adapterHeader",
      headerProps:{
        title:'Header created with adapter function.',
      }
    })
  }

  const handleClickHeader = ()=>{
    window.alert('Header got clicked.');
  };

  return(
    <div className=" flex gap-4 flex-col mt-10 text-3xl mx-auto max-w-6xl">
      <Header 
      title="Easy to use and customize"
      className=" text-grey-800 text-gray-50 bg-blue-800 hover:bg-green-600"
      onClick={handleClickHeader}
    />
      <div className="bg-gray-600 p-3 flex flex-col gap-3 text-gray-50">
        <div>Name: Host application</div>
        <div>Framework: React</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>  
      </div>
      
      <div className="adapterHeader"></div>
      
      <button 
        className="p-3 bg-gray-300 text-base rounded-md" 
        type="button"
        onClick={handleClick}
      >
        Click to add another header
      </button>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));

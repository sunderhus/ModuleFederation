import React from "react";
import ReactDOM from "react-dom";
import Header from ".";

export interface AdapterParams {
    target:string;
    headerProps: {
        title:string;
    };
}

const headerAdapter = ({target, headerProps}:AdapterParams)=>{
    const targetElement = document.querySelector(target)

    if(!targetElement){
        return;
    }

    ReactDOM.render(<Header {...headerProps}/>, targetElement);
}


export default headerAdapter;
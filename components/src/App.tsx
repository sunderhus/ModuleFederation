import React from "react";
import ReactDOM from "react-dom";
import Header  from "./components/Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl  flex flex-col gap-4 ">
    <div className="text-gray-50">
      <p>Name: Remote components</p>
      <p>Framework: React</p>
      <p>Language: TypeScript</p>
      <p>CSS: Tailwind</p>  
    </div>
    
    <Header title="This header component can be shared" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

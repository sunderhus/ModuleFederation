import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'componentsFed/Header';
import "./index.css";

export interface Sample {
  greeting: string;
}

const App: React.FC = () => {

  return (
    <div className="container">
      <Header title='Move to the Edge 🚀' />

      <p>Name: Host app with CSS</p>
      <p>Framework: react</p>
      <p>Language: TypeScript</p>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));

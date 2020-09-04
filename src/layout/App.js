import React, { PureComponent } from "react";
import Header from '../components/public/Header'
import '../asset/appLayout.scss';
function App ({content}) {
  return (
    <div className="App__layout">
      <div className="App__header"><Header></Header></div>
      <div className="App__content">{content}</div>
    </div>
    )
}
    

export default App;





import React, {Component} from 'react'
import './App.css';
import Header from "./comps/Header";
import ImageSec from "./comps/ImageSec"
import Services from "./comps/Services";

class App extends Component {
  
  render(){
    return(
      <div className="App">
          <Header/>
          <ImageSec/>
          <Services/>
      </div>
    );
  }
  
}

export default App;

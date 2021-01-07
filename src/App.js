import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkFrom from './components/ImageLinkFrom/ImageLinkFrom';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
const particlesOptions = {
  particles: {
    number:{
      value:50,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component{
  constructor(){
    super();
    this.state = {
      input : '',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesOptions}
              />
        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkFrom onInputChange={this.onInputChange}/>
        {/* {<FaceRecognition/>} */}
      </div>
    );
  }
}


export default App;

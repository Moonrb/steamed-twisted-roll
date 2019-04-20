import React, { Component } from 'react';
import './App.css';
import  'react-id-swiper/src/styles/scss/swiper.scss'
import Appheader from './component/appHeader/appHeader'
import Title from './component/title/title'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Appheader/>
          <Title/>
        {this.props.children}
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'


class Timer extends React.Component{  //component
    constructor(){
      super();
      this.state = {
        time: new Date().toLocaleTimeString()
      }
    }
  
    render(){
      setInterval(()=>{ //interval برای تغییر state
        this.setState({
          time: new Date().toLocaleTimeString()
        })
      }, 1000)
  
      return(
        <h2 className='timer'>
          It is {this.state.time}
        </h2>
      )
    }
  }

export default Timer;
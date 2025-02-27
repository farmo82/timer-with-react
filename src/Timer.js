import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'


var interval;


class Timer extends React.Component{  //component
    constructor(){
      super();
      this.state = {
        time: new Date().toLocaleTimeString()
      }
    }

    componentDidMount(){  //یک بار اول کار میسازه
        console.log("componentDidMount")
        interval = setInterval(()=>{ //interval برای تغییر state
            this.setState({
              time: new Date().toLocaleTimeString()
            })
          }, 1000)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        
    }
  
    render(){
        console.log("render")
      return(
        <h2 className='timer'>
          It is {this.state.time}
        </h2>
      )
    }
  }

export default Timer;
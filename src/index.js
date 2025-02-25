import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

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

class Text extends React.Component{  //component
  render(){
    return(
      <h1>hello timer</h1>
    )
  }
}

class App extends React.Component{  //component
  render(){
    return(
      // * class --> className
      // حتما باید یک تگ باز و بسته باشد. میتواند تگ بی نام باشد
      <div className='main'>  
        <Text/> 
        <Timer/>
      </div>

      // <>    با بالا برابر است
      //   <Text/>
      //   <Timer/>
      // </>
    )
  }
}


root.render(
  <App/>
);


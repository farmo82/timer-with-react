import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

class Timer extends React.Component{  //component
  render(){
    return(
      <h2 className='timer'>
        It is {new Date().toLocaleTimeString()}
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

const tick = ()=>{

  root.render(
    <App/>
  );
}

setInterval(()=>{  // برای اینکه بدون زدن f5 زمان رو نشون بده
    tick();
  }, 1000)

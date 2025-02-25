import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component{  //this is component
  render(){
    return(
      <div>
        <h1>hello timer</h1>
        <h2>
          It is {new Date().toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}

let elem = new App()

const tick = ()=>{

  root.render(
    elem.render()
  );
}

setInterval(()=>{  // برای اینکه بدون زدن f5 زمان رو نشون بده
    tick();
  }, 1000)

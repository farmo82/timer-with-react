import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const tick = ()=>{
  const elem = (
    <div>
      <h1>hello timer</h1>
      <h2>
        It is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )

  root.render(
    elem
  );
}

setInterval(()=>{  // برای اینکه بدون زدن f5 زمان رو نشون بده
    tick();
  }, 1000)

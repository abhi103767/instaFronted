import React from 'react';
import style from './App.module.css';

// importing components
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className={style.App}>
  <AllRoutes />
    </div>
  );
}

export default App;

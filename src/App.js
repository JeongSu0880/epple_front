import React from "react";
// import Calendar from "./containers/Calendar";
// import "./style/calendar.css";
// import "./style/table.css";
// import "./style/modal.css"
import Login from "./components/Login"
import Logout from "./components/Logout"
import {useState} from 'react';


// const App = () => {
//   return (
//     <div>
//       <Calendar/>
//     </div>
//   );
// }

const App = () => {
  const [stateAuth, setStateAuth] = useState()
  const response = (res) => {
    setStateAuth(res)
  }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'
      style={{ height: "100vh" }}
    >
      {!stateAuth ?
        <Login response={response} />
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src={stateAuth.profileObj.imageUrl} />
          <h5>{stateAuth.profileObj.name}</h5>
          <p>{stateAuth.profileObj.email}</p>
        <Logout response={response} />
        </div>
      }
    </div>
  )
}

export default App;


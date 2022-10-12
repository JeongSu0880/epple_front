import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
    const logout = ()=>{
        console.log('logout successful')
        props.response()
    }
    const clientId= process.env.REACT_APP_clientId;
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
    )
}

export default Logout
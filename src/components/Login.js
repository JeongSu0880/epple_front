import React, {useEffect} from 'react'
import GoogleLogin from "react-google-login";
import {gapi} from 'gapi-script'

const Login = (props) => {
    const clientId = process.env.REACT_APP_clientId;
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        // console.log(response)
        props.response(response)
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login;


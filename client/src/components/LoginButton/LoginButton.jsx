/* eslint-disable react/prop-types */
import useLogin from '../../hooks/useLogin'
import './LoginButton.css'
const LoginButton = (props) => {
    
    const {handleClick, requestResult} = useLogin()

    const handleLogin = () => {
 
        handleClick(props.request.current)
    }

    return (
        <div >
            <h1>{JSON.stringify(requestResult)}</h1>
            <button className="buttonx" onClick={handleLogin} disabled={!props.enabled}>This is a button</button>
        </div>
    )
}

export default LoginButton;
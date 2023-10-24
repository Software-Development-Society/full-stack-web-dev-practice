/* eslint-disable react/prop-types */
import './LoginButton.css'
const LoginButton = (props) => {


    return (
        <div >
            <button className="buttonx" disabled={!props.enabled}>This is a button</button>
        </div>
    )
}

export default LoginButton;
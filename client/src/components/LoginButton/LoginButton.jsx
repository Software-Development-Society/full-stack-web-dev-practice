/* eslint-disable react/prop-types */
import useLogin from '../../hooks/useLogin'
import './LoginButton.css'
const LoginButton = (props) => {

    const handleClick = () => {
        const requestBody = props.request.current
        console.log("in loginbutton.jsx", requestBody)

        const response = useLogin(requestBody)
    }

    return (
        <div >
            <button className="buttonx" onClick={handleClick} disabled={!props.enabled}>This is a button</button>
        </div>
    )
}

export default LoginButton;
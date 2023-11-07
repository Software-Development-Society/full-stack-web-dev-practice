import { useRef, useState } from "react"
import Form from "../../components/Form/Form"
import LoginButton from "../../components/LoginButton/LoginButton"
import './Login.css'

const Login = () => {
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const requestData = useRef('');

    return (
    <div className="login">
        <Form request={requestData} enable={setButtonEnabled}></Form>
        <LoginButton request={requestData} enabled={buttonEnabled}></LoginButton>
    </div>
    )
}

export default Login
import { useState } from "react"
import Form from "../../components/Form/Form"
import LoginButton from "../../components/LoginButton/LoginButton"
import './Login.css'

const Login = () => {
    const [buttonEnabled, setButtonEnabled] = useState(false)

    return (
    <div className="login">
        <Form enable={setButtonEnabled}></Form>
        <LoginButton enabled={buttonEnabled}></LoginButton>
    </div>
    )
}

export default Login
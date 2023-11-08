/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import './Form.css';

const Form = (props) => {

    const username = useRef("")
    const password = useRef("")
    const email = useRef("")

    const [validUsername, setValidUsername] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [validEmail, setValidEmail] = useState(false)



    const handleChange = () =>{
        // setFname(event.target.value)
        let vUsername = validUsername
        let vPassword = validPassword
        let vEmail = validEmail

        if(username.current.value.length < 2){
            setValidUsername(false)
            vUsername = false
            props.enable(false)
        } else {
            setValidUsername(true)
            vUsername = true
        }

        if(password.current.value.length < 2){
            setValidPassword(false)
            vPassword = false
            props.enable(false)
        } else {
            setValidPassword(true)
            vPassword = true
        }
        if(email.current.value.length < 2){
            setValidEmail(false)
            vEmail = false
            props.enable(false)
        } else {
            setValidEmail(true)
            vEmail = true
        }

        if(vEmail && vUsername && vPassword){
            props.enable(true)

            const requestBody = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }

           props.request.current = requestBody

        }

        // console.log("fname ", fName.current.value)
        // console.log("lname ", lName.current.value)
        // console.log("number ", number.current.value)
    }

    return (
        <form onChange={handleChange} className="form-class">
            <label htmlFor="username">username:</label>
            <input  className={validUsername ? "" : "invalid"} ref={username} name="username" type="text" ></input>
            <br></br>
            <label htmlFor="password">password:</label>
            <input className={validPassword ? "" : "invalid"} ref={password} name="password" type="text" ></input>
            <br></br>
            <label htmlFor="email">email:</label>
            <input className={validEmail ? "" : "invalid"} ref={email} name="email" type="text" ></input>
        </form>
    )
}

export default Form;
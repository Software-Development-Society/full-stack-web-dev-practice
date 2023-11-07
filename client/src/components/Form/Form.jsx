/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import './Form.css';
import useLogin from "../../hooks/useLogin";

const Form = (props) => {

    const fName = useRef("")
    const lName = useRef("")
    const number = useRef("")

    const [validFName, setValidFName] = useState(false)
    const [validLName, setValidLName] = useState(false)
    const [validNumber, setValidNumber] = useState(false)



    const handleChange = () =>{
        // setFname(event.target.value)
        let vFName = validFName
        let vLName = validLName
        let vNumber = validNumber

        if(fName.current.value.length < 2){
            setValidFName(false)
            vFName = false
            props.enable(false)
        } else {
            setValidFName(true)
            vFName= true
        }

        if(lName.current.value.length < 2){
            setValidLName(false)
            vLName = false
            props.enable(false)
        } else {
            setValidLName(true)
            vLName = true
        }
        if(number.current.value.length !== 10){
            setValidNumber(false)
            vNumber = false
            props.enable(false)
        } else {
            setValidNumber(true)
            vNumber = true
        }

        if(vNumber && vFName && vLName){
            props.enable(true)

            const requestBody = {
                fName: fName.current.value,
                lName: lName.current.value,
                number: number.current.value
            }

           props.request.current = requestBody

        }

        // console.log("fname ", fName.current.value)
        // console.log("lname ", lName.current.value)
        // console.log("number ", number.current.value)
    }

    return (
        <form onChange={handleChange} className="form-class">
            <label htmlFor="fName">First name:</label>
            <input  className={validFName ? "" : "invalid"} ref={fName} name="fName" type="text" ></input>
            <br></br>
            <label htmlFor="lName">Last name:</label>
            <input className={validLName ? "" : "invalid"} ref={lName} name="lName" type="text" ></input>
            <br></br>
            <label htmlFor="number">Phone number:</label>
            <input className={validNumber ? "" : "invalid"} ref={number} name="number" type="text" ></input>
        </form>
    )
}

export default Form;
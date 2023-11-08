import { useState } from "react"


const useLogin = () => {

    const [requestResult, setRequestResult] = useState()

    const sendLoginData = async (requestBody) => {
        let response = await fetch('http://localhost:5005/login-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': requestBody.username,
                'password': requestBody.password,
                'email': requestBody.email
            })
        })
        const jsonData = await response.json()
        return jsonData
    }
    const handleClick = async (requestBody) => {
        console.log("in loginbutton.jsx", requestBody)
        const data = await sendLoginData(requestBody)
        setRequestResult(data)
    }

    return {handleClick, requestResult}
}

export default useLogin
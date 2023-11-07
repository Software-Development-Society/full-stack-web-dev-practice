

const useLogin = (requestBody) => {

    const sendLoginData = async () => {
        let response = await fetch('http://localhost:5005/login-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'firstName': requestBody.fName,
                'lastName': requestBody.lName,
                'number': requestBody.number
            })
        })
    }
    sendLoginData()

    return null
}

export default useLogin
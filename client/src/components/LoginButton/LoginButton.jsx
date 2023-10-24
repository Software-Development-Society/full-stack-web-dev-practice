import './LoginButton.css'
const LoginButton = (props) => {


    return (
        <div >
            <button className="buttonx" disabled={!props.enabled}>This is a button</button>
        </div>
    )
}

export default LoginButton;
import {useState} from "react";

export function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function childSubmitLogin(event) {
        event.preventDefault()
        return props.parentSubmitLogin({username, password})

    }

    function changeUsername(event) {
        setUsername(event.target.value)
        console.log(event)
    }

    function changePassword(event) {
        setPassword(event.target.value)
        console.log(event)
    }

    return (
        <form onSubmit={(event) => {childSubmitLogin(event)}}>
            <input value={username} onChange={(event) => {changeUsername(event)}} placeholder={"username"} type={"text"}/>
            <input value={password} onChange={(event) => {changePassword(event)}} placeholder={"password"} type={"password"}/>
            <button>login</button>
        </form>
    )
}

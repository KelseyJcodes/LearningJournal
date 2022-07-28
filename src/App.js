// import './App.css';
import {useState} from "react";
import {Login} from "./Components/login/Login";
import {EntryList} from "./Components/EntryList/EntryList";


const entries = [
    {
        id: 1,
        title: 'Today was good.',
        subject: 'React Unit Testing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: '2022-05-13',
        rating: 'good'
    },
    {
        id: 2,
        title: 'Today was blah.',
        subject: 'React Unit Testing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: '2022-05-14',
        rating: 'poor'
    },
    {
        id: 3,
        title: 'Today was ok.',
        subject: 'React Unit Testing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: '2022-05-15',
        rating: 'neutral'
    }

]

function App(props) {
    const {_isLoggedIn = true,
            _Login = Login,
            _EntryList = EntryList} = props
    const [isLoggedIn, setIsLoggedIn] = useState(_isLoggedIn)



    function parentSubmitLogin(credentials) {
        if (credentials.username === 'admin' && credentials.password === 'pass') {
            setIsLoggedIn(true)
        }
    }

    if (isLoggedIn === false) {
        return <_Login parentSubmitLogin={parentSubmitLogin}/>
    }

    return (
        <div className="container">
            <_EntryList entries={entries} eggs={"chhese"}/>
        </div>
    );
}

export default App;

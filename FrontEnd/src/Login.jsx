import React,{useState} from "react";
import './Login.css'; // Specific CSS
import axios from 'axios';//Axios to post login
export const Login =(props) =>{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    //Prevent by default but edited so that it logs it redirect logging dont work
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, { email, password });
            // Save the received token to local storage or in-app context/state
            localStorage.setItem('token', response.data.token);
            // Redirect the user to another page or dashboard in the future
        } catch (error) {
            console.error("Login Error: ", error.response.data);
            // Handle errors
        }
    };
    return(
        <div className= "auth-form">
            <form onSubmit={handleSubmit}>
                <input value ={email} onChange={(e) => setEmail(e.target.value)} type ="email" id="email" placeholder="Email" name="email" required/><br/>
                <input value ={password} onChange={(e) => setPassword(e.target.value)} type ="password" id="password" placeholder="Password" name ="password"required/><br/>
                <input type="submit" value="Log in"/><br/>
             
            </form>
                <button onClick={()=>props.onFormSwitch('register')}>Don't Have an account? Register Here</button>
        </div>
    )
}
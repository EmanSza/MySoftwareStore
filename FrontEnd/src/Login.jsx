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
            // Axios call moved inside the handleSubmit function
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, { email, password });
            console.log(response); // Logging the response for now, handle the token saving and redirecting here
        } catch (error) {
            console.error(error); // Handle errors, e.g., show an error message to the user
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
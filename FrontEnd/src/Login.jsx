import React,{useState} from "react";
import './Login.css'; // Specific CSS
export const Login =(props) =>{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
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
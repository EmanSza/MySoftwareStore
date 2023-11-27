import React,{useState} from "react"
import axios from 'axios';
export const Register =(props) =>{
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, {
                username,
                email,
                password,
            });
            console.log(response.data);
            // Handle response, e.g., redirect to login page or auto-login
        } catch (error) {
            console.error("Registration Error: ", error.response.data);
            // Handle errors, e.g., will be used to show error message to the user
        }
    };

    return(
        <div class="auth-form">
            <form onSubmit={handleRegister}>
                <input value ={username} onChange={(e) => setUsername(e.target.value)} type ="text" id="username" placeholder="Username" name="user" required/><br/>
                <input value ={email} onChange={(e) => setEmail(e.target.value)} type ="email" id="email" placeholder="Email" name="email" required/><br/>
                <input value ={password} onChange={(e) => setPassword(e.target.value)} type ="password" id="password" placeholder="Password" name ="password"required/><br/>
                <input type="submit" value="Register" /><br/>
             
            </form>
                <button onClick={()=>props.onFormSwitch('login')}>Already Have an account? Login Here</button>
        </div>
    )
}

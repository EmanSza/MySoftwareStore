import React,{useState} from "react"
export const Register =(props) =>{
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email, password);
    };

    return(
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <input value ={username} onChange={(e) => setUsername(e.target.value)} type ="text" id="username" placeholder="Username" name="user" required/><br/>
                <input value ={email} onChange={(e) => setEmail(e.target.value)} type ="email" id="email" placeholder="Email" name="email" required/><br/>
                <input value ={password} onChange={(e) => setPassword(e.target.value)} type ="password" id="password" placeholder="Password" name ="password"required/><br/>
                <input type="submit" value="Log in"/><br/>
             
            </form>
                <button onClick={()=>props.onFormSwitch('login')}>Already Have an account? Login Here</button>
        </div>
    )
}
import "./register.css"
import {Link} from "react-router-dom"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." 
        onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." 
        onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." 
        onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
        </button>
    </div>
    )
}

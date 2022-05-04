import "./login.css";
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." 
        ref={userRef}
        />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."
        ref={passwordRef} 
        />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  );
}

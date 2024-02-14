import React, { useState } from "react";
import angry from "../../assets/angry.gif";

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace "your_password" with your actual password
        if (password === "08072000") {
            onLogin();
        } else {
            setError("Incorrect password. Fuck you!");
        }
    };

    return (
        <div className="container">
            <header>
                <img className="login-img" src={angry} alt="simple gif" />
            </header>

            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;

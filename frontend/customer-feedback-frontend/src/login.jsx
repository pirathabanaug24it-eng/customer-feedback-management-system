function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Customer Feedback</h1>
        <h2>Management System</h2>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={onLogin}>
          Login
        </button>

        <p>Welcome to Customer Feedback System</p>
      </div>
    </div>
  );
}

export default Login;
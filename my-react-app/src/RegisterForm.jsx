import { useState } from "react";
 
function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    console.log("Registered:", { username, email, password });
    setError(""); // Clear error if successful
  };
 
  return (
<form onSubmit={handleSubmit}>
<h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
<input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
<br />
<input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<br />
<input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<br />
<input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
<br />
<button type="submit">Register</button>
</form>
  );
}
 
export default RegisterForm;
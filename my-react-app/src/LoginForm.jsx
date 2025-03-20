import { useState } from "react";
 
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
  };
 
  return (
<form onSubmit={handleSubmit}>
<h2>Login</h2>
<input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<br />
<input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<br />
<button type="submit">Login</button>
</form>
  );
}
 
export default LoginForm;
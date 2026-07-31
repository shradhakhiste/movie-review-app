import { useState } from "react";
import axios from "axios";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (e)=>{
    e.preventDefault()

    try {
       const response = await axios.post("http://localhost:5000/api/auth/signup",{
        name,
        email,
        password
       })
       console.log(response.data);
       
      
    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <form onSubmit={handlesubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default SignupPage;

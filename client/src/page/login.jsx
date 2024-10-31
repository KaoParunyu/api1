import { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const resetForm = () => {
    setUsername("");
    setPassword("");
    console.log("ฟอร์มถูกรีเซ็ต");
  };

  useEffect(() =>{
  
  const userData = localStorage.getItem("userData");

  if (userData){
    navigate("/profile");
  }
  },[navigate]);


  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      if (response.status === 200) {
        // เก็บข้อมูลผู้ใช้ใน localStorage
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        alert("Login successful");
        navigate("/profile"); // นำทางไปยังหน้า profile
      }
    } catch (error) {
      alert("Invalid username or password");
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <div>Login</div>
      <form id="reset">
        <div>User</div>
        <input
          type="text"
          id="fname"
          name="firstname"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>Password</div>
        <input
          type="password"
          id="lname"
          name="Lastname"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="button" value="Login" onClick={handleLogin} />
        <input type="reset" value="Reset" onClick={resetForm} />
      </form>
    </section>
  );
}

export default Login;

import { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
function Login() {
  const resetForm = () => {
    setUsername("");
    setPassword("");
    if (resetForm) console.log("ได้");
    else console.log("ไม่");
  };
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user")
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("พัง", error));
  }, []);

  const handleLogin = () => {
    const identify = userData.find(
      (passcard) =>
        passcard.username === username && passcard.password === password
    );
    if (identify) alert("login");
    else alert("not found");
  };

  return (
    <section>
      <div>login</div>
      <form id="reset">
        <div>user</div>
        <input
          type="text"
          id="fname"
          name="firstname"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>password</div>
        <input
          type="password"
          id="lname"
          name="Lastname"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="button" onClick={handleLogin} />
        <input type="reset" value="reset" onClick={resetForm} />
      </form>
    </section>
  );
}

export default Login;

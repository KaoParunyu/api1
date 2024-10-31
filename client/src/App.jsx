import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // เช็คสถานะการล็อกอินเมื่อโหลดคอมโพเนนต์ครั้งแรก
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setIsLoggedIn(true);
      setUsername(JSON.parse(storedUser).username);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data.slice(0, 3)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setData1(response.data.slice(0, 3)))
      .catch((error) => console.error("Error fetching data1:", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user")
      .then((response) => setData2(response.data.slice(0, 10)))
      .catch((error) => console.error("Error fetching data2:", error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login"); // กลับไปที่หน้า Login หลังจาก Logout
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Responsive API Demo</h1>
        {isLoggedIn ? (
          <>
            <div>
              <span>Welcome, {username}</span>
            </div>
            <div>
              <button onClick={handleLogout} className="card">Logout</button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <div>
                <button className="card">Login</button>
              </div>
            </Link>
            <Link to="/register">
              <div>
                <button className="card">Register</button>
              </div>
            </Link>
          </>
        )}
      </header>
      <main className="App-content">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

        {data1.length > 0 ? (
          data1.map((item1) => (
            <div key={item1.id} className="card">
              <h2>{item1.title}</h2>
              <p>{String(item1.completed)}</p>
            </div>
          ))
        ) : (
          <p>No data</p>
        )}

        {data2.length > 0 ? (
          data2.map((item2) => (
            <div key={item2.id} className="card">
              <h2>{item2.title}</h2>
              <p>{item2.body}</p>
            </div>
          ))
        ) : (
          <p>Failed to load data</p>
        )}
      </main>
    </div>
  );
}

export default App;

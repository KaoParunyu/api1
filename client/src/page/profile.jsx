import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    // ดึงข้อมูลผู้ใช้จาก localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    else{
      navigate("/");
    }
  }, [navigate]);


  const handleLogout = () => {
    // ล้างข้อมูลผู้ใช้ใน localStorage และนำทางกลับไปหน้า Login
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <section>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button>

      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Title: {userData.title}</p>
          <p>Body: {userData.body}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </section>
  );
}

export default Profile;

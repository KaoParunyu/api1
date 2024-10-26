import  { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data.slice(0, 3)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setData1(response.data.slice(0, 3)))
      .catch(error => console.error('Error fetching data1:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Responsive API Demo</h1>
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


        {data1.length > 0 ?(
          data1.map((item1)=>(
            <div key={item1.id} className="card">
              <h2>{item1.title}</h2>
              <p>{String(item1.completed)}</p>
            </div>
          ))
        ): (
          <p>no data</p>
        )}
      </main>
    </div>
  );
}

export default App;

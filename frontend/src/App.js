import React, { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Calling your Python FastAPI backend
    fetch('http://localhost:8000/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>My Microservice App</h1>
      <hr />
      <div>
        {tasks.map(task => (
          <div key={task.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
            <strong>Task:</strong> {task.title} <br />
            <strong>Status:</strong> <span style={{ color: 'green' }}>{task.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
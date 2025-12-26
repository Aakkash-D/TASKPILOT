
import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  const addTask = async () => {
    const res = await fetch('http://localhost:8081/api/tasks', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title})
    })
    const data = await res.json()
    setTasks([...tasks, data])
    setTitle('')
  }

  return (
    <div>
      <h1>TaskPilot</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, i) => <li key={i}>{t.title}</li>)}
      </ul>
    </div>
  )
}

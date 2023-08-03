import Layout from './Layout';
import TaskList from './TaskList';
import AddTask from './AddTask';
import ViewTask from './ViewTask';
import EditTask from './EditTask';
import Missing from './Missing';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from './api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editDate, setEditDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmSubmit = window.confirm('Do you want to add task?');
    if (confirmSubmit) {
      const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      const newTask = { id, title: taskTitle, description: taskDescription, date: taskDate };
    
      try {
        const response = await api.post('/tasks', newTask);
        setTasks([...tasks, response.data]);
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        navigate('/');
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  

  const handleEdit = async (id) => {
    const confirmEdit = window.confirm('Do you want to save the changes?');
    if (confirmEdit) {
      const updatedTask = { id, title: editTitle, description: editDescription, date: editDate };
      try {
        await api.put(`/tasks/${id}`, updatedTask);
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.id === id ? { ...updatedTask } : task))
        );
        setEditTitle('');
        setEditDescription('');
        setEditDate('');
        navigate('/');
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Do you want to delete task?');
      if (confirmDelete) {
        await api.delete(`/tasks/${id}`);
        const tasksList = tasks.filter((task) => task.id !== id);
        setTasks(tasksList);
        navigate('/');
      }
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };


  const handleMarkCompleted = (id) => {
    const confirmMarkComplete = window.confirm('Do you want to change the status?');
    if (confirmMarkComplete) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        })
      );
    }
  };
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TaskList tasks={tasks} setTasks={setTasks}  handleDelete={handleDelete} handleMarkCompleted={handleMarkCompleted} />} />
        <Route path="task">
          <Route
            index
            element={
              <AddTask
                handleSubmit={handleSubmit}
                taskTitle={taskTitle}
                setTaskTitle={setTaskTitle}
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                taskDate={taskDate}
                setTaskDate={setTaskDate}
              />
            }
          />
          <Route
            path=":id"
            element={<ViewTask tasks={tasks} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="edit">
          <Route
            path=":id"
            element={
              <EditTask
                tasks={tasks}
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editDescription={editDescription}
                setEditDescription={setEditDescription}
                editDate={editDate}
                setEditDate={setEditDate}
              />
            }
          />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;

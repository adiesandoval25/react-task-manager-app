import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditTask = ({
    tasks, handleEdit, editTitle, setEditTitle, editDescription, setEditDescription, editDate, setEditDate
}) => {
    const { id } = useParams();
    const task = tasks.find(task=> (task.id).toString() === id);

    useEffect(() => {
        if (task) {
            setEditTitle(task.title);
            setEditDescription(task.description);
            setEditDate(task.date);
        }
    }, [task, setEditTitle, setEditDescription, setEditDate])

    return (
        <main className="NewTask">
                <>
                    <form className="newTaskForm" onSubmit={(e) => handleEdit(task.id, e.preventDefault())}>
                        <label htmlFor="taskTitle">Title:</label>
                        <input
                            id="taskTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                       <label htmlFor="taskDescription">Description:</label>
                        <input
                            id="taskDescription"
                            type="text"
                            required
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                        />
                        <label htmlFor="taskDate">Due Date:</label>
                        <input
                            id="taskDate"
                            type="date"
                            required
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                        />
                        <button className="submitButton"> Edit Task</button>
                    </form>
                </>
        </main>
    )
}

export default EditTask
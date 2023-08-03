
const AddTask = ({
    handleSubmit,
    taskTitle,
    setTaskTitle,
    taskDescription,
    setTaskDescription,
    taskDate,
    setTaskDate,
}) => {
    return (
        <main className="NewTask">
            <form className="newTaskForm" onSubmit={handleSubmit}>
                <label htmlFor="taskTitle">Title:</label>
                <input
                    id="taskTitle"
                    type="text"
                    required
                    placeholder="Enter Title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <label htmlFor="taskDescription">Description:</label>
                <input
                    id="taskDescription"
                    type="text"
                    required
                    placeholder="Enter Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <label htmlFor="taskDate">Due Date:</label>
                <input
                    id="taskDate"
                    type="date"
                    required
                    placeholder="Enter Due Date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                   
                />
                <button className="submitButton">Add Task</button>
            </form>
        </main>
    );
};

export default AddTask;

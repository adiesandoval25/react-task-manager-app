import Table from './Table';

const TaskList = ({ tasks, handleDelete,handleMarkCompleted}) => {
    return (
        <main className="Tasks">
            {tasks.length ? (
                <Table tasks={tasks} handleDelete={handleDelete} handleMarkCompleted={handleMarkCompleted} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No tasks to display.
                </p>
            )}
        </main>
    )
}

export default TaskList
import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {

    return (

        <div>

            <h2 className="text-xl font-bold mb-4">
                My Tasks
            </h2>

            {tasks.length === 0 ? (

                <p className="text-gray-500">
                    No tasks available. Create your first task!
                </p>

            ) : (

                tasks.map((task) => (

                    <TaskCard
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        editTask={editTask}
                    />

                ))

            )}

        </div>
    );
}

export default TaskList;
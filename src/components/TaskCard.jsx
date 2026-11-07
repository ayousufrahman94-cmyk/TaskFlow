function TaskCard({ task, deleteTask, toggleTask, editTask }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-5 mb-4">

            <div className="flex justify-between items-center">

                <h3 className={`text-lg font-bold ${
                    task.completed ? "line-through text-gray-400" : ""
                }`}>
                    {task.title}
                </h3>

                <span className="text-sm font-semibold text-blue-600">
                    {task.priority}
                </span>

            </div>

            <p className="text-gray-500 my-3">
                {task.description}
            </p>

            <div className="flex gap-2 flex-wrap">

                <button
                    onClick={() => toggleTask(task.id)}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg"
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                    onClick={() => editTask(task)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                >
                    Edit
                </button>

                <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;
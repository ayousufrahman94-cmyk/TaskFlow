import { useState } from "react";

function TaskForm({ addTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title.trim()) {
            alert("Please enter task title");
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            priority: priority,
            completed: false
        };

        addTask(newTask);

        setTitle("");
        setDescription("");
        setPriority("Medium");
    };

    return (

        <form onSubmit={handleSubmit}
              className="bg-white p-5 rounded-xl shadow-md mb-6">

            <h2 className="text-xl font-bold mb-4">
                Create New Task
            </h2>

            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-3 rounded-lg mb-3"
            />

            <textarea
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-3 rounded-lg mb-3"
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border p-3 rounded-lg mb-3"
            >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
                + Add Task
            </button>

        </form>
    );
}

export default TaskForm;
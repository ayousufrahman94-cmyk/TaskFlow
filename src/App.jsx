import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import TaskForm from "./components/taskForm";
import TaskList from "./components/TaskList";

function App() {

    const [tasks, setTasks] = useState([]);

    // CREATE TASK
    const addTask = (newTask) => {

        setTasks([...tasks, newTask]);

    };

    // DELETE TASK
    const deleteTask = (id) => {

        setTasks(tasks.filter((task) => task.id !== id));

    };

    // COMPLETE TASK
    const toggleTask = (id) => {

        setTasks(tasks.map((task) =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));

    };

    // UPDATE TASK
    const editTask = (selectedTask) => {

        const updatedTitle = prompt(
            "Enter new task title",
            selectedTask.title
        );

        if (updatedTitle === null || !updatedTitle.trim()) {
            return;
        }

        setTasks(tasks.map((task) =>
            task.id === selectedTask.id
                ? { ...task, title: updatedTitle.trim() }
                : task
        ));

    };

    // TASK COUNTS
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks = totalTasks - completedTasks;

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <main className="flex-1 p-6">

                    <h1 className="text-3xl font-bold mb-6">
                        Dashboard
                    </h1>

                    {/* STATISTICS */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

                        <StatsCard
                            title="Total Tasks"
                            value={totalTasks}
                            color="#3B82F6"
                        />

                        <StatsCard
                            title="Completed Tasks"
                            value={completedTasks}
                            color="#22C55E"
                        />

                        <StatsCard
                            title="Pending Tasks"
                            value={pendingTasks}
                            color="#EAB308"
                        />

                    </div>

                    {/* ADD TASK */}

                    <TaskForm addTask={addTask} />

                    {/* DISPLAY TASKS */}

                    <TaskList
                        tasks={tasks}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        editTask={editTask}
                    />

                </main>

            </div>

        </div>
    );
}

export default App;
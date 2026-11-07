function Sidebar() {
    return (
        <aside className="bg-gray-900 text-white w-56 min-h-screen p-5">

            <h3 className="text-gray-400 font-semibold mb-6">
                MENU
            </h3>

            <ul className="space-y-5">

                <li className="text-blue-400 cursor-pointer">
                    Dashboard
                </li>

                <li className="cursor-pointer hover:text-blue-400">
                    My Tasks
                </li>

                <li className="cursor-pointer hover:text-blue-400">
                    Completed
                </li>

                <li className="cursor-pointer hover:text-blue-400">
                    Settings
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;
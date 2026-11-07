function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4">

            <h2 className="text-2xl font-bold text-blue-600">
                TASKFLOW
            </h2>

            <div className="flex items-center gap-3">
                <span className="text-gray-600">
                    Welcome Back!
                </span>

                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    Y
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
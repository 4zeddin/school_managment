import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0">
                            <img
                                src="/logo.svg"
                                alt="Logo"
                                className="h-8 w-auto"
                            />
                        </div>

                        <nav className="hidden md:flex space-x-8 items-center">
                            <Link
                                to="/"
                                className="text-slate-700 hover:text-violet-500 font-medium transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="/users"
                                className="text-slate-700 hover:text-violet-500 font-medium transition-colors duration-200"
                            >
                                Users
                            </Link>
                            {/* Light/Dark Mode Toggle */}
                            <button
                                id="theme-toggle"
                                className="p-2 rounded-lg text-slate-700 hover:text-violet-500 dark:text-slate-300 dark:hover:text-slate-100 "
                            >
                                {/* Sun Icon (Light Mode) */}
                                <svg
                                    id="theme-toggle-light-icon"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {/* Moon Icon (Dark Mode) */}
                                <svg
                                    id="theme-toggle-dark-icon"
                                    className="w-6 h-6 hidden"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                            </button>
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button>Register</Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;

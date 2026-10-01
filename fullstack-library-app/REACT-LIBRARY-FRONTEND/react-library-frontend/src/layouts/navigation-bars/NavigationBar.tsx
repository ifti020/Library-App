import {NavLink} from "react-router-dom";
import {useAuth} from "../../auth/AuthContext.tsx";

export const NavigationBar =() => {
    const {isAuthenticated, login, logout, user} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className="container-fluid">
                <span className="navbar-brand">BoiSync</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">
                                Search Books
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item m-1 d-none d-lg-flex align-items-center">
                                    <span className="navbar-text text-light me-3">
                                        Hello, {user?.name || user?.username || "User"}
                                    </span>
                                </li>
                                <li className="nav-item m-1">
                                    <button className="btn btn-outline-light" type="button" onClick={logout}>
                                        Sign out
                                    </button>
                                </li>     </> ) : (

                                <li className="nav-item m-1">
                                    <button className="btn btn-outline-light" type="button" onClick={login}>
                                        Sign in
                                    </button>
                                </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
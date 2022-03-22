import { NavLink } from "react-router-dom";

export default function HeaderNav() {
    return (
        <header>
            <nav>
                <NavLink exact to="/">Main</NavLink>
                <NavLink to="/movies">Search Movie</NavLink>
            </nav>
        </header>
    );
};
import './header.scss'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Todo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Todo List</Link></li>
                    <li><Link to="/history">History</Link></li>
                </ul>
            </div>
        </nav>
    );
}

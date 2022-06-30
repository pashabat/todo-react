import './header.scss'

export function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Todo List</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Todo List</a></li>
                    <li><a href="#">History</a></li>
                </ul>
            </div>
        </nav>
    );
}

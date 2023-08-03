import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to="task"> <button className="addNew"> Add Task </button></Link></li>
                <li><Link to="/"> <button className="addNew">View All Tasks</button></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;

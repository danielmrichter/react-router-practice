import { Link } from "react-router-dom/cjs/react-router-dom";



export default function Nav() {

    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/students'>STUDENTS</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
            </ul>
        </nav>
    )
}
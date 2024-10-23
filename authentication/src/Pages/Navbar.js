import { Link } from 'react-router-dom';

export const Navbar = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to='withoutReactQuery'>Without React Query</Link>
                </li>
                <li> <Link to='withReactQuery'>With React Query</Link> </li>
                <li> <Link to='formic'>Formic</Link> </li>
            </ul>
        </nav>
    )
};
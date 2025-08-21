import {Link, useLocation} from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    return (
        <div className="w-full flex justify-center">
            <div className="w-full md:w-2/3">
                <Link to='https://www.linkedin.com/in/deanyylin/'>
                    <div className="text-3xl font-bold">DEAN LIN</div>
                </Link>
                <ul className=' flex justify-center space-x-4'>
                    <li>
                        <Link
                            to='/'
                            className={location.pathname === "/" ? "font-semibold underline" : "hover:font-semibold hover:underline"}
                        >home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/cv'
                            className={location.pathname === "/cv" ? "font-semibold underline" : "hover:font-semibold hover:underline"}

                        >
                            cv
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/projects'
                            className={location.pathname === "/projects" ? "font-semibold underline" : "hover:font-semibold hover:underline"}
                        >
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/blog'
                            className={location.pathname === "/blog" ? "font-semibold underline" : "hover:font-semibold hover:underline"}
                        >
                            blog
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
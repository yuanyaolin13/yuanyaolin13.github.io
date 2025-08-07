import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full md:w-2/3">
                <div className="text-2xl font-bold">DEAN LIN</div>
                <ul className=' flex justify-center space-x-4'>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                    <li>
                        <Link to='/blog'>blog</Link>
                    </li>
                    <li>
                        <Link to='/projects'>projects</Link>
                    </li>
                    <li>
                        <Link to='/cv'>cv</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
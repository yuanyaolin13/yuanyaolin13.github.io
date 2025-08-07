import 'react';

function NavBar() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full md:w-2/3">
                <div className="text-2xl font-bold">DEAN LIN</div>
                <ul className=' flex justify-center space-x-4'>
                    <li>home</li>
                    <li>about</li>
                    <li>blog</li>
                    <li>projects</li>
                    <li>cv</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
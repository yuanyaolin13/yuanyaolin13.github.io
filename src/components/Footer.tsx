import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='flex flex-col items-center space-y-2 w-full'>
            <div className='border-t-2 border-solid border-[rgba(58,69,69,0.25)] w-1/2'>
                <div className='flex flex-row space-x-4 m-4'>
                    <ul className='text-left pr-4'>
                        <li className='text-xs'>
                            Dean Lin
                        </li>
                        <li className='text-xs'>
                            cs student @ unc chapel hill
                        </li>
                        <li className='text-xs'>
                            swe intern @ amazon
                        </li>
                        <li className='text-xs'>
                            frontend dev. :D
                        </li>
                    </ul>
                    <ul className='text-left'>
                        <li className='text-xs'>
                            <Link className='text-blue-800 underline' to='https://www.linkedin.com/in/deanyylin/'>linkedin</Link>
                        </li>
                        <li className='text-xs'>
                            <Link className='text-blue-800 underline' to='https://github.com/yuanyaolin13'>github</Link>

                        </li>
                    </ul>
                    <div className='ml-auto flex flex-col items-center'>
                        <div>
                            swag button
                        </div>
                        <div className='text-[0.5rem]'>
                            (coming soon)
                        </div>
                    </div>
                </div>
                <div className='text-xs font-light opacity-80'>
                    © {new Date().getFullYear()} Dean Lin
                </div>
            </div>
        </div>
    );
}

export default Footer;
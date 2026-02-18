import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='flex flex-col items-center space-y-2 w-full'>
      <div className='border-t-2 border-solid border-[rgba(58,69,69,0.25)] w-full md:w-1/2'>
        <div className='flex flex-row items-center md:items-start space-x-2 mt-2'>
          <ul className='text-left md:pr-4'>
            <li className='text-xs'>
              cs student @ unc
            </li>
            <li className='text-xs'>
              frontend dev.
            </li>
          </ul>
          <ul className='text-left'>
            <li className='text-xs'>
              <Link className='text-blue-800 underline'
                    to='https://www.linkedin.com/in/deanyylin/'>linkedin</Link>
            </li>
            <li className='text-xs'>
              <Link className='text-blue-800 underline'
                    to='https://github.com/yuanyaolin13'>github</Link>
            </li>
            <li className='text-xs '>
              deanlindev@gmail.com
            </li>
          </ul>
          <div className='ml-auto flex md:pr-4 max-w-[60px] max-h-[50px]'>
            {/*<div>*/}
            {/*    swag button*/}
            {/*</div>*/}
            {/*<div className='text-[0.5rem]'>*/}
            {/*    (coming soon)*/}
            {/*</div>*/}

            <Link to='/'><img src='./icon.png'/></Link>
          </div>
        </div>
        <div className='text-xs font-light opacity-80 pt-2'>
          © {new Date().getFullYear()} Dean Lin
        </div>
      </div>
    </div>
  );
}

export default Footer;
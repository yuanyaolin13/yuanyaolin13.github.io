import 'react'
import {Link} from "react-router-dom";
import Mac from '../assets/mac.png';
import PC from '../assets/pc.png';
import Server from '../assets/server.png';

function Equipment() {
  return (
    <div className='text-left flex flex-col items-center'>
      <div className='w-full flex flex-col space-y-4 md:flex-row md:space-y-0 md:max-w-2/3'>
        <div className='flex flex-col'>
          <div className='text-xl md:text-lg font-bold'>My Equipment</div>
          <div className='text-base md:text-sm'>
            A recent snapshot of all of my personal computers and gear! All of this is for the sake
            of my own entertainment or work! (Better photos coming later)
          </div>
          <div className='flex flex-col mt-12 space-y-12'>
            <div className='flex flex-col md:flex-row justify-center'>
              <img
                src={Mac}
                alt="Macbook Pro"
                className='w-1/2 md:w-1/3 mx-auto md:mx-8 transform hover:scale-110 duration-300 ease-in-out'
              />
              <div className='flex flex-col'>
                <div className='text-lg md:text-base font-bold'>
                  Macbook Pro M3
                </div>
                <div className='flex flex-col md:flex-row w-full items-center justify-center'>
                  <div className='text-base md:text-sm'>
                    The 14-inch 18GB M3 Pro: my main coding, academic-oriented, and video editing
                    workstation.
                    I spend a large majority of my time on this computer and has carried me
                    academically and professionally.
                    I got it in late-2024 and I haven't looked back since :D.
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center'>
              <img
                src={PC}
                alt="Personal computer"
                className='w-1/2 md:w-1/3 mx-auto md:mx-8 transform hover:scale-110 duration-300 ease-in-out'
              />
              <div className='flex flex-col'>
                <div className='text-lg md:text-base font-bold'>
                  Gaming Computer
                </div>
                <div className='flex flex-col md:flex-row w-full items-center justify-center'>
                  <div className='text-base md:text-sm'>
                    The oldest out of the three! This computer has Ryzen 7 5800X3D, RTX 4070, couple
                    Terabytes of storage, 850W PSU, and 24GB RAM all on an X570 AORUS motherboard.
                    This is my second gaming computer that I have had and has served me from freshman
                    year in college to now. It has seen countless changes and is my childhood dream
                    of a machine.
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center'>
              <img
                src={Server}
                alt="Personal Server"
                className='w-1/2 md:w-1/3 mx-auto md:mx-8 transform hover:scale-110 duration-300 ease-in-out'
              />
              <div className='flex flex-col'>
                <div className='text-lg md:text-base font-bold'>
                  Home Lab
                </div>
                <div className='flex flex-col md:flex-row w-full items-center justify-center'>
                  <div className='text-base md:text-sm'>
                    The newest addition to my equipment and one of the reasons why this page even
                    exists! Hosting an i7 8700k and 48GB of RAM, it is a project that I have been
                    working on for over a month. I was able to get all of the parts second hand for
                    quite cheap and has been running my VMs and modded Minecraft servers smoothly. This build was also largely inspired by one of my favorite YouTubers,&nbsp;
                   <Link className='text-blue-800 underline'
                    to='https://www.youtube.com/c/GreenHamGaming/'>Green Ham Gaming
                    </Link>, as it was an attempt to breathe new life into an old, yet capable, build.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Equipment;

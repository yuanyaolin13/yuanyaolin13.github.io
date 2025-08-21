import Pudding from '../assets/pudding.png';

function Home() {
    return (
        <div className='text-left flex flex-col items-center'>
            <div className='w-full md:w-[699px] flex flex-col space-y-8 md:flex-row md:space-y-0'>
                <div className='flex flex-col'>
                    <div className='text-lg font-bold'>Hello!</div>
                    <div className='text-sm'>My name is Dean and I am a Computer Science student at the University of North Carolina at Chapel Hill.</div>
                    <br/>
                    <div className='text-sm'>I am a passionate developer and I am currently experimenting with React and&nbsp;
                        <a className='text-blue-800 underline' href='https://threejs.org/'>ThreeJS</a>. I am also
                        looking into getting into learning more about reinforced learning (and general ML space)!
                    </div>
                    <br/>
                    <div className='text-sm'>
                        As for professional experience, I have interned within Amazon at different teams! Namely, IPC's Simulations & Prebuy.
                    </div>

                </div>
                <div className='flex flex-col items-center md:w-1/2'>
                    <img
                        src={Pudding}
                        alt="Pudding"
                        className='w-1/3 md:w-full'
                    />
                    <div className='text-xs opacity-80 italic'>
                        my cat pudding
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
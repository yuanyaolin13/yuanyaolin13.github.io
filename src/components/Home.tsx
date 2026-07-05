import Pudding from '../assets/pudding.png';

function Home() {

  const puddingBirth = new Date(2023, 5)
  const currentDate = new Date();

  let year = currentDate.getFullYear() - puddingBirth.getFullYear();
  const month = currentDate.getMonth() - puddingBirth.getMonth();

  if (month < 0) {
    year -= 1
  }

  return (
    <div className='text-left flex flex-col items-center'>
      <div className='w-full flex flex-col space-x-4 space-y-8 md:flex-row md:space-y-0 md:max-w-2/3'>
        <div className='flex flex-col'>
          <div className='text-xl md:text-lg font-bold'>Hello!</div>
          <div className='text-base md:text-sm'>My name is Dean. I am software engineer at Amazon and an alumni
            at the University of North Carolina at Chapel Hill, graduating in Computer Science and Information and Library Sciences.
          </div>
          <br/>
          <div className='text-base md:text-sm'>
            I am a passionate about web development, music, and design! Currently, am
            experimenting with development environments, listening to Porter Robinson, and learning
            more about web design + UI/UX!
          </div>
          <br/>
          <div className='text-base md:text-sm'>
            Professionally, I work under Amazon Security but I have
            also interned within Amazon at different teams, namely IPC's Simulations & Prebuy.
          </div>
          <br/>
          <div className='text-base md:text-sm'>
            I have a cat, named Pudding, who is an orange and white American Shorthair.
            He is currently {year} years old!
          </div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-1/2'>
          <img
            src={Pudding}
            alt="Pudding"
            className='w-2/3 md:w-full transform hover:scale-125'
          />
          <div className='text-sm md:text-xs opacity-80 italic'>
            my cat pudding
         </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

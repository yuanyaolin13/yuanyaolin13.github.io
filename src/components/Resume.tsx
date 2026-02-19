import {Link} from 'react-router-dom'

function Resume() {
  return (
    <div className='text-left flex flex-col items-center'>
      <div className='w-full flex flex-col space-y-4 md:flex-row md:space-y-0 md:max-w-2/3'>
        <div className='flex flex-col'>
          <div className='text-lg font-bold'>Amazon</div>
          <ol className='list-inside list-disc'>
            <li className='flex flex-col md:flex-row md:space-y-2'>
              <div className='list-item'>
                Software Developer Engineer
              </div>
              <div className='italic text-sm  md:ml-auto'>
                June 2026 - present
              </div>
            </li>
            <ol className='border-l-2 p-2 ml-[0.1rem] border-[rgba(58,69,69,0.50)]'>
              Amazon Security Team!
            </ol>
            <li className='flex flex-col md:flex-row md:space-y-2'>
              <div className='list-item'>
                SWE Intern
              </div>
              <div className='italic text-sm  md:ml-auto'>
                May 2025 - August 2025
              </div>
            </li>
            <ol className='border-l-2 p-2 ml-[0.1rem] border-[rgba(58,69,69,0.50)]'>
              Part of Simulation's Prebuy team (now known as Reinforced Learning team),
              I created a full stack project to monitor dataset runs from DynamoDB and MongoDB.
              This was necessary for visibility of runs' collection process. Optimized
              DynamoDB queries with 95% performance improvements and created comprehensive
              integration
              with AWS Services (Lambda, Step Functions, DynamoDB, Cloudformation, etc.).
            </ol>
            <li className='flex flex-col md:flex-row md:space-y-2'>
              <div className='list-item'>
                SWE Intern
              </div>
              <div className='italic text-sm md:ml-auto'>
                May 2024 - August 2024
              </div>
            </li>
            <ol className='border-l-2 p-2 ml-[0.1rem] border-[rgba(58,69,69,0.50)]'>
              Part of Simulation's Inbound Team. Creating a full stack project to show a
              comprehensive view of simulated&nbsp;
              <Link className='text-blue-800 underline'
                    to='https://sell.amazon.com/blog/what-is-an-asin'>ASINs</Link>
              &nbsp;and their future vendor or fulfillment center. This project was a complete
              revamp of a previous, outdate project. Where it was converted into a modern
              React project and trimmed redundancies allowing for more efficient deep diving of
              simulations.
            </ol>
          </ol>
          <br/>

          <div className='flex flex-col space-y-2 text-sm font-semibold'>
            <p>Languages: Java, Rust, Python, JavaScript, HTML/CSS, C, LaTeX, Swift</p>
            <p>Frameworks: React, JUnit, Vue, TailwindCSS, Angular, SwiftUI</p>
            <p>Developer Tools: Vim, Git, Docker, AWS, Visual Studio Code, IntelliJ</p>
            <p>Libraries: Jacksons, Apache, Mockito, pandas, NumPy, Matplotlib</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Resume;
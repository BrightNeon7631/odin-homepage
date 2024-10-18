import { FaUserGraduate, FaGithubSquare } from 'react-icons/fa';

export default function About() {
  return (
    <div
      id='about'
      className='mx-auto my-0 flex max-w-screen-2xl flex-col items-center gap-12 bg-slate-900 px-4 py-12 text-white md:flex-row md:px-16'
    >
      <div>
        <h2 className='font-poppins_semibold text-3xl'>Hi there!</h2>
        <div className='mt-1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <a className='mt-4 flex items-center gap-2 hover:underline' href='#'>
          <FaGithubSquare className='text-2xl' />
          <div className='text-xl'>Github</div>
        </a>
      </div>
      <div>
        <FaUserGraduate className='text-9xl' />
      </div>
    </div>
  );
}

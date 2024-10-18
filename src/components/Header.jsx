import DropdownMenu from './DropdownMenu';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 mx-auto my-0 flex max-w-screen-2xl justify-between bg-slate-900 px-4 py-2 text-white shadow md:px-16'>
      <a
        className='select-none font-poppins_semibold text-2xl hover:underline'
        href='#top'
      >
        Homepage
      </a>
      <div className='flex items-center gap-4 text-lg md:gap-8'>
        <a className='hover:underline' href='#about'>
          About
        </a>
        <a className='hover:underline' href='#skills'>
          Skills
        </a>
        <DropdownMenu />
      </div>
    </header>
  );
}

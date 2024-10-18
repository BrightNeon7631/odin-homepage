// credit: https://tailwindui.com/components/application-ui/elements/dropdowns
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { GoChevronDown } from 'react-icons/go';
import { projectsData } from '../data/projectsData';

export default function DropdownMenu() {
  const renderProjectLinks = projectsData.map((project) => {
    return (
      <MenuItem key={project.title}>
        <a
          href={`#${project.title}`}
          className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'
        >
          {project.title.includes('The Odin Project')
            ? project.title.replace('The Odin Project', 'TOP')
            : project.title}
        </a>
      </MenuItem>
    );
  });
  
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <MenuButton className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          Projects
          <GoChevronDown
            aria-hidden='true'
            className='-mr-1 h-5 w-5 text-gray-400'
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
      >
        <div className='py-1'>{renderProjectLinks}</div>
      </MenuItems>
    </Menu>
  );
}

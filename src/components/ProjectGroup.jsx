import { useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export default function ProjectGroup(props) {
  const [show, setShow] = useState(true);

  return (
    <div id={props.title}>
      <div className='relative flex flex-col items-center gap-2 pt-12'>
        <div className='max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-between'>
          <span className='rounded-md bg-gray-500 px-2 py-1 text-lg max-sm:flex-1 max-sm:text-center'>
            {props.title}
          </span>
          <MdKeyboardDoubleArrowUp
            className={`text-5xl duration-500 ease-in-out hover:cursor-pointer sm:absolute sm:right-0 sm:top-10 ${!show ? '-rotate-180' : ''}`}
            onClick={() => setShow((prevState) => !prevState)}
          />
        </div>
        <div>{props.text}</div>
      </div>
      {show ? (
        <div className='mt-4 flex flex-col gap-6'>{props.projects}</div>
      ) : null}
    </div>
  );
}

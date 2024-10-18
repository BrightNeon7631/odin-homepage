import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard(props) {
  const renderTechnologies =
    props?.tech &&
    props.tech.map((element) => {
      return (
        <div
          key={element}
          className='text-md select-none rounded-lg bg-gray-500 px-2 py-1 text-white'
        >
          {element}
        </div>
      );
    });

  const renderGithubRepos = props.git.map((element) => {
    return (
      <div key={element.link} className='group relative'>
        <a href={element.link}>
          <FaGithub />
        </a>
        <span className='absolute left-1/2 mt-2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-500 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {element?.text ? element.text : 'Github'}
        </span>
      </div>
    );
  });

  return (
    <div
      className={`flex flex-col lg:flex-row ${props?.reversed ? 'lg:flex-row-reverse' : ''}`}
    >
      <div
        className={`flex-1 bg-slate-700 px-8 max-sm:px-4 py-8 max-sm:py-4 max-lg:rounded-t-lg ${props?.reversed ? 'lg:rounded-r-lg' : 'lg:rounded-l-lg'}`}
      >
        <img className='rounded-md' src={props.image} alt='project' />
      </div>
      <div
        className={`flex flex-1 flex-col gap-4 bg-slate-800 px-8 max-sm:px-4 py-8 max-lg:rounded-b-lg ${props?.reversed ? 'lg:rounded-l-lg' : 'lg:rounded-r-lg'} justify-center`}
      >
        <h2 className='font-poppins_semibold text-xl'>{props.name}</h2>
        <div>{props.description}</div>
        <div className='flex flex-wrap gap-2'>{renderTechnologies}</div>
        <div className='mt-2 flex items-center gap-6 text-3xl'>
          {renderGithubRepos}
          {props?.demo ? (
            <div className='group relative'>
              <a href={props.demo}>
                <FaExternalLinkAlt />
              </a>
              {/* whitespace-nowrap: This utility prevents the text from wrapping to the next line. */}
              <span className='absolute left-1/2 mt-2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-500 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Live Demo
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

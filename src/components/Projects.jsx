import ProjectCard from './ProjectCard';
import ProjectGroup from './ProjectGroup';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  let totalNoOfProjects = 0;
  const renderProjects = projectsData.map((project) => {
    totalNoOfProjects += project.projects.length;
    // counts the number of projects without taking into account the number of projects from the current project object
    const noOfProjects = totalNoOfProjects - project.projects.length;
    return (
      <ProjectGroup
        key={project.title}
        title={project.title}
        text={project.text}
        projects={project.projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.name}
              image={project.image}
              name={project.name}
              git={project.git}
              demo={project.demo}
              description={project.description}
              tech={project.tech}
              // if project is an even number - display it on the left side
              reversed={(index + noOfProjects) % 2}
            />
          );
        })}
      />
    );
  });

  return (
    <div className='mx-auto my-0 flex max-w-screen-2xl flex-col bg-slate-900 px-4 text-white md:px-16'>
      {renderProjects}
    </div>
  );
}

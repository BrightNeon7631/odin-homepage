import SkillsLogo from './SkillsLogo';
import { skillsData } from '../data/skillsData';

const renderSkills = skillsData.map((skill) => {
  return <SkillsLogo key={skill.name} image={skill.image} name={skill.name} />;
});

export default function Skills() {
  return (
    <div id='skills' className='mx-auto my-0 max-w-screen-2xl rounded-lg bg-slate-800 px-4 py-12 text-white md:px-16'>
      <div className='flex flex-col items-center gap-2'>
        <span className='rounded-md bg-gray-500 px-2 py-1 text-lg'>Skills</span>
        <div>Tools and technologies.</div>
      </div>
      <div className='mt-4 grid grid-cols-[repeat(auto-fill,minmax(102px,1fr))] gap-4'>
        {renderSkills}
      </div>
    </div>
  );
}


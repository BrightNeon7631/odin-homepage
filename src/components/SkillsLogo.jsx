export default function SkillsLogo(props) {
  return (
    <div className='flex flex-col items-center text-white'>
      <img
        className='h-24 max-w-24 max-sm:h-20 grow-0'
        src={props.image}
        alt={props.name}
      />
      <div>{props.name}</div>
    </div>
  );
}

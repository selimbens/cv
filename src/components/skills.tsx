export default function Skills({
  skillsGroup,
  className,
}: {
  skillsGroup: any;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-lg capitalize">{skillsGroup.category}</h3>
      <div className="flex flex-wrap gap-1">
        {skillsGroup.skills.map((skill: string, index: number) => (
          <span
            key={`skill-${index}`}
            className="bg-slate-500 text-white rounded px-1 flex-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

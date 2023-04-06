export default function Experience({
  experience,
  className,
}: {
  experience: any;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-xl">
        {experience.title} |{" "}
        <a href={experience.website} target="_blank">
          {experience.company}
        </a>
      </h3>
      <div className="flex justify-between text-gray-600 italic">
        <span>
          {experience.started_at} - {experience.ended_at}
        </span>
        {experience.location}
      </div>
      <small>Tasks</small>
      {experience.tasks.length && (
        <ul className="list-disc list-inside">
          {experience.tasks.map((task: string, index: number) => (
            <li key={`experience_task-${index}`}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

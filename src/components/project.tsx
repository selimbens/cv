import { ProjectType } from "../types";

export default function Project({
  project,
  className,
}: {
  project: ProjectType;
  className: string;
}) {
  return (
    <div className={className}>
      <div className="flex justify-between mb-1">
        <h3 className="font-bold">{project.title}</h3>
        <span>{project.date}</span>
      </div>
      <ul className="list-disc list-inside">
        {project.tasks.map((task: string, index: number) => (
          <li key={`project_task-${index}`} className="mb-1">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

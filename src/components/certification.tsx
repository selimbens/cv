import React from "react";

export default function Certification({
  certification,
  className,
}: {
  certification: any;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-lg">{certification.title}</h3>
      <ul className="list-inside">
        {certification.skills.map((skill: string, index: number) => (
          <li key={`certification_skill-${index}`} className=" list-disc">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

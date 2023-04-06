export default function Info({
  info,
  className,
}: {
  info: any;
  className?: string;
}) {
  const socials = info.links.map((link: string) => ({
    text: link,
    url: link.includes("@") ? `mailto:${link}` : `https://www.${link}`,
  }));
  return (
    <div className={className}>
      <div className="flex justify-between mb-2">
        <div>
          <h1 className="text-2xl uppercase font-medium">{info.full_name}</h1>
          <h2>{info.job_title}</h2>
        </div>
        <div>
          <ul>
            <li className="space-x-2">
              Fluent in:{" "}
              {info.languages.map((lang: string, index: number) => (
                <span key={`language-${index}`}>{lang}</span>
              ))}
            </li>
            <li>
              <address>{info.address}</address>
            </li>
            <li>
              <a href={`tel:${info.telephone}`}>{info.telephone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between border-t py-4">
        {socials.map((link: { text: string; url: string }, index: number) => (
          <a key={`link-${index}`} href={link.url} target="_blank">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

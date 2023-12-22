import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="border p-3 rounded-xl space-y-2 hover:shadow-md flex flex-col">
      <h1>{project.name}</h1>
      <div className="w-full h-52 overflow-hidden">
        <Image
          src={`${project.url_image}`}
          alt={`${project.alt_image}`}
          className="w-auto rounded-lg border"
          width={1000}
          height={1000}
        />
      </div>
      <p className="text-sm text-slate-800 h-20">{project.description}</p>
      <div className="flex justify-around gap-5">
        <Link
          href={`${project.url_github}`}
          className="w-full py-2 text-center rounded-md bg-slate-900 text-white font-bold hover:opacity-85"
        >
          Git
        </Link>
        <Link
          href={`${project.url_live}`}
          className="w-full py-2 text-center rounded-md bg-slate-900 text-white font-bold hover:opacity-85"
        >
          Live
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

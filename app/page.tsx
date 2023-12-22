import Image from "next/image";
import Photo from "./Components/Photo";
import Description from "./Components/Description";
import ProjectCard from "./Components/ProjectCard";

const projects = [
  {
    name: "Propz",
    description: `A MERN stack application connecting property buyers and sellers. Features include form and image uploads,
JWT/bcrypt/Google OAuth authentication, and a search filter.`,
    url_image: "/propz.png",
    url_github: "https://github.com/nabilfaturr/propz",
    url_live: "https://propz.onrender.com",
    alt_image: "propz-image",
  },
  {
    name: " NextJS Dashboard",
    description: `Simple dashboard built with Next 14, PostgreSQL, Prisma, TailwindCSS`,
    url_image: "/next-dashboard.png",
    url_github: "https://github.com/nabilfaturr/next-dashboard",
    url_live: "https://next-course-js-dashboard.vercel.app/dashboard",
    alt_image: "propz-image",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <article className="flex justify-between items-center gap-4">
          <Photo />
          <Description />
        </article>
      </section>
      <section>
        <h1 className="text-lg font-bold">Projects</h1>
        <div className="flex mt-5 gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

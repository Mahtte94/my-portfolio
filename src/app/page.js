import { getProjects } from "../../sanity/queries.js";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <Image
            src={project.image}
            width={500}
            height={500}
            alt={project.title}
          />
          <p>{project.title}</p>
        </div>
      ))}
    </div>
  );
}

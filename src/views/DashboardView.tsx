import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/api/ProjectApi";

export default function DashboardView() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) return "Cargando...";

  if (data)
    return (
      <>
        <h1 className="text-5xl font-black">Mis proyectos</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          Maneja y administra tus proyectos
        </p>
        <nav className="my-5">
          <Link
            className="bg-purple-500 hover:bg-purple-600 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to="/projects/create"
          >
            Nuevo proyecto
          </Link>
        </nav>
        {data.length ? (
          data.map((project) => <p key={project._id}>{project.projectName}</p>)
        ) : (
          <p className="text-center py-20">
            No hay proyectos aún <br/>
            <Link
              className="text-fuchsia-600 font-bold"
              to="/projects/create"
            >Crear proyecto</Link>
          </p>
        )}
      </>
    );
}

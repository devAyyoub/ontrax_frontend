import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/hooks/useAuth";

export default function AppLayout() {
  const navigate = useNavigate()
  const { data, isError, isLoading } = useAuth();
  if (isLoading) return "Cargando...";
  if (isError) {
    navigate("/auth/login")
  }
  if (data)
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white py-5">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="w-64">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <NavMenu
              name={data.name}
            />
          </div>
        </header>

        <main className="flex-grow">
          <section className="max-w-screen-2xl mx-auto mt-10 p-5">
            <Outlet />
          </section>
        </main>

        <footer className="py-5">
          <p className="text-center">
            Todos los derechos reservados {new Date().getFullYear()}
          </p>
        </footer>

        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          autoClose={3000}
          transition={Bounce}
        />
      </div>
    );
}

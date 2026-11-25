import Inicio from "../page/Inicio";
import Contacto from "../page/Contacto";
import Obras from "../page/Obras";
import Principios from "../page/Principios";
import Estudios from "../page/Estudios";
import Procesos from "../page/Procesos";

export let router = [
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/Contacto",
    element: <Contacto />
  },
  {
    path: "/Obras",
    element: <Obras />
  },
  {
    path: "/Principios",
    element: <Principios />
  },
  {
    path: "/Estudios",
    element: <Estudios />
  },
  {
    path: "/Procesos",
    element: <Procesos />
  }
]
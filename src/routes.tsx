import { useRoutes } from "react-router-dom";
import { PokemonPage } from "./pages/Pokemon";

const routes = [
  {
    path: "/",
    element: <PokemonPage />,
  },
];

export const Routes = () => {
  const element = useRoutes([...routes]);
  return element;
};

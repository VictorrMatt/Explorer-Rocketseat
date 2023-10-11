import { Routes, Route } from "react-router-dom";

import { Movie_Create } from "../pages/Movie_Create";
import { Home } from "../pages/Home";
import { Perfil } from "../pages/Perfil";
import { Movie_Preview } from "../pages/Movie_Preview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Movie_Create />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/preview/:id" element={<Movie_Preview />} />
    </Routes>
  );
}

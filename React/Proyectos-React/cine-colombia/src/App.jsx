import { useState, useEffect } from "react";
import TarjetaPelicula from "./components/TarjetaPelicula.jsx";
import "./App.css";
import buscadorIcono from "./buscador.svg";

const API_URL = "http://www.omdbapi.com/?apikey=e416a5db";
function App() {
  const [movies, setMovies] = useState([]);
  const [busquedaParam, setBusquedaParam] = useState("");
  const buscadorCine = async (titulo) => {
    const response = await fetch(`${API_URL}&s=${titulo}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    buscadorCine("rocky");
  }, []);
  return (
    <div className="app">
      <h1>Cine Colombia</h1>
      <div className="busqueda">
        <input
          placeholder="Buscador de Peliculas"
          value={busquedaParam}
          onChange={(e) => setBusquedaParam(e.target.value)}
        />
        <img
          src={buscadorIcono}
          alt="Buscador"
          onClick={() => buscadorCine(busquedaParam)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="contenedor">
          {movies.map((movie, index) => (
            <TarjetaPelicula movie1={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No se Encontraron Peliculas</h2>
        </div>
      )}
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from "./views/layout";
import Home from "./views/home";
import Pokedex from "./views/pokedex";
import Pokemon from "./views/pokemon";

function App() {
  return (
    <div className="App bg-slate-50 min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="pokedex/:id" element={<Pokemon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

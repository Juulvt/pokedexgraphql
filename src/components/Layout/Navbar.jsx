import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="w-full bg-white font-bold">
        <div className="container mx-auto flex flex-row justify-between items-center h-20">
          <div className="h-full p-3">
              <img className="h-full" src="/pokeball.png"/>
          </div>
          <div className="flex flex-row gap-3 justify-end">
              <Link className="hover:text-yellow-400" to="/">Home</Link>
              <Link className="hover:text-yellow-400" to="/pokedex">Pokedex</Link>
          </div>
        </div>
    </nav>;
}
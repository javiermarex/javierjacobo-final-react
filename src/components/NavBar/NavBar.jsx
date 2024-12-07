import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function NavBar() {
  const [isProductsMenuOpen, setProductsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-300 hover:text-white">Inicio</a>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <a href="/" className="text-gray-300 hover:text-white">
                Productos
              </a>
              {/* Submenú desplegable */}
              {isProductsMenuOpen && (
                <ul className="absolute flex flex-col bg-gray-700  p-2 space-y-2 rounded shadow-lg">
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white"
                      to="/category/construccion"
                    >
                      Construcción
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white"
                      to="/category/aridos"
                    >
                      Áridos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white"
                      to="/category/herramientas"
                    >
                      Herramientas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white"
                      to="/category/aislantes"
                    >
                      Aislantes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white"
                      to="/category/pinturas"
                    >
                      Pínturas
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#" className="text-gray-300 hover:text-white">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
            </li>
          </ul>
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

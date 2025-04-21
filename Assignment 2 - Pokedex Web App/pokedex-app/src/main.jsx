import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createHashRouter} from 'react-router-dom'
import './assets/styles/index.css'

// Import routed page elements:
import PokedexPage from './routes/PokedexPage.jsx'
import PokemonPage from './routes/PokemonPage.jsx'
import ExceptionPage from './routes/ExceptionPage.jsx'
import AboutPage from './routes/AboutPage.jsx'

const router = createHashRouter([
  {
    path: "/pokedex",
    element: <PokedexPage />
  },
  {
    path: "/pokedex/:index",
    element: <PokemonPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/exception/:exceptionMsg",
    element: <ExceptionPage />
  },
  {
    // Ensures any requests to non-existent pages on the /* endpoint are re-routed to the pokedex page. (i.e. /index routes to /pokedex)
    path: "/*",
    element: <PokedexPage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

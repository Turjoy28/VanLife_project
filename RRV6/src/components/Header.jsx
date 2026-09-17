import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">#VanLife</Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Host
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}


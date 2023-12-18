import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink exact to="/" className="navbar-link" activeClassName="active">About</NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/resume" className="navbar-link" activeClassName="active">Resume</NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/blog" className="navbar-link" activeClassName="active">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

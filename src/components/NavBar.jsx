import { Home, ShoppingCart } from "lucide-react"
import "../styles/nav.css"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav id="navbar">
      <div>
        <h1>Vint-Wear</h1>
        <ul>
          <li>
            <Link to="/">
              <Home />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

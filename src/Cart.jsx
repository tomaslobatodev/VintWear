import { useStore } from "./context/StoreContext"
import NavBar from "./components/NavBar"
import "./styles/cart.css"
import { Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function Cart() {
  const { cartItems, removeFromCart } = useStore()

  return (
    <>
      <NavBar />
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.img} alt="" />
              <span>{item.name}</span>
            </div>
            <div>
              <button onClick={() => removeFromCart(item)}>
                <Trash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="checkout">
        <Link className="checkout-btn" to="/checkout">Checkout</Link>
      </div>
    </>
  )
}

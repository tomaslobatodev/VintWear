import { useState, useEffect } from "react"
import { useStore } from "./context/StoreContext"
import "./styles/checkout.css"
import { Link } from "react-router-dom"

export default function Checkout() {
  const { cartItems, setCartItems } = useStore()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let calculatedTotal = 0;
    cartItems.forEach((item) => {
      calculatedTotal += item.price;
    });
    setTotal(calculatedTotal);
  }, [cartItems]);

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <ul className="items">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.img} alt="" />
              <span>{item.name}</span>
            </div>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
      <Link className="pay-btn" to="/" onClick={()=>setCartItems([])}>Pay</Link>
    </main>
  )
}
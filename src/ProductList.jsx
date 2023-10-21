import { useStore } from "./context/StoreContext"
import { Check, PlusSquare } from "lucide-react"
import "./styles/shop.css"
import PropTypes from "prop-types"

export default function ProductList({ products }) {
  const { addToCart } = useStore()

  return (
    <main>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt={product.name} />
            <div>
              <span>{product.name}</span>
              {product.onCart ? (
                <button className="cart-button" disabled>
                  <Check /> <span>In Cart</span>
                </button>
              ) : (
                <button
                  className="cart-button"
                  onClick={() => addToCart(product)}
                >
                  <PlusSquare /> <span>Add to Cart</span>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
}

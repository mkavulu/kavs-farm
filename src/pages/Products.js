import "./Products.css";
import { Link } from "react-router-dom";
import milkImg from "../assets/milk.jpg";
import veggiesImg from "../assets/veggies.jpg";
import eggsImg from "../assets/eggs.jpg";

function Products() {
  const items = [
    { name: "Fresh Milk", price: "KES 50/Litre", image: milkImg },
    { name: "Organic Vegetables", price: "KES 100/Basket", image: veggiesImg },
    { name: "Free-range Eggs", price: "KES 15 each", image: eggsImg }
  ];

  return (
    <section className="products">
      <div className="products-banner">
        <h1>Our Products</h1>
        <p>Fresh, organic, and sustainably sourced for your family</p>
      </div>

      <div className="product-grid">
        {items.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            {/* Pass product name to Contact page */}
            <Link
              to="/contact"
              state={{ product: item.name }}
              className="order-btn"
            >
              Order Now
            </Link>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="products-footer">
        <h2>Visit Us</h2>
        <p>Kavs Farm Enterprises — Bringing nature’s best to your table.</p>
        <p>📍 Location: Nairobi, Kenya</p>
        <p>📞 Phone: +254 710 165 356</p>
        <p>✉️ Email: kavsenterprises2000@gmail.com</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to Top
        </button>
        <p className="footer-note">© 2026 Kavs Farm Enterprises. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Products;

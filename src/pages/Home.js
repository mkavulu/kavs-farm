import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Kavs Farm Enterprises</h1>
          <p>Fresh produce, sustainable farming, and quality service.</p>
          <Link to="/products" className="hero-btn">
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;

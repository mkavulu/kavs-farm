import "./About.css";
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    At Kavs Farm Enterprises, we are passionate about sustainable farming
                    and delivering fresh, organic produce to our community. Our mission is
                    to combine modern agricultural practices with traditional values,
                    ensuring healthy food and a greener future.
                </p>
                <p>
                    From dairy and poultry to fresh vegetables, we pride ourselves on
                    quality, transparency, and supporting local livelihoods. Every product
                    we offer is nurtured with care and dedication.
                </p>
            </div>

            <div className="about-gallery">
                <img src={farm1} alt="Farm fields" />
                <img src={farm2} alt="Fresh produce" />
                <img src={farm3} alt="Livestock" />
            </div>

            <div className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <img src={team1} alt="Founder" />
                        <h3>Ammy Ndinda</h3>
                        <p>Founder & CEO — Visionary leader passionate about sustainable farming and community empowerment.</p>
                    </div>
                    <div className="team-card">
                        <img src={team2} alt="Farm Manager" />
                        <h3>Moses Mutuku</h3>
                        <p>Farm Manager — Oversees daily operations, ensuring quality produce and animal welfare.</p>
                    </div>
                    <div className="team-card">
                        <img src={team3} alt="Sales Lead" />
                        <h3>Kilonzo</h3>
                        <p>Sales & Marketing Lead — Connects our farm products with customers and local markets.</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="about-footer">
                <h2>Visit Us</h2>
                <p>Kavs Farm Enterprises — Bringing nature’s best to your table.</p>
                <p>📍 Location: Nairobi, Kenya</p>
                <p>📞 Phone: +254 710 165 356</p>
                <p>✉️ Email: kavsenterprises2000@gmail.com</p>
                <div className="social-links">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                </div>

                {/* Back to Top Button */}
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

export default About;

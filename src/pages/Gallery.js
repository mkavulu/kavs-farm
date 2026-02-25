import "./Gallery.css";
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import veggiesImg from "../assets/veggies.jpg";
import milkImg from "../assets/milk.jpg";
import eggsImg from "../assets/eggs.jpg";

function Gallery() {
  const photos = [farm1, farm2, farm3, veggiesImg, milkImg, eggsImg];

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Explore moments from our farm — fresh produce, livestock, and daily life.</p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div className="gallery-card" key={index}>
            <img src={photo} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

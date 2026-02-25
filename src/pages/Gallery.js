import { useState } from "react";
import "./Gallery.css";

import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import veggiesImg from "../assets/veggies.jpg";
import milkImg from "../assets/milk.jpg";
import eggsImg from "../assets/eggs.jpg";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const photos = [
    { src: farm1, title: "Farm Fields" },
    { src: farm2, title: "Fresh Produce" },
    { src: farm3, title: "Livestock" },
    { src: veggiesImg, title: "Organic Vegetables" },
    { src: milkImg, title: "Fresh Milk" },
    { src: eggsImg, title: "Free-range Eggs" }
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Explore moments from our farm — fresh produce, livestock, and daily life.</p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div
            className="gallery-card"
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img src={photo.src} alt={photo.title} />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={photos}
        />
      )}
    </section>
  );
}

export default Gallery;


import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import data from "../../data/products.json";
import styles from "../ImageCarousel/ImageCarousel.module.css";

export default function ImageCarousel({ productId }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Finde das Produkt mit der gegebenen ID
  const selectedProduct = data.find((product) => product.id === productId);
  const imagePaths = selectedProduct ? selectedProduct.media : []; // Wenn das Produkt Objekt gefunden wurde, wird das entsprechende image_path Array ausgewählt

  // Wechseln auf das vorherige Bild
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Wechseln auf das nächste Bild
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      onSelect(); // Initiales Setzen des ausgewählten Index
    }
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {imagePaths.length > 0 ? (
          imagePaths.map((item, index) => (
            <div className={styles.emblaSlide} key={index}>
              {item.type === "image" ? (
                <img src={item.path} alt={`Slide ${index + 1}`} />
              ) : item.type === "video" ? (
                <div className={styles.video}>
                  <iframe
                    src={item.path}
                    width="650"
                    height="450"
                    allow="accelerometer; autoplay; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                    title={`Video ${index + 1}`}
                  ></iframe>
                </div>
              ) : (
                <p>Unsupported media type</p>
              )}
            </div>
          ))
        ) : (
          <p>No media available</p>
        )}
      </div>

      <div className={styles.emblaDots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.emblaDot} ${
              index === selectedIndex ? styles.isSelected : ""
            }`}
            onClick={() => emblaApi.scrollTo(index)}
          />
        ))}
      </div>

      <button className={styles.prevButton} onClick={scrollPrev}>
        &lt; {/* Links Pfeil */}
      </button>
      <button className={styles.nextButton} onClick={scrollNext}>
        &gt; {/* Rechts Pfeil */}
      </button>
    </div>
  );
}

ImageCarousel.propTypes = {
  productId: PropTypes.number.isRequired,
};

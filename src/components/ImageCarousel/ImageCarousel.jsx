import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import styles from "../ImageCarousel/ImageCarousel.module.css";
import img from "/assets/productImg/Unbenannt-1.png";

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

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
        <div className={styles.emblaSlide}>
          <img src={img} alt="Slide 1" />
        </div>
        <div className={styles.emblaSlide}>
          <img src={img} alt="Slide 2" />
        </div>
        <div className={styles.emblaSlide}>
          <img src={img} alt="Slide 3" />
        </div>
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

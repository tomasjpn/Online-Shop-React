import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import styles from "../ImageCarousel/ImageCarousel.module.css";
import img from "/assets/productImg/Unbenannt-1.png";

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Wechseln auf das vorherige Bild
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Wechseln auf das nächste Bild
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <div className={styles.emblaSlide}>
          <img src={img}></img>
        </div>
        <div className={styles.emblaSlide}>
          {" "}
          <img src={img}></img>
        </div>
        <div className={styles.emblaSlide}>
          {" "}
          <img src={img}></img>
        </div>
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

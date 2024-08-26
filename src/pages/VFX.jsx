import { gif1, gif2, gif3 } from "../assets/videoImports.js";
import BackgroundManager from "../components/BackgroundManager.js";
import Navbar from "../components/Navbar.jsx";
import styles from "../styles/VFX.module.css";
import "../styles/index.css";

const VFX = () => {
  return (
    <div>
      <BackgroundManager />
      <Navbar fixed={true} />
      <div className={styles.mainContainer}></div>
      {/*Section: Praktikum Projekt */}
      <section className={styles.gifContainer}>
        <div className={styles.backgroundDiv1}></div>
        <div className={styles.gifGrid}>
          <img src={gif1} alt="verticalBanner" className={styles.item1} />
          <img src={gif2} alt="square" className={styles.item2} />
          <img src={gif3} alt="square" className={styles.item3} />
        </div>
        <div className={styles.textDiv}>
          <h1>POLIS ANIMATION</h1>
          <p>
            Praktikum bei Müller + Busmann GmbH Verlag - Animationen für Polis -
            2022 <br></br>Für den Arbeitsauftrag erhielt ich statische
            Bildelemente, die ich nach den Wünschen des Arbeitsgebers in ein
            interaktives Design bzw. einer Animation zusammenstellen sollte. Das
            Konzept der Animationen durfte ich mit viel Freiraum entwerfen,
            lediglich die Schriftfont sowie Farbpalette waren vorgegeben.
          </p>
        </div>
      </section>

      {/*Section: Englisch Projekt */}
      <section className={styles.mainContainerEnglish}>
        <div className={styles.englishVideo}>
          <iframe
            src="https://drive.google.com/file/d/1_uiGMI8o_snSmzqlSIRQlb9uggj-Q5zk/preview"
            width="800 "
            height="450 "
            allow="accelerometer; autoplay; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            title="Google Drive Video"
          ></iframe>
        </div>
        <div className={styles.textContainerEnglish}>
          <h1>ENGLISCH PROJEKT</h1>
          <p>Raleigh Internationl Ad - Simple Promotion - Englisch Kurs 2022</p>
          <p>
            In der Erprobungsstufe (EF) 10. Klasse Gymnasium Englisch Kurs
            sollten wir in der Gruppenarbeit ein Werbevideo für eine beliebige
            Hilfsorganisation erstellen und So haben wir uns für die
            Organisation Raleigh entschieden. Hierbei entschied ich mich für
            eine 2D Animation, denn dieses Format eignet sich für die
            verständliche Wiedergabe sowie Repräsentation der Werte der
            Organisation Raleigh. Da wir keinen Synchronsprecher bzw. Erzähler
            zur Verfügung hatten, habe ich das Werbevideo ausschließlich auf die
            visuelle Erzählung durch Text und Bildern beschränkt. In Kombination
            mit der Hintergrundmusik wird das Interesse sowie Aufmerksamkeit
            gestärkt und das gesamte Projekt wirkt wie ein kleiner Film.
          </p>
        </div>
      </section>

      {/*Section: Musik Projekt*/}
      <section className={styles.mainContainerMusik}>
        <div className={styles.textContainerMusik}>
          <h1>MUSIK PROJEKT</h1>
          <p>Mozart Podcast -Musik Kurs - 2021</p>
          <p>
            In der 9.Klasse Gymnasium Musik Kurs sollten wir ein Podcast drehen
            bezüglich des Künstlers Wolfgang Amadeus Mozart und zu beachten war
            die Inhaltliche Darstellung, bei der seine Biografie im Mittelpunkt
            stand. Hierbei haben wir uns dazu entschieden, dass ich den Podcast
            in Form eines Erklärungsvideo durch Animationen visualisiere. Daher
            entschied ich mich für die 2D Animation, denn diese ermöglicht eine
            verständliche Darstellung des Inhalts und durch die Bewegende
            Inhalte wird die Aufmerksamkeit des Publikums aufrecht erhalten. Der
            Text wurde von meinem Mitschüler Julian P. eingesprochen.
          </p>
        </div>
        <div className={styles.musikVideo}>
          <iframe
            src="https://drive.google.com/file/d/1CjL6N9Ci3bTjRI6Wn-HAiqkBahEFrocf/preview"
            width="800 "
            height="450 "
            allow="accelerometer; autoplay; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            title="Google Drive Video"
          ></iframe>
        </div>
      </section>

      {/*Section: Random Shapes Projekt*/}
      <section className={styles.mainContainerShapes}>
        <div className={styles.shapesVideo}>
          <iframe
            src="https://drive.google.com/file/d/1RIof005uCU_W3rr4gkO8pfm8aTUrOQ2W/preview"
            width="800 "
            height="450 "
            allow="accelerometer; autoplay; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            title="Google Drive Video"
          ></iframe>
        </div>

        <div className={styles.textContainerShapes}>
          <h1>RANDOM SHAPES</h1>
          <p>
            Hierbei handelt es sich nur um eine Übung mit der Animation von
            verschiedenen geometrischen Objekten in After Effects. Das Konzept
            basiert darauf, dass alle Elemente in einem dynamsichen Zusammenhang
            stehen, sowie zwischeneinander Interagieren und der Flow des
            Projekts stets aufrecht erhalten bleibt. Daher bleiben alle Elemente
            in Bewegung mit flüssigen Übergangen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VFX;

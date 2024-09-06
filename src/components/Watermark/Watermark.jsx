import image from "../../assets/25231.png";
import styles from "../Watermark/Watermark.module.css";

const Watermark = () => {
  return (
    <div className={styles.mainContainer}>
      {" "}
      <a href="https://github.com/tomasjpn?tab=repositories">
        {" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <p style={{ color: "#888", fontSize: "12px" }}>Tomas Pham 2024</p>
          <img
            src={image}
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "10px",
              opacity: "50%",
            }}
          ></img>
        </div>
      </a>
    </div>
  );
};

export default Watermark;

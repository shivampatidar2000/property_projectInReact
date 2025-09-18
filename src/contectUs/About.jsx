import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.mainContainer}>
      {/* Heading */}
      <h2 className={styles.dream}>YOUR DREAM HOUSE IS ONE STEP AWAY!</h2>

      {/* Three Sections */}
      <div className={styles.threeDiv}>
        {/* Call Us */}
        <div>
            <p style={{fontSize: "2.2rem"}}>📞</p>
          <p>Call Us</p>
          <p>+91 12345 67890</p>
          <p>Mon - Fri | 9:00 AM - 6:00 PM</p>
        </div>

        {/* Find Us */}
        <div>
            <p style={{fontSize: "2.2rem"}}>📍</p>
          <p>Find Us</p>
          <p>123 Street Name</p>
          <p>Indore, MP 452001</p>
        </div>

        {/* Email Us */}
        <div>
            <p style={{fontSize: "2.2rem"}}>📧</p>
          <p> Email Us</p>
          <p>support@example.com</p>
          <p>We reply within 24 hours</p>
        </div>
      </div>
    </div>
  );
}

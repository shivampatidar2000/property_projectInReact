import styles from "./Contect.module.css";

export default function Contect() {
  return (
    <div className={styles.mainCont}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <p className={styles.home}>
          FIND YOUR <br /> NEXT HOME
        </p>
        <p className={styles.para}>
          I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add your
          own content and make changes to the font.
        </p>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <p className={styles.home}>CONTACT US</p>

        <form className={styles.form}>
          {/* First & Last Name */}
          <div className={styles.inputGroup}>
            <div>
              <label className={styles.field}>First Name*</label>
              <input type="text" className={styles.inputField} />
            </div>
            <div>
              <label className={styles.field}>Last Name*</label>
              <input type="text" className={styles.inputField} />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={styles.field}>Email*</label>
            <input type="email" className={styles.inputField} />
          </div>

          {/* Radio buttons */}
          <div className={styles.radioGroup}>
            <p className={styles.field}>Interested in:</p>
            <div>
              <input type="radio" id="buy" name="interest" value="buy" />
              <label htmlFor="buy">Buy</label>

              <input type="radio" id="rent" name="interest" value="rent" />
              <label htmlFor="rent">Rent</label>

              <input type="radio" id="other" name="interest" value="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={styles.field}>Message</label>
            <textarea className={styles.textArea}></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Submit</button>

          {/* Submit Button */}
        </form>
      </div>
    </div>
  );
}

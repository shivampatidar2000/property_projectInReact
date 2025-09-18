import { useState } from "react";
import styles from "./Contect.module.css";
import emailjs from "emailjs-com";

export default function Contect() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_1azro7l", // Replace with your EmailJS service ID
        "template_uzt5app", // Replace with your EmailJS template ID
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
        },
        "zmi4YxXDvh-htbGfE" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            interest: "",
            message: "",
          });
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };
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

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* First & Last Name */}
          <div className={styles.inputGroup}>
            <div>
              <label className={styles.field}>First Name*</label>
              <input name="firstname"
                type="text"
                className={styles.inputField}
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={styles.field}>Last Name*</label>
              <input name="lastname"
                type="text" className={styles.inputField}
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={styles.field}>Email*</label>
            <input name="email"
              type="email"
              className={styles.inputField}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Radio buttons */}
          <div className={styles.radioGroup}>
            <p className={styles.field}>Interested in:</p>
            <div>
              <input
                type="radio"
                id="buy"
                name="interest"
                value="buy"
                checked={formData.interest === "buy"}
                onChange={handleChange}
              />
              <label htmlFor="buy">Buy</label>

              <input
                type="radio"
                id="rent"
                name="interest"
                value="rent"
                checked={formData.interest === "rent"}
                onChange={handleChange}
              />
              <label htmlFor="rent">Rent</label>

              <input
                type="radio"
                id="other"
                name="interest"
                value="other"
                checked={formData.interest === "other"}
                onChange={handleChange}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={styles.field}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textArea}></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Submit</button>

          {/* Submit Button */}
        </form>
      </div>
    </div>
  );
}

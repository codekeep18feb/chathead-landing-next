"use client";
import React, { useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fd = new FormData();
    fd.append("email", formData.email);
    fd.append("email_type", "GET_IN_TOUCH");
    fd.append("to_pm", "to_pm"); // replace with actual recipient if needed
    fd.append("name", formData.name);
    fd.append("phone", formData.phone);
    fd.append("company", formData.company || "");
    fd.append("message", formData.message);
    fd.append("platform", 1); // <-- add this line

    try {
      const response = await fetch(
        "https://email.magicchat.io/prod/send_email",
        {
          method: "POST",
          headers: {
            "x-api-key": "justanything", // replace with real API key
          },
          body: fd,
        }
      );

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      console.log("✅ Email sent successfully:", data);

      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Contact Us</h2>

      <div className={styles.infoSection}>
        <h3>📧 Email & 📞 Phone</h3>
        <p className={styles.contactItem}>Email: support@magicchat.io</p>
        <p className={styles.contactItem}>Phone: +91 (798) 231-1249</p>
      </div>

      <div className={styles.infoSection}>
        <h3>💬 Social Media</h3>
        <p>
          <a href="#" className={styles.socialLink}>
            LinkedIn
          </a>{" "}
          / <a href="#" className={styles.socialLink}>Twitter</a> /{" "}
          <a href="#" className={styles.socialLink}>GitHub</a>
        </p>
      </div>

      <div className={styles.infoSection}>
        <h3>🕒 Office Hours</h3>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: Closed</p>
        <p>Sunday: Closed</p>
      </div>

      <div className={styles.infoSection}>
        <h3>✉️ Send us a Message</h3>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>
            Full Name *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </label>

          <label>
            Email Address *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </label>

          <label>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </label>

          <label>
            Message *
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </label>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

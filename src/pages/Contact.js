import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const formRef = useRef();
  const location = useLocation();
  const product = location.state?.product || "";

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  // Pre-fill message if product was passed
  useEffect(() => {
    if (product) {
      setForm((prev) => ({
        ...prev,
        message: `I would like to order: ${product}`
      }));
    }
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jjlpruc",
        "template_46no0bc",
        formRef.current,
        { publicKey: "mpQpE1zwdLDW9pTaR" }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          window.location.href = `mailto:kavsenterprises2000@gmail.com?subject=Contact from ${form.user_name}&body=Name: ${form.user_name}%0AEmail: ${form.user_email}%0AMessage: ${form.message}`;
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={form.user_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={form.user_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

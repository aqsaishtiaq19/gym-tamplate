import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://gym-backend-production-0ab8.up.railway.app/api/messages",
        formData
      );

      alert(response.data.message);

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div id="contact">
      <h1>Let's Build Your Strength Together</h1>
      <br />
      <h1>
        Contact <br />
        <span>With Our</span>
        <br />
        Experts
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Type your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Let us know about your opinion..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
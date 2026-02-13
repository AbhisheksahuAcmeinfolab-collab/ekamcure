"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [reportFile, setReportFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("report", reportFile);
      formDataToSend.append("pageUrl", window.location.href);


      const res = await fetch("/api/send", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setReportFile(null);
        router.push("/contact/thank-you");
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("FORM ERROR:", err);
      alert("Error sending message!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-md"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone No."
        value={formData.phone}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-md"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-md"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        className="w-full border px-4 py-2 rounded-md"
        required
      />

      <input
        type="file"
        required
        onChange={(e) => setReportFile(e.target.files[0])}
        className="w-full border px-4 py-2 rounded-md"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-900 text-white px-6 py-2 rounded-md w-full"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

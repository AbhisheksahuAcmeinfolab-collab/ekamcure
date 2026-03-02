"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots, FaPaperclip } from "react-icons/fa";

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
    <div
      style={{
        background: "linear-gradient(150deg, #1e96e8 0%, #1255b0 60%, #0d3d8a 100%)",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "420px",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        boxShadow: "0 20px 60px rgba(13,61,138,0.45), 0 4px 16px rgba(0,0,0,0.15)",
      }}
    >
      {/* Header */}
      <div style={{ padding: "28px 28px 20px 28px", borderBottom: "1px solid rgba(255,255,255,0.15)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.3) 100%)" }} />
        <h2 style={{ color: "#fff", fontSize: "26px", fontWeight: "700", margin: "0 0 4px 0" }}>Book Free Consultation
</h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", margin: 0 }}>We'll get back to you within 24 hours</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px 28px 28px 28px" }}>

        {/* Name */}
        <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
            <FaUser size={14} />
          </span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit" }}
          />
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
            <FaPhone size={14} />
          </span>
          <input
            type="text"
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit" }}
          />
        </div>

        {/* Email */}
        <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
            <FaEnvelope size={14} />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit" }}
          />
        </div>

        {/* Message */}
        <div style={{ display: "flex", alignItems: "flex-start", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", paddingTop: "13px", color: "#1565c0" }}>
            <FaCommentDots size={14} />
          </span>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="2"
            required
            style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", padding: "12px 14px 12px 0", fontFamily: "inherit", resize: "vertical", lineHeight: "1.5" }}
          />
        </div>

        {/* File */}
        <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
            <FaPaperclip size={14} />
          </span>
          <input
            type="file"
            required
            onChange={(e) => setReportFile(e.target.files[0])}
            style={{ flex: 1, border: "none", outline: "none", fontSize: "13px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit", cursor: "pointer" }}
          />
        </div>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", margin: "-8px 0 0 0" }}>
          Please upload file with extension (jpg, png, pdf).
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "transparent",
            color: "#fff",
            border: "2px solid rgba(255,255,255,0.9)",
            borderRadius: "10px",
            padding: "13px",
            fontWeight: "700",
            fontSize: "14px",
            letterSpacing: "2px",
            width: "100%",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.75 : 1,
            transition: "background 0.2s, color 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#1565c0"; }}}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
        >
          {loading ? (
            <>
              <span style={{ width: "14px", height: "14px", border: "2px solid rgba(255,255,255,0.4)", borderTop: "2px solid #fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
              Sending...
            </>
          ) : "Submit"}
        </button>
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
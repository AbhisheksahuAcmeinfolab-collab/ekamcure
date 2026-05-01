"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots, FaPaperclip, FaChevronUp } from "react-icons/fa";

export default function ContactForm() {
  const router = useRouter();
  const [isMinimized, setIsMinimized] = useState(false);
  const userToggledRef = useRef(false);
  const toggleTimerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [reportFile, setReportFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Scroll logic
  useEffect(() => {
    const SCROLL_THRESHOLD = 150;

    const handleScroll = () => {
      if (userToggledRef.current) return;

      const scrollY = window.scrollY;

      if (scrollY > SCROLL_THRESHOLD) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Manual toggle (header click)
  const toggleForm = () => {
    userToggledRef.current = true;
    setIsMinimized((prev) => !prev);

    if (toggleTimerRef.current) clearTimeout(toggleTimerRef.current);
    toggleTimerRef.current = setTimeout(() => {
      userToggledRef.current = false;
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        .contact-form-body {
          max-height: 700px;
          overflow: hidden;
          opacity: 1;
          padding: 24px 28px 28px 28px;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.3s ease,
                      padding 0.35s ease;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-form-body.minimized {
          max-height: 0 !important;
          opacity: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .toggle-chevron {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toggle-chevron.minimized {
          transform: rotate(180deg);
        }

        .toggle-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: background 0.2s;
        }

        .toggle-btn:hover {
          background: rgba(255,255,255,0.35);
        }

        .minimized-badge {
          background: #ff4757;
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 20px;
          margin-left: 8px;
          letter-spacing: 0.5px;
          vertical-align: middle;
        }

        .submit-btn {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.9);
          border-radius: 10px;
          padding: 13px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          width: 100%;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-btn:hover:not(:disabled) {
          background: #fff;
          color: #1565c0;
        }

        .submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }
      `}</style>

      <div
        style={{
          background: "linear-gradient(150deg, #1e96e8 0%, #1255b0 60%, #0d3d8a 100%)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "420px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(13,61,138,0.45), 0 4px 16px rgba(0,0,0,0.15)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        {/* ✅ Header — click to toggle */}
        <div
          onClick={toggleForm}
          style={{
            padding: "22px 24px 18px 24px",
            borderBottom: isMinimized ? "1px solid transparent" : "1px solid rgba(255,255,255,0.15)",
            position: "relative",
            cursor: "pointer",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "border-color 0.3s",
          }}
        >
          {/* Top accent bar */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "4px",
            background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.3) 100%)"
          }} />

          <div>
            <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: "700", margin: "0 0 3px 0" }}>
              Book Free Consultation
              {isMinimized && <span className="minimized-badge">CLICK TO OPEN</span>}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: 0 }}>
              We'll get back to you within 24 hours
            </p>
          </div>

          <div className="toggle-btn">
            <FaChevronUp
              size={13}
              color="white"
              className={`toggle-chevron ${isMinimized ? "minimized" : ""}`}
            />
          </div>
        </div>

        {/* ✅ Form Body — collapses on scroll */}
        <div className={`contact-form-body ${isMinimized ? "minimized" : ""}`}>

          {/* Name */}
          <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
              <FaUser size={14} />
            </span>
            <input
              type="text" name="name" placeholder="Name"
              value={formData.name} onChange={handleChange} required
              style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit" }}
            />
          </div>

          {/* Phone */}
          <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
              <FaPhone size={14} />
            </span>
            <input
              type="text" name="phone" placeholder="Phone No."
              value={formData.phone} onChange={handleChange} required
              style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit" }}
            />
          </div>

          {/* Email */}
          <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
              <FaEnvelope size={14} />
            </span>
            <input
              type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange} required
              style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit" }}
            />
          </div>

          {/* Message */}
          <div style={{ display: "flex", alignItems: "flex-start", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", paddingTop: "13px", color: "#1565c0" }}>
              <FaCommentDots size={14} />
            </span>
            <textarea
              name="message" placeholder="Message"
              value={formData.message} onChange={handleChange}
              rows="2" required
              style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", background: "transparent", color: "#1a1a2e", padding: "12px 14px 12px 0", fontFamily: "inherit", resize: "vertical", lineHeight: "1.5" }}
            />
          </div>

          {/* File */}
          <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.95)", borderRadius: "10px", overflow: "hidden", height: "46px" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px", color: "#1565c0", height: "100%" }}>
              <FaPaperclip size={14} />
            </span>
            <input
              type="file" required
              onChange={(e) => setReportFile(e.target.files[0])}
              style={{ flex: 1, border: "none", outline: "none", fontSize: "13px", background: "transparent", color: "#1a1a2e", height: "100%", padding: "0 14px 0 0", fontFamily: "inherit", cursor: "pointer" }}
            />
          </div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", marginTop: "-8px" }}>
            Please upload file with extension (jpg, png, pdf).
          </p>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="submit-btn"
          >
            {loading ? (
              <>
                <span style={{ width: "14px", height: "14px", border: "2px solid rgba(255,255,255,0.4)", borderTop: "2px solid #fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
                Sending...
              </>
            ) : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}
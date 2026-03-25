"use client";

import Image from "next/image";
import "./card.css";

export default function EkamDigitalCard() {
  return (
    <div className="body-wrapper">

      <div className="card">
        
        <div className="header"></div>

        <div className="owner-section">
          <Image
            src="/qr/Udai-Sir.webp"
            alt="Mr. Udai Singh"
            width={100}
            height={100}
            className="owner-img"
          />

          <h1 className="owner-name">
            Mr. Udai Singh
          </h1>

          <p className="owner-title">
            Your Trusted Global Healthcare Partner
          </p>
        </div>

        <div className="content">

          <a
            href="tel:+919990205353"
            className="btn btn-call"
          >
            <Image
              src="/qr/Call.png"
              alt="Call"
              width={22}
              height={22}
              className="btn-icon"
            />
            Call Now
          </a>

          <a
            href="https://wa.me/919990205353"
            className="btn btn-whatsapp"
          >
            <Image
              src="/qr/Whatsapp.png"
              alt="WhatsApp"
              width={22}
              height={22}
              className="btn-icon"
            />
            WhatsApp Chat
          </a>

          <a
            href="/qr/ekam-contact.vcf"
            className="btn btn-save"
            download
          >
            <Image
              src="/qr/Contact.png"
              alt="Save"
              width={22}
              height={22}
              className="btn-icon"
            />
            Save to Contacts
          </a>

          <a
            href="https://www.ekamcure.com"
            className="btn btn-web"
            target="_blank"
          >
            <Image
              src="/qr/Website.png"
              alt="Web"
              width={22}
              height={22}
              className="btn-icon"
            />
            Visit Website
          </a>

        </div>

        <div className="social-links">

          <a href="https://www.facebook.com/EkamCure/" target="_blank">
            <Image
              src="/qr/facebook-logo.png"
              width={32}
              height={32}
              alt="Facebook"
              className="social-icon"
            />
          </a>

          <a href="https://www.instagram.com/ekamcure/" target="_blank">
            <Image
              src="/qr/Instagram-logo.png"
              width={32}
              height={32}
              alt="Instagram"
              className="social-icon"
            />
          </a>

          <a href="https://www.youtube.com/@EkamCure" target="_blank">
            <Image
              src="/qr/Youtube-Logo.png"
              width={32}
              height={32}
              alt="YouTube"
              className="social-icon"
            />
          </a>

          <a href="https://x.com/EkamCare" target="_blank">
            <Image
              src="/qr/x-logo.png"
              width={32}
              height={32}
              alt="X"
              className="social-icon"
            />
          </a>

        </div>

        <div className="footer">
          © 2026 Ekam Health Services. All rights reserved.
        </div>

      </div>

    </div>
  );
}
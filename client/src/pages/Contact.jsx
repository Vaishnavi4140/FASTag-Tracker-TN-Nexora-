import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "Contact FastagTracker | FASTag Tracking Support";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Contact FastagTracker for FASTag tracking support, toll history help, vehicle management guidance, travel analytics, and fleet management inquiries."
    );
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact FastagTracker</h1>

        <p>
          Need help with FASTag tracking, toll history, vehicle records, or
          travel analytics? We are here to help.
        </p>
      </section>

      <section className="contact-section">
        <h2>How We Can Help</h2>

        <ul>
          <li>FASTag transaction support</li>
          <li>Toll expense questions</li>
          <li>Vehicle management help</li>
          <li>Travel analytics guidance</li>
          <li>Fleet management inquiries</li>
          <li>Business partnerships</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Who Can Contact Us?</h2>

        <p>
          FastagTracker is useful for vehicle owners, daily commuters, fleet
          managers, logistics companies, and transport businesses.
        </p>
      </section>

      <section className="contact-section">
        <h2>Explore FastagTracker</h2>

        <p>
          View our <Link to="/features">features</Link>, check{" "}
          <Link to="/analytics">travel analytics</Link>, manage{" "}
          <Link to="/vehicles">vehicles</Link>, or learn{" "}
          <Link to="/about">about FastagTracker</Link>.
        </p>
      </section>

      <section className="contact-section">
        <h2>Send Us a Message</h2>

        <p>
          Use our contact form for support, feedback, feature requests, or
          business inquiries.
        </p>
      </section>

      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>How can I contact FastagTracker?</h3>
        <p>You can contact us through the contact form.</p>

        <h3>Does FastagTracker support fleet owners?</h3>
        <p>Yes, it supports both individual users and fleet owners.</p>

        <h3>Can I get help with FASTag tracking?</h3>
        <p>
          Yes, FastagTracker helps users manage FASTag transactions and toll
          expenses.
        </p>
      </section>

      <section className="contact-cta">
        <h2>Start Tracking Toll Expenses Easily</h2>

        <p>
          Manage FASTag transactions, vehicle activity, and travel costs from
          one place.
        </p>

        <Link to="/signup" className="cta-btn">
          Get Started Today
        </Link>
      </section>
    </div>
  );
}

export default Contact;
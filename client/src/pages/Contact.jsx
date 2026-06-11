
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}

      <section className="contact-hero">
        <h1>Contact FastagTracker</h1>

        <p>
          Have questions about FASTag tracking, toll expense management,
          vehicle monitoring, or travel analytics?
          Our team is here to help.
        </p>

        <p>
          Whether you're an individual vehicle owner, fleet manager,
          logistics company, or transport business, we would love
          to hear from you.
        </p>
      </section>

      {/* Why Contact Us */}

      <section className="contact-section">
        <h2>How We Can Help</h2>

        <ul>
          <li>FASTag transaction tracking support</li>
          <li>Vehicle management guidance</li>
          <li>Toll expense reporting questions</li>
          <li>Travel analytics assistance</li>
          <li>Fleet management inquiries</li>
          <li>Business partnerships</li>
        </ul>
      </section>

      {/* Audience */}

      <section className="contact-section">
        <h2>Who Uses FastagTracker?</h2>

        <p>
          FastagTracker is designed for vehicle owners,
          families managing multiple vehicles,
          daily commuters, fleet managers,
          logistics companies, and transport businesses.
        </p>

        <p>
          Our platform simplifies FASTag tracking,
          toll management, vehicle expense tracking,
          and travel reporting.
        </p>
      </section>

      {/* Internal Links */}

      <section className="contact-section">
        <h2>Explore FastagTracker</h2>

        <p>
          Learn more about our
          <Link to="/features"> Features </Link>,
          explore
          <Link to="/analytics"> Travel Analytics </Link>,
          manage vehicles through
          <Link to="/vehicles"> Vehicle Management </Link>,
          or read more
          <Link to="/about"> About FastagTracker </Link>.
        </p>
      </section>

      {/* Contact Form Placeholder */}

      <section className="contact-section">
        <h2>Send Us a Message</h2>

        <p>
          Need assistance? Use our contact form and
          we'll get back to you as soon as possible.
        </p>
      </section>

      {/* FAQ */}

      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>How can I contact FastagTracker?</h3>
        <p>
          You can reach us through our contact form
          for support, feedback, or business inquiries.
        </p>

        <h3>Does FastagTracker support fleet owners?</h3>
        <p>
          Yes. FastagTracker is designed for both
          individual vehicle owners and fleet operators.
        </p>

        <h3>Can I get help with FASTag tracking?</h3>
        <p>
          Absolutely. Our platform is focused on helping
          users better manage FASTag transactions and toll expenses.
        </p>
      </section>

      {/* CTA */}

      <section className="contact-cta">
        <h2>Ready to Manage Toll Expenses Smarter?</h2>

        <p>
          Join FastagTracker and gain better visibility
          into FASTag transactions, vehicle activity,
          and travel spending.
        </p>

        <Link to="/signup" className="cta-btn">
          Get Started Today
        </Link>
      </section>

    </div>
  );
}

export default Contact;

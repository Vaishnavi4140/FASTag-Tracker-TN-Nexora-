import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About FastagTracker</h1>

        <p>
          FastagTracker helps you track FASTag transactions, toll expenses,
          and vehicle activity in one simple place.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to make FASTag expense tracking simple, clear, and
          useful for every vehicle owner and fleet manager.
        </p>
      </section>

      {/* Vision Section */}
      <section className="about-section">
        <h2>Our Vision</h2>

        <p>
          We want to help users manage toll payments, travel costs, and vehicle
          records without confusion.
        </p>
      </section>

      {/* Problem Section */}
      <section className="about-section">
        <h2>The Problem We Solve</h2>

        <p>
          FASTag deductions are often hidden inside SMS alerts and bank
          messages. This makes toll tracking difficult.
        </p>

        <p>
          FastagTracker keeps your toll history organized so you can check
          every transaction easily.
        </p>
      </section>

      {/* Solution Section */}
      <section className="about-section">
        <h2>How FastagTracker Helps</h2>

        <p>
          FastagTracker connects{" "}
          <Link to="/features">FASTag SMS Tracking</Link>,{" "}
          <Link to="/dashboard">Dashboard Monitoring</Link>,{" "}
          <Link to="/vehicles">Vehicle Management</Link>, and{" "}
          <Link to="/analytics">Travel Analytics</Link> in one platform.
        </p>

        <p>
          You can view toll deductions, manage vehicles, and understand travel
          expenses without checking multiple apps.
        </p>
      </section>

      {/* Audience Section */}
      <section className="about-section">
        <h2>Who Uses FastagTracker?</h2>

        <ul>
          <li>Vehicle owners</li>
          <li>Daily commuters</li>
          <li>Families with multiple vehicles</li>
          <li>Fleet managers</li>
          <li>Transport businesses</li>
          <li>Logistics companies</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Choose FastagTracker?</h2>

        <ul>
          <li>Simple FASTag tracking</li>
          <li>Organized toll history</li>
          <li>Easy vehicle management</li>
          <li>Useful travel insights</li>
          <li>Clean and user-friendly dashboard</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="about-section">
        <h2>Need Help?</h2>

        <p>
          Have questions about FastagTracker?{" "}
          <Link to="/contact">Contact our team</Link> anytime.
        </p>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Manage Your FASTag Expenses Smarter</h2>

        <p>
          Track toll payments, vehicle activity, and travel expenses from one
          dashboard.
        </p>

        <Link to="/signup" className="cta-btn">
          Get Started Today
        </Link>
      </section>

      {/* FAQ */}
      <section className="about-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>What is FastagTracker?</h3>
        <p>
          FastagTracker is a platform for tracking FASTag transactions, toll
          expenses, and vehicle records.
        </p>

        <h3>Who can use FastagTracker?</h3>
        <p>
          Vehicle owners, daily commuters, families, fleet managers, and
          transport businesses can use it.
        </p>

        <h3>Can I manage multiple vehicles?</h3>
        <p>
          Yes, you can manage multiple vehicles from one dashboard.
        </p>

        <h3>Does FastagTracker show travel analytics?</h3>
        <p>
          Yes, it helps you understand toll spending and travel patterns.
        </p>
      </section>
    </div>
  );
}

export default About;
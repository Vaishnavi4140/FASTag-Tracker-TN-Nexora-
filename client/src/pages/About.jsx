
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
          FastagTracker is designed to simplify the way people monitor
          FASTag transactions, toll expenses, vehicle activity, and travel
          costs. Instead of searching through SMS messages or maintaining
          spreadsheets, users can manage everything from one centralized
          platform.
        </p>
      </section>

      {/* Mission Section */}

      <section className="about-section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to make FASTag expense tracking simple, transparent,
          and accessible for every vehicle owner. Whether you manage a
          personal car, multiple family vehicles, or a commercial fleet,
          FastagTracker helps you stay informed about every toll transaction.
        </p>
      </section>
      <section className="about-section">
  <h2>Our Vision</h2>

  <p>
    We envision a future where every vehicle owner and fleet manager
    can access clear, organized, and actionable toll information.
    FastagTracker aims to become a trusted platform for managing
    FASTag transactions, travel expenses, and vehicle activity from
    a single location.
  </p>
</section>

      {/* Problem Section */}

      <section className="about-section">
        <h2>The Problem We Solve</h2>

        <p>
          FASTag transactions happen every day, but keeping track of toll
          deductions can quickly become difficult. Most users rely on SMS
          notifications that become hard to organize over time.
        </p>

        <p>
          FastagTracker converts scattered transaction information into
          structured records, helping users understand travel spending,
          monitor vehicle activity, and review complete toll histories.
        </p>
      </section>

      {/* Solution Section */}

      <section className="about-section">
  <h2>How FastagTracker Helps</h2>

  <p>
    FastagTracker combines
    <Link to="/features"> FASTag SMS Tracking </Link>,
    <Link to="/dashboard"> Dashboard Monitoring </Link>,
    <Link to="/vehicles"> Vehicle Management </Link>,
    and
    <Link to="/analytics"> Travel Analytics </Link>
    into a single experience.
  </p>

  <p>
    Users can quickly view
    <Link to="/toll-history">
      toll deductions and transaction history
    </Link>,
    analyze spending trends,
    manage multiple vehicles,
    and gain better visibility into travel expenses.
  </p>
</section>

      {/* Audience Section */}

      <section className="about-section">
        <h2>Who Uses FastagTracker?</h2>

        <ul>
          <li>Individual Vehicle Owners</li>
          <li>Families Managing Multiple Vehicles</li>
          <li>Daily Highway Commuters</li>
          <li>Fleet Managers</li>
          <li>Transport Businesses</li>
          <li>Logistics Companies</li>
        </ul>

        <p>
          No matter the size of your vehicle operations, FastagTracker
          provides better visibility into toll payments and travel costs.
        </p>
      </section>

      {/* Why Choose Us */}

      <section className="about-section">
        <h2>Why Choose FastagTracker?</h2>

        <ul>
          <li>Centralized FASTag Management</li>
          <li>Easy Vehicle Tracking</li>
          <li>Organized Toll History</li>
          <li>Travel Expense Insights</li>
          <li>Simple and User-Friendly Dashboard</li>
          <li>Designed for Individuals and Fleets</li>
        </ul>
      </section>

      <p>
  Have questions about FastagTracker?
  <Link to="/contact"> Contact our team </Link>
  and we'll be happy to help.
</p>

      {/* CTA Section */}

      <section className="about-cta">
        <h2>Start Managing Your FASTag Expenses Smarter</h2>

        <p>
          Join FastagTracker today and gain complete visibility into your
          toll payments, travel activity, and vehicle expenses.
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
          FastagTracker is a platform that helps users organize FASTag
          transactions, toll expenses, vehicle records, and travel analytics.
        </p>

        <h3>Who can use FastagTracker?</h3>
        <p>
          Individual vehicle owners, families, fleet managers, and transport
          businesses can all benefit from the platform.
        </p>

        <h3>Can I manage multiple vehicles?</h3>
        <p>
          Yes. FastagTracker supports multi-vehicle management through a
          centralized dashboard.
        </p>

        <h3>Does FastagTracker provide travel analytics?</h3>
        <p>
          Yes. Users can analyze toll expenses, travel patterns, and vehicle
          activity through the analytics section.
        </p>
      </section>

    </div>
  );
}

export default About;


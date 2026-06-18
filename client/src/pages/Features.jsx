import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Features.css";

function Features() {
  useEffect(() => {
    document.title = "FastagTracker Features | FASTag Tracking & Toll Management";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Explore FastagTracker features for FASTag tracking, toll history, vehicle management, travel analytics, and toll expense monitoring from one simple dashboard."
    );
  }, []);

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <h1>FastagTracker Features</h1>

        <p>
          Track FASTag transactions, toll expenses, vehicle activity, and travel
          insights from one simple platform.
        </p>

        <p>
          Use the <Link to="/dashboard">Dashboard</Link> or check{" "}
          <Link to="/analytics">Travel Analytics</Link> to understand your toll
          spending better.
        </p>
      </section>

      {/* FASTag SMS Tracking */}
      <section className="feature-section">
        <h2>FASTag SMS Tracking</h2>

        <p>
          FastagTracker organizes FASTag SMS alerts into clean toll records.
        </p>

        <p>
          You do not need to search old messages again and again. Your toll
          deductions stay easy to view and track.
        </p>

        <Link to="/toll-history">View toll history</Link>
      </section>

      {/* Dashboard */}
      <section className="feature-section">
        <h2>Centralized Dashboard</h2>

        <p>
          The <Link to="/dashboard">Dashboard</Link> shows toll payments,
          vehicle activity, and travel expenses in one place.
        </p>

        <p>
          It helps users quickly understand their FASTag spending without
          switching between apps.
        </p>
      </section>

      {/* Vehicle Management */}
      <section className="feature-section">
        <h2>Multi-Vehicle Management</h2>

        <p>
          Manage personal vehicles, family vehicles, or fleet vehicles from one
          account.
        </p>

        <p>
          Track toll expenses and transaction history for each vehicle
          separately.
        </p>

        <Link to="/add-vehicle">Add and manage vehicles</Link>
      </section>

      {/* Analytics */}
      <section className="feature-section">
        <h2>Travel Analytics</h2>

        <p>
          <Link to="/analytics">Travel Analytics</Link> helps you understand
          toll spending, route usage, and vehicle activity.
        </p>

        <p>
          Use simple reports to check monthly expenses and travel patterns.
        </p>
      </section>

      {/* Toll History */}
      <section className="feature-section">
        <h2>Toll History Tracking</h2>

        <p>
          FastagTracker keeps your FASTag toll history organized and easy to
          review.
        </p>

        <p>
          You can check previous toll payments whenever you need them.
        </p>

        <Link to="/toll-history">Check toll history</Link>
      </section>

      {/* Benefits */}
      <section className="feature-section">
        <h2>Benefits of FastagTracker</h2>

        <ul>
          <li>Simple FASTag tracking</li>
          <li>Clean toll history records</li>
          <li>Easy vehicle management</li>
          <li>Better travel expense tracking</li>
          <li>Useful analytics and reports</li>
          <li>Less manual record keeping</li>
        </ul>
      </section>

      {/* Audience */}
      <section className="feature-section">
        <h2>Who Should Use FastagTracker?</h2>

        <ul>
          <li>Vehicle owners</li>
          <li>Daily commuters</li>
          <li>Families with multiple vehicles</li>
          <li>Fleet managers</li>
          <li>Transport businesses</li>
          <li>Logistics companies</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="features-cta">
        <h2>Start Tracking FASTag Expenses Smarter</h2>

        <p>
          Manage FASTag transactions, toll history, vehicles, and travel costs
          from one dashboard.
        </p>

        <Link to="/signup" className="cta-btn">
          Get Started Today
        </Link>
      </section>

      {/* FAQ */}
      <section className="features-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Can FastagTracker manage multiple vehicles?</h3>
        <p>Yes, you can manage multiple vehicles from one account.</p>

        <h3>Does FastagTracker provide travel analytics?</h3>
        <p>
          Yes, it helps you track toll spending, travel activity, and vehicle
          usage.
        </p>

        <h3>Can I access old toll transactions?</h3>
        <p>Yes, you can review your previous FASTag toll transactions.</p>

        <h3>Who is FastagTracker designed for?</h3>
        <p>
          It is designed for vehicle owners, commuters, fleet owners, and
          transport businesses.
        </p>
      </section>
    </div>
  );
}

export default Features;
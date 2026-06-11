
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Features.css";

function Features() {
return (
  <div className="features-page">

    {/* Hero Section */}

    <section className="features-hero">
  <h1>Powerful Features Built for FASTag Tracking and Toll Management</h1>

  <p>
    FastagTracker helps vehicle owners, families, fleet managers,
    logistics companies, and transport businesses organize FASTag
    transactions, monitor toll expenses, and analyze travel spending
    from one centralized platform.
  </p>

  <p>
    Instead of manually searching through messages and maintaining
    spreadsheets, users can access complete toll records, travel
    insights, and vehicle activity in seconds.
  </p>

  <p>
    Explore your
    <Link to="/dashboard"> Dashboard </Link>
    or review detailed
    <Link to="/analytics"> Travel Analytics </Link>
    to better understand your transportation expenses and vehicle activity.
  </p>
</section>
    {/* FASTag SMS Tracking */}

    <section className="feature-section">
      <h2>FASTag SMS Tracking</h2>

      <p>
        FastagTracker automatically organizes FASTag transaction alerts
        into structured records, making it easier to monitor toll
        deductions and vehicle expenses.
      </p>

      <p>
        Users no longer need to search through hundreds of SMS messages
        to find past toll transactions. Every deduction is stored in an
        organized format that helps maintain accurate travel records.
      </p>

      <p>
        Learn how our platform simplifies
        <Link to="/toll-history"> toll history tracking </Link>
        and improves visibility into daily travel expenses.
      </p>
    </section>

    {/* Dashboard */}

    <section className="feature-section">
      <h2>Centralized Dashboard</h2>

      <p>
        The FastagTracker
        <Link to="/dashboard"> Dashboard </Link>
        brings all vehicle activity, toll deductions, and travel expenses
        into a single location.
      </p>

      <p>
        Instead of switching between apps, messages, and spreadsheets,
        users can view everything from one clean and organized interface.
      </p>

      <p>
        This helps individuals and businesses gain better control over
        transportation spending.
      </p>
    </section>

    {/* Vehicle Management */}

    <section className="feature-section">
      <h2>Multi Vehicle Management</h2>

      <p>
        Managing multiple vehicles becomes significantly easier when
        everything is organized under one account.
      </p>

      <p>
        Through our
        <Link to="/vehicles"> Vehicle Management </Link>
        tools, users can track toll expenses, travel activity, and
        transaction history for every vehicle individually.
      </p>

      <p>
        This feature is particularly useful for families, fleet owners,
and transport businesses operating multiple vehicles.

<Link to="/add-vehicle">
Add and manage vehicles from one account
</Link>.
      </p>
    </section>

    {/* Analytics */}

    <section className="feature-section">
      <h2>Travel Analytics and Expense Insights</h2>

      <p>
        Understanding where transportation money is spent is essential
        for making better financial decisions.
      </p>

      <p>
        Our
        <Link to="/analytics"> Travel Analytics </Link>
        section provides detailed insights into toll expenses, travel
        patterns, and vehicle usage trends.
      </p>

      <p>
        Users can identify spending habits, monitor monthly toll costs,
        and gain a clearer picture of highway travel expenses.
      </p>
    </section>

    {/* Toll History */}

    <section className="feature-section">
      <h2>Complete Toll History Tracking</h2>

      <p>
        Every FASTag deduction contributes to your travel history.
      </p>

      <p>
        FastagTracker maintains organized transaction records, allowing
        users to review previous toll payments whenever needed.
      </p>

      <p>
        Visit the
        <Link to="/toll-history"> Toll History </Link>
        section to access detailed transaction information.
      </p>
    </section>

    {/* Benefits */}

    <section className="feature-section">
      <h2>Benefits of Using FastagTracker</h2>

      <ul>
        <li>Organized FASTag transaction records</li>
        <li>Centralized toll expense tracking</li>
        <li>Better visibility into travel spending</li>
        <li>Easy multi-vehicle management</li>
        <li>Detailed travel analytics and reports</li>
        <li>Quick access to toll payment history</li>
        <li>Reduced manual record keeping</li>
      </ul>
    </section>

    {/* Audience */}

    <section className="feature-section">
      <h2>Who Should Use FastagTracker?</h2>

      <ul>
        <li>Individual Vehicle Owners</li>
        <li>Families Managing Multiple Vehicles</li>
        <li>Daily Highway Commuters</li>
        <li>Frequent Travelers</li>
        <li>Fleet Managers</li>
        <li>Transport Businesses</li>
        <li>Logistics Companies</li>
      </ul>

      <p>
        Whether you operate one vehicle or an entire fleet,
        FastagTracker provides the tools needed to manage toll expenses
        efficiently.
      </p>
    </section>

    {/* CTA */}

    <section className="features-cta">
      <h2>Start Tracking FASTag Expenses Smarter</h2>

      <p>
        Get complete visibility into your FASTag transactions, vehicle
        activity, and travel expenses from one platform.
      </p>

      <Link to="/signup" className="cta-btn">
        Get Started Today
      </Link>
    </section>

    {/* FAQ */}

    <section className="features-faq">
      <h2>Frequently Asked Questions</h2>

      <h3>Can FastagTracker manage multiple vehicles?</h3>
      <p>
        Yes. Users can manage multiple vehicles from a single account.
      </p>

      <h3>Does FastagTracker provide travel analytics?</h3>
      <p>
        Yes. Users can monitor spending patterns, toll expenses, and
        travel activity through analytics dashboards.
      </p>

      <h3>Can I access old toll transactions?</h3>
      <p>
        Yes. FastagTracker maintains a complete toll transaction history.
      </p>

      <h3>Who is FastagTracker designed for?</h3>
      <p>
        Individuals, families, fleet owners, logistics companies, and
        transport businesses can all benefit from the platform.
      </p>
    </section>

  </div>
);
}

export default Features;


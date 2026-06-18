import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "../styles/Home.css";

import phone from "../assets/addVehicle.jpeg";
import view from "../assets/trackToll.jpeg";
import car from "../assets/analyseToll.jpeg";
import tarunImg from "../assets/tarun.jpeg";
import PSPImg from "../assets/Pushpendra.jpeg";
import vaishnaviImg from "../assets/vaishnavi.jpeg";
import AmanImg from "../assets/aman.png";
import bgVideo from "../assets/fastag-video.mp4";

import Footer from "../components/footer";

import {
  FaRupeeSign,
  FaSlidersH,
  FaDollarSign,
  FaCar,
  FaChartLine,
  FaEnvelope,
  FaTachometerAlt,
  FaBullseye,
  FaEye,
  FaHeart,
  FaUser,
  FaShieldAlt,
} from "react-icons/fa";

import {
  MdFlashOn,
  MdPhoneAndroid,
  MdAnalytics,
  MdAutoFixHigh,
} from "react-icons/md";

import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title =
      "FastagTracker | FASTag Tracking, Toll History & Travel Analytics";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "FastagTracker helps users track FASTag transactions, toll history, vehicle activity, toll expenses, and travel analytics from one simple dashboard."
    );
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-wrapper">
        <div className="das">
          <video className="bg-video" autoPlay muted loop playsInline>
            <source src={bgVideo} type="video/mp4" />
          </video>

          <div className="video-overlay"></div>

          <div className="container dashboard-inner">
            <div className="dashboard-left">
              <h1>
                Track FASTag Transactions,
                <br />
                Toll Expenses & Vehicle Trips
                <br />
                from One Dashboard
              </h1>

              <p>
                FastagTracker helps you manage FASTag toll payments, vehicle
                activity, and travel expenses without searching old SMS alerts.
              </p>

              <div className="dashboard-buttons">
                <Link to="/signup" className="get-btn">
                  Get Started →
                </Link>

                <Link to="/features" className="demo-btn">
                  Explore Features
                </Link>
              </div>
            </div>

            <div className="dashboard-right"></div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="home-card-container">
          <div className="home-card">
            <div className="home-card-top">
              <div className="home-icon rupee">
                <FaRupeeSign size={25} color="#3b82f6" />
              </div>

              <div className="home-card-content">
                <h2 className="value">₹12,450</h2>
                <p className="title">Toll Expenses Tracked</p>
              </div>
            </div>
          </div>

          <div className="home-card">
            <div className="home-card-top">
              <div className="home-icon green">
                <FaSlidersH size={25} color="#22c55e" />
              </div>

              <div className="home-card-content">
                <h2 className="value">82</h2>
                <p className="title">Trips Recorded</p>
              </div>
            </div>
          </div>

          <div className="home-card">
            <div className="home-card-top">
              <div className="home-icon yellow">
                <FaDollarSign size={25} color="#f59e0b" />
              </div>

              <div className="home-card-content">
                <h2 className="value">₹120</h2>
                <p className="title">Last Toll Paid</p>
              </div>
            </div>
          </div>

          <div className="home-card">
            <div className="home-card-top">
              <div className="home-icon purple">
                <FaCar size={25} color="#a855f7" />
              </div>

              <div className="home-card-content">
                <h2 className="value">2</h2>
                <p className="title">Vehicles Linked</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="fea">
          <div className="feature container">
            <div className="feature-heading">
              <h3>Powerful Features</h3>

              <p>
                Simple tools to track FASTag transactions, toll history,
                vehicles, and travel spending.
              </p>
            </div>

            <div className="feature-container">
              <div className="feature-card">
                <div className="icon-box">
                  <FaEnvelope color="#f59e0b" />
                </div>

                <h2>FASTag SMS Tracking</h2>

                <p>
                  Convert FASTag SMS alerts into organized toll records. No
                  need to search old messages again and again.
                </p>

                <Link to="/features" className="explore-text">
                  Discover SMS Tracking →
                </Link>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <FaTachometerAlt color="red" />
                </div>

                <h2>Centralized Dashboard</h2>

                <p>
                  View toll payments, vehicle records, trip history, and
                  expense summaries from one clean dashboard.
                </p>

                <Link to="/dashboard" className="explore-text">
                  Explore Dashboard →
                </Link>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <FaChartLine color="blue" />
                </div>

                <h2>Travel Analytics</h2>

                <p>
                  Understand toll spending, route usage, and vehicle activity
                  with simple travel insights.
                </p>

                <Link to="/analytics" className="explore-text">
                  View Travel Insights →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="work-section container">
          <div className="work-heading">
            <h1>How FastagTracker Works</h1>

            <p>
              Add your vehicle, track FASTag toll deductions, and analyze travel
              expenses in three simple steps.
            </p>
          </div>

          <div className="work-container">
            <div className="work-card">
              <div className="image-box">
                <img
                  src={phone}
                  alt="FASTag SMS tracking on mobile phone"
                />

                <span className="step-number">1</span>
              </div>

              <div className="work-content">
                <div className="work-icon">
                  <MdPhoneAndroid className="work-icon1" size={50} />
                  <h2>Add Your Vehicle</h2>
                </div>

                <p>
                  Enter your vehicle details and registered mobile number to
                  start tracking FASTag activity.
                </p>
              </div>
            </div>

            <div className="work-card">
              <div className="image-box">
                <img
                  src={view}
                  alt="FASTag dashboard and toll expense analytics"
                />

                <span className="step-number">2</span>
              </div>

              <div className="work-content">
                <div className="work-icon">
                  <MdAnalytics
                    className="work-icon1"
                    size={50}
                    color="blue"
                  />
                  <h2>Track Toll Transactions</h2>
                </div>

                <p>
                  View FASTag deductions, toll history, and vehicle activity
                  from your <Link to="/dashboard">dashboard</Link>.
                </p>
              </div>
            </div>

            <div className="work-card">
              <div className="image-box">
                <img
                  src={car}
                  alt="Vehicle toll tracking and FASTag trip management"
                />

                <span className="step-number">3</span>
              </div>

              <div className="work-content">
                <div className="work-icon">
                  <MdAutoFixHigh
                    className="work-icon1"
                    size={50}
                    color="red"
                  />
                  <h2>Analyze Travel Expenses</h2>
                </div>

                <p>
                  Review <Link to="/toll-history">Toll History</Link>, check{" "}
                  <Link to="/analytics">Travel Analytics</Link>, and manage{" "}
                  <Link to="/vehicles">Vehicles</Link> easily.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="price-section container">
          <div className="price-heading">
            <h2>Simple Pricing</h2>
            <p>Choose a plan that matches your tracking needs.</p>
          </div>

          <div className="price-card-conatainer">
            <div className="pricing-card">
              <h2>Free</h2>

              <p className="plan-text">
                Best for individual users getting started.
              </p>

              <h1 className="price">
                ₹0 <span>/month</span>
              </h1>

              <div className="features-list">
                <p>✓ Track up to 2 vehicles</p>
                <p>✓ Basic toll history</p>
                <p>✓ SMS sync</p>
                <p>✓ Mobile access</p>
                <p>✓ Email support</p>
              </div>

              <Link to="/signup" className="pricing-btn">
                Get Started
              </Link>
            </div>

            <div className="pricing-card pro-card">
              <div className="popular-tag"></div>

              <h2>Pro</h2>

              <p className="plan-text">
                Best for families and frequent travelers.
              </p>

              <h1 className="price">
                ₹199 <span>/month</span>
              </h1>

              <div className="features-list">
                <p>✓ Track multiple vehicles</p>
                <p>✓ Advanced analytics</p>
                <p>✓ Expense reports</p>
                <p>✓ Priority support</p>
                <p>✓ Route insights</p>
              </div>

              <Link to="/signup" className="pro-btn">
                Start Free Trial
              </Link>
            </div>

            <div className="pricing-card">
              <h2>Enterprise</h2>

              <p className="plan-text">
                Best for businesses and fleet teams.
              </p>

              <h1 className="price">Custom</h1>

              <div className="features-list">
                <p>✓ Fleet management tools</p>
                <p>✓ Multi-user accounts</p>
                <p>✓ Custom reports</p>
                <p>✓ Business support</p>
                <p>✓ Advanced security</p>
              </div>

              <Link to="/contact" className="pricing-btn">
                Contact Sales
              </Link>
            </div>
          </div>

          <p className="last-text">
            Simple plans • Easy setup • Cancel anytime
          </p>
        </div>

        {/* About Section */}
        <div className="about-section">
          <div className="about-heading container">
            <h2>About FastagTracker</h2>

            <p>
              FastagTracker is built to make toll tracking simple for vehicle
              owners, families, and fleet operators.
            </p>
          </div>

          <div className="about-card-container container">
            <div className="about-card">
              <div className="icon-box">
                <FaBullseye color="blue" />
              </div>

              <div className="about-card-containt">
                <h2>Our Mission</h2>
                <p>
                  To help users manage FASTag transactions, toll history, and
                  travel expenses without confusion.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="icon-box">
                <FaEye />
              </div>

              <div className="about-card-containt">
                <h2>Our Vision</h2>
                <p>
                  To make toll expense tracking easier, smarter, and more
                  useful for everyday travel.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="icon-box">
                <FaHeart color="red" />
              </div>

              <div className="about-card-containt">
                <h2>Our Values</h2>
                <p>
                  We focus on simplicity, transparency, and a smooth user
                  experience.
                </p>
              </div>
            </div>
          </div>

          <div className="about-center-text container">
  <div className="about-center-heading">
    <FaUser size={50} color="white" />
    <h2>500K+</h2>
    <p>Active Users</p>
  </div>

  <div className="about-center-heading">
    <FaShieldAlt size={50} color="white" />
    <h2>₹100Cr+</h2>
    <p>Transactions Tracked</p>
  </div>

  <div className="about-center-heading">
    <MdFlashOn size={50} color="white" />
    <h2>1M+</h2>
    <p>Vehicles Managed</p>
  </div>
</div>

          {/* Team Section */}
          <div className="team-container container">
            <div className="team-heading">
              <h2>Meet Our Team</h2>

              <p>
                A team focused on building a simple and useful FASTag tracking
                experience.
              </p>
            </div>

            <div className="team-card-container">
              <div
                className="team-card"
                style={{ "--bg-img": `url(${tarunImg})` }}
              >
                <div className="team-img">
                  <img src={tarunImg} alt="Tarun Nigam" />
                </div>

                <h2>Tarun Nigam</h2>

                <div className="designation">
                  <p>Founder of TN-Nexora Technologies and FastagTracker</p>
                </div>

                <p>
                  Leads business growth, client handling, and product direction
                  for FastagTracker.
                </p>
              </div>

              <div
                className="team-card"
                style={{ "--bg-img": `url(${PSPImg})` }}
              >
                <div className="team-img">
                  <img src={PSPImg} alt="Pushpendra Singh" />
                </div>

                <h2>Pushpendra Singh</h2>

                <div className="designation">
                  <p>Backend Developer</p>
                </div>

                <p>
                  Builds server-side features, APIs, and secure backend logic.
                </p>
              </div>

              <div
                className="team-card"
                style={{ "--bg-img": `url(${vaishnaviImg})` }}
              >
                <div className="team-img">
                  <img src={vaishnaviImg} alt="Vaishnavi" />
                </div>

                <h2>Vaishnavi</h2>

                <div className="designation">
                  <p>Frontend Developer</p>
                </div>

                <p>
                  Designs clean, responsive, and user-friendly interfaces.
                </p>
              </div>

              <div
                className="team-card"
                style={{ "--bg-img": `url(${AmanImg})` }}
              >
                <div className="team-img">
                  <img src={AmanImg} alt="Aman Pal" />
                </div>

                <h2>Aman Pal</h2>

                <div className="designation">
                  <p>Database Administrator</p>
                </div>

                <p>
                  Manages database structure, data storage, and secure records.
                </p>
              </div>
            </div>

            {/* Story Section */}
            <div className="about-story">
              <div className="about-story-heading">
                <h2>Our Story</h2>

                <p>
                  FastagTracker started with a simple idea: FASTag payments are
                  digital, but tracking toll expenses should also be simple.
                </p>

                <p>
                  Many users still depend on SMS alerts, bank messages, and
                  manual notes. FastagTracker brings this information into one
                  organized platform.
                </p>

                <p>
                  Users can manage{" "}
                  <Link to="/toll-history">toll history</Link>, monitor{" "}
                  <Link to="/vehicles">vehicle activity</Link>, and analyze{" "}
                  <Link to="/analytics">travel expenses</Link> with better
                  clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
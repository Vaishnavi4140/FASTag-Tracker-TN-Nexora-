import React from "react";
import Navbar from "../components/navbar";
import "../styles/Home.css";
import Road from "../assets/Road.jpg";
import phone from "../assets/phone.jpg";
import view from "../assets/view.jpg";
import car from "../assets/car.jpg";
import tarunImg from "../assets/tarun.jpeg";
import PSPImg from "../assets/Pushpendra.jpeg";
import vaishnaviImg from "../assets/vaishnavi.jpeg";
import AmanImg from "../assets/aman.png";
import bgVideo from "../assets/fastag-video.mp4";

import Footer from "../components/footer";
import { FaRupeeSign, FaSlidersH, FaDollarSign, FaCar , FaChartLine,FaEnvelope, FaTachometerAlt ,FaBullseye, FaEye, FaHeart, FaUser, FaShieldAlt } from "react-icons/fa";
import { MdFlashOn, MdPhoneAndroid,MdAnalytics , MdAutoFixHigh } from "react-icons/md";
import { Link } from "react-router-dom";

function Home()
{
    return(
      
    <>
     <Navbar/>
       
        <div className="dashboard-wrapper ">
           <div className="das">
            <video className="bg-video" autoPlay muted loop playsInline>
    <source src="/videos/fastag.mp4" type="video/mp4" />
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
    FastagTracker helps vehicle owners,and businesses
    organize FASTag toll payments, monitor travel expenses, review
    vehicle activity, and understand trip spending without searching
    through scattered SMS alerts or manual records.
  </p>

  <div className="dashboard-buttons">
    <button className="get-btn">Get Started →</button>
    <button className="demo-btn">▶ View Demo</button>
  </div>
</div>

       
        <div className="dashboard-right">
          {/* <img src={Road} alt="road" /> */}
        </div>
      </div>
      </div>
      <div className="home-card-container">
        <div className="home-card">
          <div className="home-card-top ">
            <div className="home-icon rupee">
              <FaRupeeSign size={25} color="#3b82f6" />
            </div>

            <div className="home-card-content">
              <h2 className="value">₹12,450</h2>
              <p className="title">Total Toll Expenses Tracked</p>
            </div> 
          </div>
        </div>
        
        <div className="home-card">
          <div className="home-card-top ">
            <div className="home-icon green">
              <FaSlidersH size={25} color="#22c55e" />
            </div>
            <div className="home-card-content">
              <h2 className="value">82</h2>
              <p className="title">Vehicle Trips Recorded</p>
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
              <p className="title">Last Toll</p>
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
      <div className="fea">
      <div className="feature container">

  <div className="feature-heading">
    <h3>Powerful Features</h3>

    <p>
      Everything you need to track FASTag transactions, manage toll expenses,
      monitor vehicles, and analyze travel spending from one platform.
    </p>
  </div>

  <div className="feature-container">

    <div className="feature-card">
      <div className="icon-box">
        <FaEnvelope color="#f59e0b" />
      </div>

      <h2>FASTag SMS Tracking</h2>

      <p>
        Every toll payment tells a story. Our{" "}
        <Link to="/features" className="text-blue-600">
          FASTag SMS Tracking System
        </Link>{" "}
        captures transaction alerts and converts them into organized toll
        records, helping you stay informed about every deduction without
        manual tracking.
      </p>

      <Link to="/features" className="explore-text">
        Discover SMS Tracking →
      </Link>
    </div>

    <div className="feature-card">
      <div className="icon-box">
        <FaTachometerAlt color="red" />
      </div>

      <h2>Centralized FASTag Dashboard</h2>

      <p>
        Manage your complete travel activity from one place. The{" "}
        <Link to="/dashboard" className="text-blue-600">
          FASTag Dashboard
        </Link>{" "}
        brings together toll payments, vehicle records, travel history,
        and expense summaries for quick monitoring.
      </p>

      <Link to="/dashboard" className="explore-text">
        Explore Dashboard →
      </Link>
    </div>

    <div className="feature-card">
      <div className="icon-box">
        <FaChartLine color="blue" />
      </div>

      <h2>Travel Expense Analytics</h2>

      <p>
        Turn travel data into meaningful insights with{" "}
        <Link to="/analytics" className="text-blue-600">
          FASTag Expense Analytics
        </Link>
        . Analyze spending trends, compare routes, and understand how toll
        costs impact your overall travel budget.
      </p>

      <Link to="/analytics" className="explore-text">
        View Travel Insights →
      </Link>
    </div>

  </div>
</div>
</div>
      <div className="work-section container">

  <div className="work-heading">
    <h1>How FastagTracker Works</h1>

<p>
FastagTracker turns FASTag SMS alerts, toll deductions, vehicle records,
    and travel data into organized insights. In three simple steps, users can
    track toll expenses, review travel history, and manage vehicles from one
    connected dashboard.
</p>
  </div>

  <div className="work-container">

  
    <div className="work-card">

      <div className="image-box">
        <img src={phone} alt="FASTag SMS tracking on mobile phone" />

        <span className="step-number">1</span>
      </div>

      <div className="work-content">
        <div className=" work-icon">
       <MdPhoneAndroid className="work-icon1" size={50} color=""/> 
       <h2>Connect Your FASTag Vehicle</h2>
        </div>
        <p>
  Add your vehicle details and registered mobile number to connect your FASTag
  activity. FastagTracker helps organize toll records without depending on
  manual spreadsheets.
</p>
      </div>
    </div>

    
    <div className="work-card">

      <div className="image-box">
       <img src={view} alt="FASTag toll expense dashboard and travel analytics" />

        <span className="step-number">2</span>
      </div>
      <div className="work-content">
       <div className=" work-icon">
       <MdAnalytics className="work-icon1" size={50} color="blue"/> 
       <h2>Track Toll Transactions</h2>
        </div>

        <p>
  View toll deductions, FASTag payment history, vehicle activity, and expense
  summaries from your <Link to="/dashboard">centralized dashboard</Link>.
</p>

    </div>
</div> 
   
    <div className="work-card">

      <div className="image-box">
       <img src={car} alt="Vehicle toll tracking and FASTag trip management" />

        <span className="step-number">3</span>
      </div>

      <div className="work-content">
        <div className=" work-icon">
       <MdAutoFixHigh className="work-icon1" size={50} color="red"/> 
       <h2>Analyze Travel Expenses</h2>
        </div>
      
        <p>
  Review detailed <Link to="/toll-history">Toll History</Link>, analyze spending
  through <Link to="/analytics">Travel Analytics</Link>, and manage vehicles
  using <Link to="/vehicles">Vehicle Management</Link>.
</p>
      </div>

    </div>

  </div>

</div>
     <div className="price-section container">

              <div className="price-heading">
                   <h2>Simple, Transparent Pricing</h2>
                   <p>Choose the perfect plan for your needs. All plans include our core features.</p>
              </div>

              <div className="price-card-conatainer">

                  <div className="pricing-card">
                      <h2>Free</h2>
                      <p className="plan-text">Perfect for individual users getting started</p>
                      <h1 className="price">
                         ₹0 <span>/month</span>
                      </h1>
                      <div className="features-list">
                       <p>✓ Track up to 2 vehicles</p>
                       <p>✓ Basic toll history</p>
                       <p>✓ SMS sync</p>
                       <p>✓ Mobile app access</p>
                       <p>✓ Email support</p>
                       </div>
                       <Link to="/signup" className="pricing-btn">
  Get Started
</Link>
                  </div>
                     

                      <div className="pricing-card pro-card">
                        <div className="popular-tag">
                        
                        </div>
                          <h2>Pro</h2>
                            <p className="plan-text">
                             Best for families and frequent travelers
                              </p>
                         <h1 className="price">
                         ₹199 <span>/month</span>
                         </h1>
                         <div className="features-list">
                                <p>✓ Track unlimited vehicles</p>
                                <p>✓ Advanced analytics & insights</p>
                                <p>✓ Expense reports & exports</p>
                                <p>✓ Priority support</p>
                                <p>✓ Route optimization</p>
                                <p>✓ Tax filing assistance</p>
                                <p>✓ API access</p>
                         </div>

                            <Link to="/signup" className="pro-btn">
  Start Free Trial
</Link>
                    </div>


                      <div className="pricing-card">

      <h2>Enterprise</h2>

      <p className="plan-text">
        For businesses and fleet management
      </p>

      <h1 className="price">
        Custom
      </h1>

      <div className="features-list">
        <p>✓ Everything in Pro</p>
        <p>✓ Fleet management tools</p>
        <p>✓ Multi-user accounts</p>
        <p>✓ Custom integrations</p>
        <p>✓ Dedicated account manager</p>
        <p>✓ SLA guarantee</p>
        <p>✓ Advanced security features</p>
      </div>

      <Link to="/contact" className="pricing-btn">
  Contact Sales
</Link>

    </div>
              </div>
              <p className="last-text">All plans include 14-day free trial • No credit card required • Cancel anytime</p>
     </div>
     <div className="about-section  ">
        <div className="about-heading container">
          <h2>About FastagTracker</h2>
          <p>Founded in 2026, FastagTracker is revolutionizing how Indians manage their toll expenses. <br />  We're on a mission to bring financial clarity to every journey.</p>
          </div> 
        <div className="about-card-container container">
          <div className="about-card">
            <div className="icon-box">
              <FaBullseye color="blue"/>
            </div>
            <div className="about-card-containt">
                <h2>Our Mission</h2>
                <p>To simplify toll tracking and expense management for millions of travelers across India, making financial transparency accessible to everyone.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="icon-box">
              < FaEye color=""/>
            </div>
            <div className="about-card-containt">
                <h2>Our Vision</h2>
                <p>To simplify toll tracking and expense management for millions of travelers across India, making financial transparency accessible to everyone.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="icon-box">
              <FaHeart color="red"/>
            </div>
            <div className="about-card-containt">
                <h2>Our Values</h2>
                <p>To simplify toll tracking and expense management for millions of travelers across India, making financial transparency accessible to everyone.</p>
            </div>
          </div>
        </div>
        
        <div className="about-center-text container">
          <div className="about-center-heading">
            < FaUser size={50} color="white"/>
                  <h2>500K+</h2>
                  <p>Active Users</p>
          </div>
          <div className="about-center-heading">
            < FaShieldAlt size={50}color="white" />
                  <h2>₹100Cr+</h2>
                  <p>Transactions Tracked</p>
          </div>
          <div className="about-center-heading">
            <  MdFlashOn size={50}color="white"/>
                  <h2>1M+</h2>
                  <p>Vehicles Managed</p>
          </div>

        </div>

        <div className="team-container container">
          <div className="team-heading">
            <h2>Meet Our Team</h2>
            <p>A passionate team of engineers, designers, and innovators from India's top tech companies.</p>
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
      <p>Founder of TN-Nexora Technologies and FastTag Tracker</p>
    </div>
    <p>
      Experienced in client management, with a proven track record of
      working with multinational clients and driving business growth
      through technology solutions.
    </p>
  </div>

  <div
    className="team-card"
    style={{ "--bg-img": `url(${PSPImg})` }}
  >
    <div className="team-img">
      <img src={PSPImg} alt="Puspendra Singh" />
    </div>
    <h2>Puspendra Singh</h2>
    <div className="designation">
      <p>Backend Developer (Node.js)</p>
    </div>
    <p>
      Develops server-side functionality and APIs using Node.js.
      Ensures smooth and secure application performance.
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
      <p>Frontend Developer (UI/UX)</p>
    </div>
    <p>
      Designs user-friendly and responsive interfaces.
      Focuses on creating an attractive and seamless user experience.
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
      <p>Database Administrator (MongoDB & SQL)</p>
    </div>
    <p>
      Manages and maintains MongoDB and SQL databases.
      Ensures secure, efficient, and reliable data storage.
    </p>
  </div>

</div>



                    <div className="about-story">
            <div className="about-story-heading">
              <h2>Our Story</h2>

              <p>
                FastagTracker started with a simple problem: FASTag payments became
                digital, but tracking toll deductions, vehicle trips, and travel expenses
                still remained confusing for many users.
              </p>

              <p>
                Drivers, families, and fleet operators often depend on scattered SMS
                alerts, bank messages, and manual notes to understand where their toll
                money is going. FastagTracker was built to bring all of that information
                into one organized platform.
              </p>

              <p>
                Today, FastagTracker helps users manage
                <Link to="/toll-history"> toll history</Link>, monitor
                <Link to="/vehicles"> vehicle activity</Link>, and analyze
                <Link to="/analytics"> travel expenses</Link> with better clarity.
              </p>
            </div>
          </div>

        </div> {/* team-container */}
        
      </div> {/* about-section */}

    </div> {/* dashboard-wrapper */}

    <Footer />
  </>
);
}

export default Home;
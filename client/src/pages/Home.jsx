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
            Track Every Toll 
            <br />
            Payment in One 
            <br />
            Dashboard
          </h1>

          <p>
            No more switching between FASTag apps. View all toll
            deductions instantly.
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
              <p className="title">Total Toll Paid</p>
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
      <div className="feature container" >
        
            <div className="feature-heading">
              <h3>Powerful Features</h3>
              <p>Everything you need to manage your toll payments efficiently</p>
            </div>
            <div className="feature-container">
                
               <div className="feature-card">
                <div className="icon-box">
                     < FaEnvelope color="#f59e0b"/>
                </div>
                   <h2>SMS Toll Detection</h2>
                   <p> Auto detect toll deductions from bank SMS alerts.</p>
                   <p className="explore-text">
                     Explore feature →
                     </p>

               </div>
               <div className="feature-card">
                <div className="icon-box">
                    <FaTachometerAlt color="red"/>
                </div>
                   <h2>Centralized Dashboard</h2>
                   <p>View toll history from all FASTag providers in one place.</p>
                   <p className="explore-text">
                     Explore feature →
                     </p>
               </div>
               <div className="feature-card">
                <div className="icon-box">
                    <FaChartLine color="blue"/>
                </div>
                   <h2>Trip Analytics</h2>
                   <p> See travel statistics and spending patterns.</p>
                   <p className="explore-text">
                     Explore feature →
                     </p>
                   
               </div>
               </div>

      </div>
      </div>
      <div className="work-section container">

  <div className="work-heading">
    <h1>How It Works</h1>
    <p>Get started in three simple steps</p>
  </div>

  <div className="work-container">

  
    <div className="work-card">

      <div className="image-box">
        <img
          src={phone}
          alt=""
        />

        <span className="step-number">1</span>
      </div>

      <div className="work-content">
        <div className=" work-icon">
       <MdPhoneAndroid className="work-icon1" size={50} color=""/> 
       <h2>Install & Connect</h2>
        </div>
        <p>
          Install app and give SMS permission
        </p>
      </div>

    </div>

    
    <div className="work-card">

      <div className="image-box">
        <img
          src={view}
          alt=""
        />

        <span className="step-number">2</span>
      </div>

      <div className="work-content">
       <div className=" work-icon">
       <MdAnalytics className="work-icon1" size={50} color="blue"/> 
       <h2>View Analytics</h2>
        </div>

        <p>
          System detects toll deduction messages
        </p>
      </div>

    </div>

   
    <div className="work-card">

      <div className="image-box">
        <img
          src={car}
          alt=""
        />

        <span className="step-number">3</span>
      </div>

      <div className="work-content">
        <div className=" work-icon">
       <MdAutoFixHigh className="work-icon1" size={50} color="red"/> 
       <h2 >View Analytics</h2>
        </div>
      
        <p>
          Dashboard shows full toll history
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
                       <button>Get Started</button>
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

                            <button className="pro-btn">
                               Start Free Trial
                            </button>
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

      <button>Contact Sales</button>

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
                <h2>Our Mission</h2>
                <p>To simplify toll tracking and expense management for millions of travelers across India, making financial transparency accessible to everyone.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="icon-box">
              <FaHeart color="red"/>
            </div>
            <div className="about-card-containt">
                <h2>Our Mission</h2>
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
          FastagTracker was born from a simple frustration: tracking toll expenses
          in India was unnecessarily complicated. Our founders, frequent highway
          travelers themselves, realized that while FASTag had digitized
          payments, no one had built a comprehensive solution to track, analyze,
          and optimize toll spending.
                </p>
                <p>
          What started as a weekend project quickly grew into a mission to help
          millions of Indians gain better control over their transportation
          expenses. Today, FastagTracker processes over ₹100 crores in toll
          transactions annually and helps families, businesses, and fleet
          operators save money and time.
                </p>
                <p>
          We're backed by leading venture capital firms and supported by a
          community of passionate users who believe in our vision of transparent,
          intelligent transportation finance.
        </p>
            </div>

          </div>

        </div>
        
     </div>



    </div>
   <Footer/>
   </>
  );
}

export default Home;

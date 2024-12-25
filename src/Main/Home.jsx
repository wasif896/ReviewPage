import Navbar from "../Components/Navbar";
import styles from "../Main/Home.module.css";
import googlePlay from "../assets/images/googlePlay.png";
// import frame from "../assets/images/Frame.png";
// import download from "../assets/images/download.png";
import withApple from "../assets/images/appStore.png";
// import Group from "../assets/images/Group.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import logo from "../assets/images/reviewCollectorWhite.png";
import { motion } from "framer-motion";
import { useState } from "react";
import elipse from "../assets/images/Ellipse.png";

import Frame1 from "../assets/icons/Frame1.png";
import Frame2 from "../assets/icons/Frame2.png";
import Frame3 from "../assets/icons/Frame3.png";
import Frame4 from "../assets/icons/Frame4.png";
import Frame5 from "../assets/icons/Frame5.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

import Frame6 from "../assets/icons/Frame6.png";
import Frame7 from "../assets/icons/Frame7.png";
import Frame8 from "../assets/icons/Frame8.png";
import Frame9 from "../assets/icons/Frame9.png";
import Frame10 from "../assets/icons/Frame10.png";
import Frame11 from "../assets/icons/Frame11.png";
import Frame12 from "../assets/icons/Frame12.png";
import Frame13 from "../assets/icons/Frame13.png";
import Frame14 from "../assets/icons/Frame14.png";

const reviews = [
  {
    stars: "★★★★★",
    text: "Great app, good initiative for businesses to collect feedbacks and help to improve services",
    name: "MrymRamay",
    image: elipse,
  },
  {
    stars: "★★★★★",
    text: "Good quality, but could be cheaper.",
    name: "Jane Smith",
    image: elipse,
  },
  {
    stars: "★★★★★",
    text: "It's okay, not bad.",
    name: "Alice Johnson",
    image: elipse,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close the navbar toggle on mobile view
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler && navbarToggler.classList.contains("show")) {
      navbarToggler.classList.remove("show");
    }
  };

  return (
    <div className="container">
      <Navbar />
      <section className={styles.homeSection} id="home">
        <div className={styles.home}>
          <h1>Welcome to</h1>
          <h1>
            <span className={styles.greenText}>Reviews Collector</span>
          </h1>
          <p>
            The Ultimate App for{" "}
            <span className={styles.greenText}>
              Business Feedback Management!
            </span>
          </p>
          <div className={styles.stores}>
            <a href="https://play.google.com/store/apps/details?id=com.reviewcollector.avicenna">
              <img src={googlePlay} className="img-fluid" alt="google-play" />
            </a>
            <a href="https://apps.apple.com/pk/app/review-collector/id6503719884">
              <img src={withApple} className="img-fluid" alt="apple-store" />
            </a>
          </div>
          <motion.img
            src={img1}
            className="img-fluid mt-3"
            width="800px"
            alt="group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <div className={styles.aboutReview}>
            <h1 className="mb-4">
              About <span className={styles.greenText}>ReviewsCollector</span>
            </h1>
            <p className="mb-4">
              ReviewsCollector is an all-in-one solution for businesses to
              collect, manage, and analyze customer feedback. Whether you’re a
              small business or a large enterprise, ReviewsCollector helps you
              elevate your brand by gathering actionable insights from your
              customers, boosting engagement, and improving your online
              reputation.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
      </section>

      <div className={styles.startSection}>
        <section className={styles.features} id="features">
          <div className={styles.text}>
            <p>Key Features</p>
            <h2>The Ultimate Key Features Of Review Collector</h2>
          </div>
          <div className={styles.setcards}>
            <div className={styles.styleCards}>
              <div className={`row ${styles.cardStyle}`}>
                <motion.div
                  className={`col-md-3 ${styles.card}`}
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
                  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                  viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% in view
                >
                  <span className={styles.icon}>
                    <img src={Frame5} width="30%" className="pb-3" />
                  </span>
                  <h2>User Registration & Profile Setup</h2>
                  <p>
                    Sign up fast, set up your profile, and start collecting
                    reviews today!
                  </p>
                  <p className={styles.exploreMore}>
                    Explore more <IoArrowForwardSharp />
                  </p>
                </motion.div>
                <motion.div
                  className={`col-md-3 ${styles.card}`}
                  style={{ backgroundColor: "#09C950" }}
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
                  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                  viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% in view
                >
                  <span className={styles.icon}>
                    <img src={Frame1} width="30%" className="pb-3" />
                  </span>
                  <h2 style={{ color: "white" }}>
                    Effortless Feedback Collection
                  </h2>
                  <p style={{ color: "white" }}>
                    Track feedback and gain insights easily!
                  </p>
                  <p className={styles.exploreMore} style={{ color: "white" }}>
                    Explore more <IoArrowForwardSharp />
                  </p>
                </motion.div>

                <motion.div
                  className={`col-md-3 ${styles.card}`}
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
                  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                  viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% in view
                >
                  <span className={styles.icon}>
                    <img src={Frame4} width="30%" className="pb-3" />
                  </span>
                  <h2>Powerful Analytics & Insights</h2>
                  <p>Monitor reviews and ratings effortlessly!</p>
                  <p className={styles.exploreMore}>
                    Explore more <IoArrowForwardSharp />
                  </p>
                </motion.div>
              </div>
              <div className={`row ${styles.cardStyle}`}>
                <motion.div
                  className={`col-md-3 ${styles.card}`}
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
                  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                  viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% in view
                >
                  <span className={styles.icon}>
                    <img src={Frame3} width="30%" className="pb-3" />
                  </span>
                  <h2>Easy Sharing & Engagement</h2>
                  <p>Share reviews via QR codes or NFC tags!</p>
                  <p className={styles.exploreMore}>
                    Explore more <IoArrowForwardSharp />
                  </p>
                </motion.div>

                <motion.div
                  className={`col-md-3 ${styles.card}`}
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
                  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                  viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% in view
                >
                  <span className={styles.icon}>
                    <img src={Frame2} width="30%" className="pb-3" />
                  </span>
                  <h2>Manage Your Business Reputation</h2>
                  <p>Lock and update your profile anytime!</p>
                  <p className={styles.exploreMore}>
                    Explore more <IoArrowForwardSharp />
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.advantages}>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0px 0px",
            }}
          >
            <div className="col-md-5 col-sm-12 mb-4">
              <p
                style={{
                  color: "#09C950",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                className="pb-2"
              >
                Advantages
              </p>
              <h2 className={styles.advantageText}>
                Advantages of ReviewsCollector
              </h2>
              <motion.img
                src={img2}
                className="img-fluid mt-3"
                width="95%"
                alt="Advantages Frame"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>

            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6 " style={{ textAlign: "start" }}>
                  <span className={styles.icon}>
                    <img src={Frame6} width="30%" className="pb-2" />
                  </span>
                  <h3
                    className="py-2"
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#223A52",
                    }}
                  >
                    Create & Manage Business Profiles
                  </h3>
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>
                    Build and maintain your business profile to collect customer
                    reviews and ratings seamlessly.
                  </p>
                </div>
                <div className="col-md-6" style={{ textAlign: "start" }}>
                  <span className={styles.icon}>
                    <img src={Frame7} width="30%" className="pb-2" />
                  </span>
                  <h3
                    className="py-2"
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#223A52",
                    }}
                  >
                    Customer Surveys & Ratings
                  </h3>
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>
                    Enable surveys to gather feedback and ratings, helping you
                    improve customer satisfaction.
                  </p>
                </div>
                <div className="col-md-6 " style={{ textAlign: "start" }}>
                  <span className={styles.icon}>
                    <img src={Frame8} width="30%" className="pb-2" />
                  </span>
                  <h3
                    className="py-2"
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#223A52",
                    }}
                  >
                    Advanced Analytics
                  </h3>
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>
                    Monitor and analyze your business performance to enhance
                    decision-making and drive growth.
                  </p>
                </div>
                <div className="col-md-6 " style={{ textAlign: "start" }}>
                  <span className={styles.icon}>
                    <img src={Frame9} width="30%" className="pb-2" />
                  </span>
                  <h3
                    className="py-2"
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#223A52",
                    }}
                  >
                    Profile Security
                  </h3>
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>
                    Keep your business information secure with easy-to-use
                    locking features.
                  </p>
                </div>
                <div className="col-md-6 " style={{ textAlign: "start" }}>
                  <span className={styles.icon}>
                    <img src={Frame10} width="30%" className="pb-2" />
                  </span>
                  <h3
                    className="py-2"
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#223A52",
                    }}
                  >
                    Seamless Sharing
                  </h3>
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>
                    Monitor and analyze your business performance to enhance
                    decision-making and drive growth.
                  </p>
                </div>
                <div className="col-md-6 " style={{ textAlign: "start" }}>
                  <span className={styles.icon}>
                    <img src={Frame11} width="30%" className="pb-2" />
                  </span>
                  <h3
                    className="py-2"
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#223A52",
                    }}
                  >
                    NFC Integration
                  </h3>
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>
                    Simplify the review collection process with NFC
                    functionality, allowing easy access to your business profile
                    for customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reviews}>
          <div
            className="row"
            style={{
              justifyContent: "center",
              textAlign: "center",
              padding: "40px 50px",
            }}
          >
            <div className="row my-3 mx-1" style={{ justifyContent: "center" }}>
              <h1>
                Why Choose{" "}
                <span className={styles.greenText}>ReviewsCollector?</span>
              </h1>
              <p>
                Discover the Benefits of Choosing ReviewsCollector for Seamless
                Feedback Management
              </p>
            </div>

            <div className="col-md-4 col-sm-12 mb-3">
              <motion.div
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
                whileInView={{ opacity: 1, y: 0 }} // Animate into view
                transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                viewport={{ once: true, amount: 0.5 }} // Trigger once, 50% in view
              >
                <span className={styles.icon}>
                  <img src={Frame14} width="20%" className="pb-2" />
                </span>

                <h4>Detailed Analytics</h4>
                <p>
                  Get valuable insights into how your business is performing,
                  based on customer feedback and ratings.
                </p>
              </motion.div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
              <motion.div
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
                whileInView={{ opacity: 1, y: 0 }} // Animate into view
                transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                viewport={{ once: true, amount: 0.5 }} // Trigger once, 50% in view
              >
                <span className={styles.icon}>
                  <img src={Frame13} width="20%" className="pb-2" />
                </span>

                <h4>Boost Customer Engagement</h4>
                <p>
                  Easily collect reviews and ratings to enhance your brand’s
                  online reputation.
                </p>
              </motion.div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
              <motion.div
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
                whileInView={{ opacity: 1, y: 0 }} // Animate into view
                transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                viewport={{ once: true, amount: 0.5 }} // Trigger once, 50% in view
              >
                <span className={styles.icon}>
                  <img src={Frame12} width="20%" className="pb-2" />
                </span>
                <h4>Simple & Secure</h4>
                <p>
                  Secure your profile and manage your feedback with a
                  user-friendly interface.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <section className={styles.reviewsSection} id="reviews">
          <h1 className={styles.heading}>Ratings And Reviews</h1>
          <div className={styles.carousel}>
            <button className={styles.arrow} onClick={handlePrev}>
              &lt;
            </button>
            <div className={styles.reviewWrapper}>
              <div className={styles.userReview}>
                <div
                  className={`${styles.userReview} ${
                    currentIndex === 0 ? styles.active : ""
                  }`}
                >
                  <div className={styles.stars}>
                    {reviews[currentIndex].stars}
                  </div>
                  <p className={styles.reviewText}>
                    {reviews[currentIndex].text}
                  </p>
                  <div className={styles.reviewer}>
                    <img
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      className={styles.reviewerImage}
                    />
                    <p className={styles.reviewerName}>
                      {reviews[currentIndex].name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.arrow} onClick={handleNext}>
              &gt;
            </button>
          </div>
        </section>
        <section className={styles.downloadSection} id="download">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 mb-4 text-center text-md-start">
              <div className="downloadtext" style={{ textAlign: "start" }}>
                <h1>Download</h1>
                <h1>
                  <span className={styles.greenText}>ReviewsCollector</span>{" "}
                  today
                </h1>
                <p>
                  Download ReviewsCollector today to gather, manage, and analyze
                  customer feedback like never before. Unlock the power of
                  reviews and enhance your business with the tools you need to
                  succeed!
                </p>
              </div>
              <div className={styles.stores} style={{ float: "inline-start" }}>
                <a href="https://play.google.com/store/apps/details?id=com.reviewcollector.avicenna">
                  <img
                    src={googlePlay}
                    className="img-fluid"
                    alt="google-play"
                  />
                </a>
                <a href="https://apps.apple.com/pk/app/review-collector/id6503719884">
                  <img
                    src={withApple}
                    className="img-fluid"
                    alt="apple-store"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-4 text-center">
              <motion.img
                src={img3}
                className="img-fluid"
                alt="Advantages Frame"
                initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth animation
                viewport={{ once: true, amount: 0.5 }} // Trigger once, 50% visibility
              />
            </div>
          </div>
        </section>
        <div className={styles.footerSection}>
          <nav
            className={`navbar navbar-expand-lg ${styles.footerNav}`}
            style={{ justifyContent: "space-between" }}
          >
            <a className="navbar-brand">
              <img src={logo} width="210px" />
            </a>
            <div className={styles.listbar}>
              <ul className="navbar-nav ml-auto ">
              <li className="nav-item" onClick={() => handleScroll("home")}>
                  <a className="nav-link">Home</a>
                </li>
                <li className="nav-item" onClick={() => handleScroll("features")}>

                  <a className="nav-link">Features</a>
                </li>
                <li className="nav-item" onClick={() => handleScroll("reviews")}>

                  <a className="nav-link">Reviews</a>
                </li>
                <li className="nav-item" onClick={() => handleScroll("download")}>

                  <a className="nav-link">Download</a>
                </li>
                <li className="nav-item">
                <button className={styles.navButton}><a href="https://app.reviewscollector.net/" style={{color:"#09c950",fontWeight:'600',textDecoration:'none',fontSize:"13px"}}>Sign Up</a></button>
                  
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <footer className={styles.copyRights}>
  <div className={styles.container}>
    <p>© Avicenna Enterprise Solutions | All Rights Reserved</p>
    <ul className={styles.list}>
      <li>
        <a href="/terms" className={styles.link}>Terms & Conditions</a>
      </li>
      <li>
        <a href="/privacy" className={styles.link}>Privacy Policy</a>
      </li>
      <li>
        <a href="/contact" className={styles.link}>Contact Us</a>
      </li>
    </ul>
  </div>
</footer>

      </div>
    </div>
  );
};

export default Home;

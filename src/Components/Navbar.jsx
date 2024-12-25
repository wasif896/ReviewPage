import styles from "../Components/Navbar.module.css";
import logo from "../assets/images/reviewsCollector.png";

const Navbar = () => {
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
    <div className="container-fluid">
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${styles.navbar}`}>
        <a className="navbar-brand" href="#">
          <img src={logo} width="180px" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" onClick={() => handleScroll("home")}>
              <a className="nav-link" style={{ color: "black",fontSize:"15px" }}>Home</a>
            </li>
            <li className="nav-item" onClick={() => handleScroll("features")}>
              <a className="nav-link" style={{ color: "black",fontSize:"15px" }}>Features</a>
            </li>
            <li className="nav-item" onClick={() => handleScroll("reviews")}>
              <a className="nav-link" style={{ color: "black",fontSize:"15px" }}>Reviews</a>
            </li>
            <li className="nav-item" onClick={() => handleScroll("download")}>
              <a className="nav-link" style={{ color: "black",fontSize:"15px" }}>Download</a>
            </li>
            <li className="nav-item">
              <button className={styles.navButton}><a href="https://app.reviewscollector.net/" style={{color:"white",textDecoration:'none',fontSize:"13px",fontWeight:"600"}}>Sign Up</a></button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


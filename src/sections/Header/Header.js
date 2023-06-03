import "./Header.css";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile-header.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ">
            <input
              className="form-control me-2   rounded-pill text-lg-center border-dark "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100 align-items-center ">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Browse">
                Browse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Details">
                Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Streams">
                Streams
              </Link>
            </li>

            <li className="nav-item pro">
              <Link className="nav-link profile" to="/Profile" >
              Profile 
              <img src={profile} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

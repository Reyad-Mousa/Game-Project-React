import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Header, Footer } from "./sections/index";
import { Container } from "./components/index";
import { Home , Streams , Browse ,Details ,Profile } from "./Pages/index";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Streams" element={<Streams />} />
            <Route path="/Browse" element={<Browse />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;

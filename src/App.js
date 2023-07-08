import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Products from "./components/Products";
import Header from "./components/Header";
import Nav from "./components/Nav";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Customers from "./assets/Customers";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <HeroCarousel />
      <Products />
      <Services />
      <Customers />
      <Footer />
    </>
  );
}

export default App;

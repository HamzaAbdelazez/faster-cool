import { Carousel } from "react-responsive-carousel";
import CarousalPng1 from "../assets/carousel1.jpg";
import CarousalPng2 from "../assets/carousel2.jpg";

export default function HeroCarousel() {
  return (
    <div className="" dir="ltr">
      <Carousel autoPlay showThumbs={false}>
        <div>
          <img src={CarousalPng2} alt="" />
        </div>
        <div>
          <img src={CarousalPng1} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

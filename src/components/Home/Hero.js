import Image from "next/image";
import { Container } from "react-bootstrap";
import heroImage from "../../assets/image/hero-banner.png";
const Hero = () => {
  return (
    <div className="hero-full-area">
      <Container>
        <div className="hero-inner-container">
          <div className="single-hero-item">
            <Image src={heroImage} width={1400} height={500} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

import mainLogo from "@/assets/image/footerLogo.png";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
const MainFooter = () => {
  return (
    <div className="footer-main-area">
      <Container>
        <div className="footer-inner-container">
          <Row>
            <Col lg="4">
              <div className="footer-left-content">
                <div className="footer-title">
                  <Link href="/">
                    <Image src={mainLogo} alt="" />
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas proin sapien
                  eget eu. Ornare scelerisque laoreet bibendum amet velit mi
                  integer libero.
                </p>
              </div>
            </Col>
            <Col lg="8">
              <div className="footer-right-content">
                <Row>
                  <Col lg="4">
                    <div className="footer-right-single-item">
                      <div className="footer-title">
                        <h4>Contact info</h4>
                      </div>
                      <div className="single-address">
                        <span>Address</span>
                        <p>
                          House 7/7A, Sector 17Block H-1, BGMEA Complex Uttara,
                          Dhaka-1230
                        </p>
                      </div>
                      <div className="single-address">
                        <span>Phone Number</span>
                        <p>+8801736662724</p>
                      </div>
                      <div className="single-address">
                        <span>Email Address</span>
                        <p>sumaiya98sumu@gmail.com</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="footer-right-single-item">
                      <div className="footer-title">
                        <h4>Company</h4>
                      </div>
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">PostgreSQL</a>
                        </li>
                        <li>
                          <a href="#">Client list</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Download</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="footer-right-single-item">
                      <div className="footer-title">
                        <h4>My account</h4>
                      </div>
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">PostgreSQL</a>
                        </li>
                        <li>
                          <a href="#">Client list</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Download</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MainFooter;

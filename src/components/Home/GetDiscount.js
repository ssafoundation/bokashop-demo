import DownloadIcon from "@/assets/icon/DownloadIcon";
import imageRight from "@/assets/image/getDiscount.png";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
const GetDiscount = () => {
  return (
    <div className="get-discount-full-area">
      <Container>
        <div className="get-discount-inner-container">
          <Row>
            <Col lg="6" className="my-auto">
              <div className="get-discount-left-content">
                <h2>Purchase Product from Mobile App To Get Extra Discount </h2>
                <a href="#" className="primary-btn">
                  <DownloadIcon />
                  Download Now
                </a>
              </div>
            </Col>
            <Col lg="6">
              <div className="get-discount-right-image">
                <Image width={600} height={600} src={imageRight} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default GetDiscount;

import LongArrow from "@/assets/icon/LongArrow";
import LoveIcon from "@/assets/icon/LoveIcon";
import StarIcon from "@/assets/icon/StarIcon";
import productImage from "@/assets/image/product/product-1.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
const BestDeals = () => {
  return (
    <div className="best-deal-full-area">
      <Container>
        <div className="best-deal-inner-container">
          <div className="section-title">
            <h2>Best Deals For You</h2>
          </div>
          <div className="best-deal-product-list-wrap">
            {[...Array(8)].map((_, i) => (
              <div className="single-product-item" key={i}>
                <div className="single-product-top">
                  <div className="wishlist-btn">
                    <button>
                      <LoveIcon />
                    </button>
                  </div>
                  <Image src={productImage} width={400} height={400} alt="" />
                </div>
                <div className="single-product-bottom">
                  <div className="single-product-title">
                    <div className="name">
                      <h4>Earbuds Max</h4>
                    </div>
                    <div className="price">
                      <del>1500 TK</del>
                      <h6>1200 TK</h6>
                    </div>
                  </div>
                  <div className="sub-title">
                    <p>Premium Bone conduction Open Ear Bluetooth</p>
                  </div>
                  <div className="product-rating">
                    <div className="start">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <span>(512)</span>
                  </div>
                  <div className="add-to-cart-btn">
                    <Link href="/">Add to cart</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="product-see-more">
            <a href="#" className="primary-btn">
              See More <LongArrow />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestDeals;

import LongArrow from "@/assets/icon/LongArrow";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import image1 from "../../assets/image/category/image-1.png";
const Categories = () => {
  return (
    <div className="categories-product">
      <Container>
        <div className="categories-inner-container">
          <div className="section-title">
            <h2>Categories</h2>
          </div>
          <div className="categories-items-wrap">
            {[...Array(10)].map((_, i) => (
              <Link
                href={`/search/category/${i + 1}`}
                className="single-category-item"
                key={i}
                as={`/search/category/${i + 1}`}
              >
                <span>
                  Electronics <LongArrow />
                </span>
                <Image src={image1} width={400} height={600} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;

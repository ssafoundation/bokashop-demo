import { categoryData } from "@/assets/data/categoryData";
import LoveIcon from "@/assets/icon/LoveIcon";
import StarIcon from "@/assets/icon/StarIcon";
import productImage from "@/assets/image/product/product-1.png";
import Layout from "@/components/Layouts/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const CategorySearch = () => {
  const { asPath } = useRouter();
  console.log(asPath);

  const [activeCategory, setActiveCategory] = useState(categoryData[0].name);
  console.log(activeCategory);
  return (
    <>
      <Head>
        <title>Product Category</title>
        <meta name="description" content="Product Category" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="category-search-full-area">
        <Container>
          <div className="category-search-inner-container">
            <div className="search-category-data-show">
              <p>Showing 48 items out of 1012 items</p>
            </div>
            <Row>
              <Col lg="4">
                <div className="category-list-left">
                  <div className="navbar-main-category">
                    <ul>
                      {categoryData?.map(({ name, subcategory }, idx) => (
                        <li key={idx} onClick={() => setActiveCategory(name)}>
                          <div
                            className={
                              activeCategory === name
                                ? "category-single-nav active-nav"
                                : "category-single-nav"
                            }
                          >
                            <div className="category-nav-title">{name}</div>
                            {activeCategory === name ? (
                              <>
                                {" "}
                                <i className="bx bx-chevron-right"></i>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <ul
                            className={
                              activeCategory === name ? "active-sub-menu" : ""
                            }
                          >
                            {subcategory.map(({ sName }, i) => (
                              <li key={i}>{sName}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="8">
                <div className="category-product-list-right">
                  {[...Array(8)].map((_, i) => (
                    <div className="single-product-item" key={i}>
                      <div className="single-product-top">
                        <div className="wishlist-btn">
                          <button>
                            <LoveIcon />
                          </button>
                        </div>
                        <Image
                          src={productImage}
                          width={400}
                          height={400}
                          alt=""
                        />
                      </div>
                      <div className="single-product-bottom">
                        <div className="single-product-title">
                          <div className="name">
                            <h4>Earbuds Max</h4>
                          </div>
                          <div className="price">
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
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CategorySearch;

CategorySearch.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

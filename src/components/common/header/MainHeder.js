import CartIcon from "@/assets/icon/CartIcon";
import CloseIcon from "@/assets/icon/CloseIcon";
import FilterIcon from "@/assets/icon/FilterIcon";
import LoveIcon from "@/assets/icon/LoveIcon";
import SearchIcon from "@/assets/icon/SearchIcon";
import mainLogo from "@/assets/image/mainLogo.png";
import { Slider } from "antd";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "react-bootstrap";

const MainHeder = () => {
  const [filterShow, setFilterShow] = useState(false);
  const onChange = (value) => {
    console.log("onChange: ", value);
  };
  const onAfterChange = (value) => {
    console.log("onAfterChange: ", value);
  };

  return (
    <div className="header-main-area">
      <Container>
        <div className="main-header-inner-container">
          <div className="header-logo">
            <Link href="/">
              <Image src={mainLogo} alt="" />
            </Link>
          </div>
          <div className="header-navbar-right">
            <div className="navbar-menu-list">
              <ul>
                <li>
                  <Link href="/about">Category</Link>
                </li>
                <li>
                  <Link href="/">Deals</Link>
                </li>
                <li>
                  <Link href="/">What’s New</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-account-info">
              <div className="header-search-bar">
                <div className="search-area-wrap">
                  <label htmlFor="search-field">
                    <SearchIcon />
                  </label>
                  <input
                    type="search"
                    name=""
                    id="search-field"
                    placeholder="Search Product"
                  />
                </div>
                <div className="search-filter-button">
                  <button
                    onClick={() => setFilterShow(!filterShow)}
                    disabled={filterShow}
                  >
                    <FilterIcon />
                  </button>
                </div>
                <div
                  className={
                    filterShow
                      ? "header-show-filter-options filter-show"
                      : "header-show-filter-options filter-hide"
                  }
                >
                  <button
                    className="filter-area-close-icon"
                    onClick={() => setFilterShow(!filterShow)}
                    disabled={!filterShow}
                  >
                    <CloseIcon />
                  </button>
                  <div className="search-filter-header">
                    <h3>Filter</h3>
                  </div>
                  <div className="header-filter-function-wrap">
                    <div className="tag-filter-left">
                      <h4>Most search</h4>
                      <ul>
                        <li>All</li>
                        <li>Clothing</li>
                        <li>Baby’s toy’s</li>
                        <li>Electronics</li>
                        <li>Grocery</li>
                        <li>Health & Beauty</li>
                      </ul>
                    </div>
                    <div className="search-filter-divider"></div>
                    <div className="price-filter-right">
                      <h4>Price Range</h4>
                      <div className="filter-price-range">
                        <Slider
                          range
                          step={1}
                          defaultValue={[20, 50]}
                          onChange={onChange}
                          onAfterChange={onAfterChange}
                          width={100}
                        />
                        {/* <InputRange
                          formatLabel={(value) => `${value}$`}
                          maxValue={100}
                          minValue={0}
                          value={value}
                          onChange={handleRangeChange}
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="filter-apply-button-area">
                    <button
                      onClick={() => setFilterShow(!filterShow)}
                      disabled={!filterShow}
                    >
                      Cancel
                    </button>
                    <button>Apply</button>
                  </div>
                </div>
              </div>
              <div className="header-card-and-profile-info">
                <Link href="/">
                  <LoveIcon /> Wishlist
                </Link>
                <Link href="/">
                  <CartIcon />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeder;

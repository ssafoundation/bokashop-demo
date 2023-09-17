import BestDeals from "@/components/Home/BestDeals";
import Categories from "@/components/Home/Categories";
import GetDiscount from "@/components/Home/GetDiscount";
import Hero from "@/components/Home/Hero";
import MostSelling from "@/components/Home/MostSelling";
import ProductForYou from "@/components/Home/ProductForYou";
import Layout from "@/components/Layouts/Layout";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Bokashop</title>
        <meta name="description" content="Bokashop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Hero />
        <Categories />
        <BestDeals />
        <MostSelling />
        <ProductForYou />
        <GetDiscount />
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

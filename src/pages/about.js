import Layout from "@/components/Layouts/Layout";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default AboutPage;
AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

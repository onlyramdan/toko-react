import Header from "../parts/Header";
// import Hero from "../parts/Hero";
// import JustArrived from "../parts/HomePage/JustArrived";
// import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Breadcrumb from "../components/Breadcrums";
// import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Foter";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}

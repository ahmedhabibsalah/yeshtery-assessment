import React, { Suspense } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";

const Products = React.lazy(() => import("../components/Products"));

function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Products />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;

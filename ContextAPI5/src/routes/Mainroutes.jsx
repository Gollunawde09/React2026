import ProductDetails from "../components/ProductDetails";
import ServiceDetails from "../components/ServiceDetails";

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/detail/:name" element={<ProductDetails />} />

        <Route path="/service" element={<Service />} />
         <Route path="/service/details" element={<ServiceDetails />} />
        </Routes>

        <Route path="/about" element={<about />} />
      </Routes>

  );
};

export default Mainroutes;
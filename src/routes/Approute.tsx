import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Aboutus from "../screens/Aboutus";
import Layout from "../components/layout";
import ServiceSupport from "../screens/serviceSupport";
import Faq from "../screens/faq";

function Approute() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<Aboutus />} />
          <Route path="/serviceSupport" element={<ServiceSupport />} />
          <Route path="/Faq" element={<Faq />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Approute;

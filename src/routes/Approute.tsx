import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Aboutus from "../screens/Aboutus";

function Approute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approute;

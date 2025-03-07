import PartnersList from "../../screens/ParnersList";
import Card from "./Card";
import { motion } from "motion/react";
import "./Card.css";

function Solutions() {
  const missionVision = () => {
    return (
      <div
        className="segmentCard m-0 mt-5
      "
        id="missionvision"
      >
        <h1 className="flex flex-col my-4 font-bold text-base">
          {" "}
          MISSION & VISION
        </h1>
        <h2 className="text-sky-500 font-medium"> OUR MISSION </h2>
        <h4 className="text-black mt-2">
          {" "}
          Health is a state of body. Wellness is a state of being. – J Stanford
          To provide latest and superior technologies available at affordable
          cost and effective logistic management system so as to allow our
          esteemed customer to deliver tests results with utmost accuracy &
          precision every time in shortest possible TAT at most affordable
          prices.
        </h4>
        <h2 className="text-sky-500 mt-4">OUR VISION</h2>
        <h4 className="text-black mt-2">
          {" "}
          There's nothing more important than good health - that's our principal
          capital asset. - Arlen Specter To become a leader in providing
          holistic services & quality tools at reasonable cost, which enable our
          esteemed Diagnostic service provider to deliver test services to
          patients at affordable price. Steadfast with a dedicated team of
          committed professionals zealous to improve healthcare services through
          practice and innovation.
        </h4>
        <h1 className="mt-5">
          Deepti enterprises endeavours to extend services in all healthcare
          units, from a remote micro lab to referral pathology laboratory,
          covering a range of over 1500 tests in the mentioned disciplines using
          latest technology and equipment:
          <h2 className="mt-2">Biochemistry</h2>
          <h2>Haematology</h2> <h2> Molecular</h2>
          <h2> Biology Clinical Pathology</h2>
        </h1>
      </div>
    );
  };
  return (
    <div className="my-5 relative max-w-screen-xl mx-auto">
      {/* Section 1: Title */}
      <div className="">
        <motion.h1
          className="text-sky-700 font-medium text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Featured Products
        </motion.h1>
      </div>

      {/* Section 2: Cards */}
      <motion.div
        className="flex"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Card />
      </motion.div>

      {/* Section 3: Mission and Vision */}
      <motion.div
        className="flex "
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {missionVision()}
      </motion.div>
      <PartnersList />
    </div>
  );
}

export default Solutions;

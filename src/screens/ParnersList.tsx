import React from "react";
import { motion } from "motion/react";

// Dummy data (partner names only)
const partners = [
  "Transasia Bio Medicals Ltd.",
  "Sysmex India Pvt. Ltd.",
  "Meril Diagnostic Pvt. Ltd.",
  "Rapid Diagnostic Pvt. Ltd.",
  "SD Biosensor Healthcare Pvt. Ltd.",
  "Bio Lab Diagnostics Pvt. Ltd.",
  "Invitronics (Rokonik)",
  "Sensa Core Medical Instrumentation Pvt. Ltd.",
  "Lab Tech Healthcare",
  "Arandor Performance Materials India Pvt. Ltd.",
  "Reckon Diagnostics Pvt. Ltd.",
  "Medispace Solutions (Snibe)",
  "Pathoworld Labtech Pvt. Ltd.",
  "J. Mitra & Co. Pvt. Ltd.",
  "Human Diagnostics & Surgichem",
  "Labtech Disposables",
  "Lab Line Equipments Pvt. Ltd.",
  "Huwell Life Sciences",
  "Astra Bioscience",
  "Immunoshop India Pvt. Ltd.",
  "Immuno Concept India Pvt. Ltd.",
  "Casara Diagnostics Pvt. Ltd.",
  "Alsat Diagnostics Pvt. Ltd.",
];

const PartnersList = () => {
  return (
    <motion.div
      className="partners-container p-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      id="partners"
    >
      <h1 className="text-center text-2xl font-bold mb-6">
        Our Trusted Partners
      </h1>
      <div className="partners-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="partner-card flex  bg-white p-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-110 hover:bg-red-50 transition-all"
          >
            <h2 className="text-center text-lg font-medium text-gray-800">
              {partner}
            </h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PartnersList;

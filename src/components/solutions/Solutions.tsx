import Card from "./Card";

function Solutions() {
  const missionVision = () => {
    return (
      <div className="segmentCard">
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
    <div>
      <div className="my-5 mx-16">
        <div className=" mx-6 ">
          <h1 className="text-sky-700 font-medium text-xl">
            Featured Products
          </h1>
        </div>
        <div className="flex">
          <Card />
        </div>
        <div className=" mx-6 ">{missionVision()}</div>
      </div>
    </div>
  );
}

export default Solutions;

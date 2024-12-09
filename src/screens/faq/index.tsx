import { useState } from "react";
import { supportImage } from "../../assets";
import ServiceSupport from "../serviceSupport";
import "./Faq.css";

type Props = {};

const Faq = ({}) => {
  // const [userInfo, setUserInfo] = useState({
  //   name: "",
  //   companyName: "",
  //   state: "",
  //   city: "",
  //   zip: "",
  //   mobileNumber: "",
  //   email: "",
  // });
  // const handelChangeText = (_updateValue: string, e: string) => {
  //   console.log(userInfo);
  //   setUserInfo((prev) => ({ ...prev, [_updateValue]: e }));
  // };
  return (
    <div>
      <div
        className="imageContainer"
        style={{
          backgroundImage: `url(${supportImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="flex  w-5/12 flex-col text-sky-400 items-center font-montserrat-bold text-3xl">
          Enquiry
        </h1>
      </div>
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-col px-24 my-7  lg:w-6/12  ">
          <h2 className="font-montserrat font-medium">Address</h2>
          <div>
            <h4 className="py-4 font-montserrat font-normal ">
              India HQ Office
            </h4>
            <p className="py-4 font-montserrat font-normal ">
              🌏 2nd Floor 50,Sarv Suvidha Nagar,<br></br>
              Opp.Narmada Water Tank,Near Bengali Squre,Indore-452016(M.P.)
            </p>
            <p className="py-4 font-montserrat font-normal ">
              ✆ 0731-4038175 , 9302578274, 9302578282
            </p>
            <p className="py-4 font-montserrat font-normal ">
              ✉️ info@deeptienterprises.co.in
            </p>
            <p className="  font-montserrat font-normal ">
              deeptienterprises@rediffmail.com
            </p>
          </div>
        </div>
        <ServiceSupport hideImage showCard />
      </div>
    </div>
  );
};

export default Faq;

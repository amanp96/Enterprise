import { useState } from "react";
import { supportImage } from "../../assets";
import FloatLabelInput from "../../components/form/FloatlabelInput";
import "./ServiceSupport.css";
import emailjs from "@emailjs/browser";

type Props = {
  hideImage?: boolean;
  showCard?: boolean;
};

const ServiceSupport = ({ hideImage = false, showCard = false }: Props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    companyName: "",
    state: "",
    city: "",
    zip: "",
    mobileNumber: "",
    email: "",
  });
  const handelChangeText = (_updateValue: string, e: string) => {
    setUserInfo((prev) => ({ ...prev, [_updateValue]: e }));
  };
  const sendEmail = () => {
    emailjs
      .send("service_xjowjjg", "template_7lcj64f", userInfo, {
        publicKey: "I4QmWQLKYZ30IBKWI",
      })
      .then((res) => console.log(JSON.stringify(res), userInfo))
      .catch((err) => console.log(err, "errrr"));
  };
  return (
    <div>
      {!hideImage && (
        <div
          className="imageContainer "
          style={{
            backgroundImage: `url(${supportImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="flex  w-5/12 flex-col text-sky-400 items-center font-montserrat-bold text-3xl">
            Service Support
          </h1>
        </div>
      )}
      <div className={showCard ? "segmentCard" : "segmentWithCard"}>
        <div className="sub-container">
          <p className="inputName">Name</p>
          <FloatLabelInput
            type="text"
            value={userInfo.name}
            onChange={(e: any) => {
              handelChangeText("name", e.target.value);
            }}
            className="inputContainer"
          />
        </div>
        <div className="sub-container">
          <p className="inputName">Company name</p>
          <FloatLabelInput
            type="text"
            value={userInfo.companyName}
            onChange={(e: any) => {
              handelChangeText("companyName", e.target.value);
            }}
            className="inputContainer"
          />
        </div>
        <div className="sub-container">
          <p className="inputName">State</p>
          <FloatLabelInput
            type="text"
            value={userInfo.state}
            onChange={(e: any) => {
              handelChangeText("state", e.target.value);
            }}
            className="inputContainer"
          />
        </div>
        <div className="sub-container">
          <p className="inputName">City</p>
          <FloatLabelInput
            type="text"
            value={userInfo.city}
            onChange={(e: any) => {
              handelChangeText("state", e.target.value);
            }}
            className="inputContainer"
          />
        </div>
        <div className="sub-container">
          <p className="inputName">Zip</p>
          <FloatLabelInput
            type="text"
            value={userInfo.zip}
            onChange={(e: any) => {
              handelChangeText("zip", e.target.value);
            }}
            className="inputContainer"
          />
        </div>
        <div className="sub-container">
          <p className="inputName">Contact No.</p>
          <FloatLabelInput
            type="text"
            value={userInfo.mobileNumber}
            onChange={(e: any) => {
              handelChangeText("mobileNumber", e.target.value);
            }}
          />
        </div>
        <div className="sub-container">
          <p className="inputName">E-mail</p>
          <FloatLabelInput
            type="text"
            value={userInfo.email}
            onChange={(e: any) => {
              handelChangeText("email", e.target.value);
            }}
            className="inputContainer"
          />
        </div>
        {!hideImage ? (
          <div className=" flex flex-1 flex-col w-6/12 items-end px-10">
            <div className="bg-slate-700  w-64 my-8  flex flex-col items-center px-6 py-3 rounded-lg hover:bg-sky-800 cursor-pointer">
              <h2 className="text-white group-hover:text-sky-500">Submit</h2>
            </div>
          </div>
        ) : (
          <div className=" flex flex-1 flex-col w-full items-end ">
            <div
              className="bg-slate-700   my-8  flex flex-col items-center px-16 py-3 rounded-lg hover:bg-sky-800 cursor-pointer"
              onClick={sendEmail}
            >
              <h2 className="text-white group-hover:text-sky-500">Send</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSupport;

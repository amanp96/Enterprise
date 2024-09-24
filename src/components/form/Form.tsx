import { useState } from "react";
import { formBackground } from "../../assets";
import FloatLabelInput from "./FloatlabelInput";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [peopleCount, setPeopleCount] = useState("");

  return (
    <div className=" px-16 relative py-6">
      <div
        style={{
          backgroundImage: `url(${formBackground})`,
          paddingTop: "3%",
          paddingInlineStart: "15%",
          paddingInlineEnd: "15%",
        }}
      >
        <div className="px-16 pt-20 pb-12 bg-white  relative">
          <h2 className="leading-8 text-2xl mb-4 font-semibold">
            Let us find your ideal workspace
          </h2>
          <p className="mb-4 text-lg font-normal">
            Complete the form and a WeWork team member will be in touch with you
            shortly
          </p>
          <form className=" pr-4">
            <div className="mb-2">
              <div className="flex justify-between mt-8">
                <div className="flex-1 mr-2">
                  <FloatLabelInput
                    label="Full Name"
                    type="text"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <FloatLabelInput
                    label="Email Address"
                    type="text"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2 ">
                <div className="flex-1 mr-2">
                  <FloatLabelInput
                    label="Company Name"
                    type="text"
                    value={companyName}
                    onChange={(e: any) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <FloatLabelInput
                    label="Phone Number"
                    type="text"
                    value={phoneNumber}
                    onChange={(e: any) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex-1 mr-2">
                  <FloatLabelInput
                    label="Location"
                    type="text"
                    value={location}
                    onChange={(e: any) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <FloatLabelInput
                    label="How many people need workspace"
                    type="text"
                    value={peopleCount}
                    onChange={(e: any) => setPeopleCount(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
          <div>
            <div className="flex mb-6">
              <p className="font-semibold text-sm ">
                By clicking the button below, you agree to our{" "}
                <a href="">
                  <span className="text-blue-600 hover:border-b-2 border-blue-600 text-base">
                    Terms of Service
                  </span>{" "}
                </a>
                <span>and acknowledge our</span>{" "}
                <a
                  href=""
                  className="text-blue-600 hover:border-b-2 border-blue-600 text-base"
                >
                  <span>Global Privacy Policy.</span>
                </a>
              </p>
            </div>
            <div className="mb-2">
              <button
                className="bg-blue-700 py-4 px-6 border-solid rounded-md hover:bg-blue-800"
                onClick={() => {
                  alert(JSON.stringify({ name, phoneNumber }));
                }}
              >
                <span className="text-white">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

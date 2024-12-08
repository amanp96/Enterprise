import { footerBacground, LogoImage } from "../../assets";
import { FaFacebook } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TiSocialYoutubeCircular } from "react-icons/ti";

import { AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css";

type Props = {};
{
  /* <div className="absolute inset-0  items-center flex mx-20">
        <div className="flex-1">
          <h2 className="text-gray-50 flex">Stay Connected</h2>
          <div className="flex mt-5">
            <h2 className="w-24 text-white">Email :</h2>
            <div>
              <a className="text-white hover:text-blue-600 cursor-pointer">
                <h3 className=""> info@deeptienterprises.co.in</h3>
              </a>
              <a className="text-white hover:text-blue-600 cursor-pointer">
                <h3>deeptienterprises@rediffmail.com</h3>
              </a>
            </div>
          </div>
          <div className="flex mt-5">
            <h2 className="w-24 text-white">Contact no :</h2>
            <div>
              <a className="text-white hover:text-blue-600 cursor-pointer">
                <h3>0731-4038175</h3>
              </a>
              <a className="text-white hover:text-blue-600 cursor-pointer">
                <h3>9302578274</h3>
              </a>
            </div>
          </div>
        </div>
        <button className="">
          <div className=" flex flex-col items-center p-5 hover:shadow-md ">
            <img src={LogoImage} className="h-14 w-14 m-2" />
            <h1 className="text-slate-50 ">DEEPTI ENTERPRISES </h1>
            <h1 className="text-slate-50 ">(INDIA) PRIVATE LIMITED</h1>
          </div>
        </button>
      </div> */
}
const Footer = ({}: Props) => {
  return (
    <div className="relative ">
      <div
        className="bgImageContainer flex-col lg:flex-row"
        style={{
          backgroundImage: `url(${footerBacground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex-col flex-1  justify-between">
          <div className="my-5">
            <h3 className="text-white">Subscribe Here</h3>
            <div className="flex my-2">
              <input />
              <div className="bg-slate-600 mx-2 px-2 text-white cursor-pointer hover:bg-sky-950 ">
                <h2>Go</h2>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-white">Stay Conneted</h2>
            <div className="flex  my-3">
              <FaFacebook
                className="iconsStyle text-blue-600"
                cursor={"pointer"}
              />
              <AiFillTwitterCircle
                className="iconsStyle text-sky-500"
                cursor={"pointer"}
              />
              <TiSocialYoutubeCircular
                className="iconsStyle text-red-600"
                cursor={"pointer"}
              />
              <div className="bg-blue-800 rounded-2xl px-2  mx-1 flex  items-center cursor-pointer">
                <FiLinkedin className="text-white text-base" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col   justify-between">
          <h2 className=" text-white">Address</h2>
          <h4 className=" text-gray-300">India HQ Office</h4>
          <p className=" text-gray-300">
            2nd Floor 50,Sarv Suvidha Nagar,<br></br>
            Opp.Narmada Water Tank,Near Bengali Squre,Indore-452016(M.P.)
          </p>
          <p className=" text-gray-300">
            0731-4038175 , 9302578274, 9302578282
          </p>
          <p className=" text-gray-300">info@deeptienterprises.co.in</p>
          <p className=" text-gray-300">deeptienterprises@rediffmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

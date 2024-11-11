import { footerBacground, LogoImage } from "../../assets";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="relative ">
      <img src={footerBacground} className="w-full h-80" alt="Card" />
      <div className="absolute inset-0  items-center flex mx-20">
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
      </div>
    </div>
  );
};

export default Footer;

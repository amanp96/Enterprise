import { footerBacground, LogoImage } from "../../assets";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="relative">
      <img src={footerBacground} className="w-full h-48" alt="Card" />
      <div className="absolute inset-0  items-center flex mx-20">
        <h2 className="text-gray-50 flex flex-1">Stay Connected</h2>
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

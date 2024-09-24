import { footerBacground } from "../../assets";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="relative">
      <img src={footerBacground} className="w-full h-48" alt="Card" />
      <div className="absolute inset-0 justify-center items-center flex">
        <p className="text-gray-50">Let's join hands to work Together</p>
        <button className="mx-10">
          <div className="bg-white shadow-md p-5 rounded-full top-0   hover:bg-violet-200">
            <p className="text-violet-700">let connect</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Footer;

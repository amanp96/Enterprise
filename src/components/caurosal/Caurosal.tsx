import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { Images } from "../../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./Button";
import Solutions from "../solutions/Solutions";

function Caurosal() {
  const caurosalRef = useRef<any>(null);
  const handlePress = () => {
    caurosalRef.current.onClickNext();
  };
  return (
    <div className="py-2 ">
      <div className=" relative flex-1  items-center">
        <Carousel
          // showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          ref={caurosalRef}
          interval={2000}
        >
          {Images.map((item) => (
            <div>
              <img src={item.caurosal} />
              {/* <p>{item.text}</p> */}
            </div>
          ))}
        </Carousel>
        <div className=" flex-1 flex justify-center items-center">
          <Button onPress={handlePress} />
        </div>
      </div>
      {/* <Solutions /> */}
    </div>
  );
}

export default Caurosal;

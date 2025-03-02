import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { Images } from "../../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./Button";

function Caurosal() {
  const caurosalRef = useRef<any>(null);

  const handlePress = () => {
    caurosalRef.current.onClickNext();
  };

  return (
    <div className="py-4">
      <div className="relative max-w-screen-xl mx-auto">
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          ref={caurosalRef}
          interval={2000}
        >
          {Images.map((item, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={item.caurosal}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-top rounded-md"
              />
            </div>
          ))}
        </Carousel>

        <div className=" flex justify-center absolute -right-8 bottom-1/2">
          <Button onPress={handlePress} />
        </div>
      </div>
    </div>
  );
}

export default Caurosal;

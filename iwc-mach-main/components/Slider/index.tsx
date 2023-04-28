import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ReactSliderProps {
  children: JSX.Element | React.ReactNode;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  infinite?: boolean;
  dots?: boolean;
  swipeToSlide?: boolean;
}

const ReactSlider: React.FC<ReactSliderProps> = ({
  children,
  slidesToShow = 3,
  slidesToScroll = 1,
  speed = 500,
  infinite = true,
  dots = true,
  swipeToSlide = true,
}) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    swipeToSlide: swipeToSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: infinite,
          dots: dots,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default ReactSlider;

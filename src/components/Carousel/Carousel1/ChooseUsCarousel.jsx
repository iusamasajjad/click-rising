import Slider from "react-slick"
import sliderImg from "./slider-2.png"
import slider from "./slider.png"
import slider3 from "./slider-3.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import arrowRight from "./arrow-right.png"
import arrowLeft from "./arrow-left.png"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "90px",
        top: "-80px",
        display: "block",
      }}
      onClick={onClick}
    >
      <img width={40} src={arrowRight} alt="arrowRight" />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "155px",
        top: "-80px",
        left: "unset",
        display: "block",
      }}
      onClick={onClick}
    >
      <img width={40} src={arrowLeft} alt="arrowLeft" />
    </div>
  )
}

export const ChooseUSCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div>
      <div className="container mx-auto">
        <p className="text-blue m-0">WHY CHOOSE US?</p>
        <p className="text-md font-bold">
          Influencers who <span className="text-blue">trusted</span> us.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          <div className="col-12 d-flex justify-content-center">
            <img className="col-10" src={slider} alt="" />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img className="col-10" src={slider3} alt="" />{" "}
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img className="col-10" src={sliderImg} alt="" />{" "}
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img className="col-10" src={slider} alt="" />{" "}
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img className="col-10" src={slider3} alt="" />{" "}
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img className="col-10" src={sliderImg} alt="" />{" "}
          </div>
        </Slider>
      </div>
    </div>
  )
}

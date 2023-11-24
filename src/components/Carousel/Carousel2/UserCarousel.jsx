import Slider from "react-slick"
import user from "./user.png"
import user1 from "./user1.png"
import user2 from "./user2.png"
import arrowRight from "./arrow-right.png"
import arrowLeft from "./arrow-left.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../style.css"

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "-25px",
        top: "",
        display: "block",
      }}
      onClick={onClick}
    >
      <img width={30} src={arrowRight} alt="arrowRight" />
    </div>
  )
}

function PrevArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={className}
      style={{
        top: "",
        left: "-36px",
        display: "block",
        zIndex: "10",
      }}
      onClick={onClick}
    >
      <img width={30} src={arrowLeft} alt="arrowLeft" />
    </div>
  )
}

export const UserCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
      <div className="d-flex justify-content-center py-5 col-12">
        <Slider className="col-10" {...settings}>
          <div className="col-12 d-flex justify-content-center">
            <div className="bg-light-purple col-10 mh-200 border-radius-sm px-4 py-4">
              <div className="d-flex align-items-center gap-2">
                <img src={user} alt="user" />
                <p className="m-0">Leo Calzoni</p>
              </div>
              <p className="pt-3">
                “ClickRising makes finding App download campaigns so easy. Just
                hit sign-up to see every campaign you can apply for. Get your
                link and boom! I love how easy they’ve made this!”
              </p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="bg-dark-blue col-10 mh-200 text-white border-radius-sm px-4 py-4">
              <div className="d-flex align-items-center gap-2">
                <img src={user1} alt="user" />
                <p className="m-0">Lincoln Stanton</p>
              </div>
              <p className="pt-3">
                “ClickRising pays for downloads coming from worldwide. You don’t
                wanna miss this!”
              </p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="bg-dark-blue col-10 mh-200 text-white border-radius-sm px-4 py-4">
              <div className="d-flex align-items-center gap-2">
                <img src={user2} alt="user" />
                <p className="m-0">Daniel Curtis</p>
              </div>
              <p className="pt-3">
                “ClickRising is a MUST for every influencer and social media
                user. There is no deadline, no pushing and no revisions. I love
                to check my performance on my live dashboard!”
              </p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="bg-light-purple col-10 mh-200 border-radius-sm px-4 py-4">
              <div className="d-flex align-items-center gap-2">
                <img src={user} alt="user" />
                <p className="m-0">Leo Calzoni</p>
              </div>
              <p className="pt-3">
                “ClickRising makes finding App download campaigns so easy. Just
                hit sign-up to see every campaign you can apply for. Get your
                link and boom! I love how easy they’ve made this!”
              </p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="bg-dark-blue col-10 mh-200 text-white border-radius-sm px-4 py-4">
              <div className="d-flex align-items-center gap-2">
                <img src={user1} alt="user" />
                <p className="m-0">Lincoln Stanton</p>
              </div>
              <p className="pt-3">
                “ClickRising pays for downloads coming from worldwide. You don’t
                wanna miss this!”
              </p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="bg-dark-blue col-10 mh-200 text-white border-radius-sm px-4 py-4">
              <div className="d-flex align-items-center gap-2">
                <img src={user2} alt="user" />
                <p className="m-0">Daniel Curtis</p>
              </div>
              <p className="pt-3">
                “ClickRising is a MUST for every influencer and social media
                user. There is no deadline, no pushing and no revisions. I love
                to check my performance on my live dashboard!”
              </p>
            </div>
          </div>
        </Slider>
      </div>
  )
}

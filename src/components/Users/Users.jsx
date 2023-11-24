import { UserCarousel } from "../Carousel/Carousel2/UserCarousel"
export const Users = () => {
  return (
    <div className="bg-blue">
      <div className="text-center py-5">
        <p className="text-white">Testimonials</p>
        <p className="text-white font-bold text-lg">What our users say? 🌟</p>
        <p className="text-white">
          Explore what clients said about ClickRising because they trust.
        </p>
      </div>
      <UserCarousel />
    </div>
  )
}

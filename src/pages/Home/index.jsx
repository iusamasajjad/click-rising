import { Campaigns } from "../../components/Campaigns/Campaigns"
import { ChooseUSCarousel } from "../../components/Carousel/Carousel1/ChooseUsCarousel"
import { ChooseUs } from "../../components/ChooseUS/ChooseUs"
import { EarningSteps } from "../../components/EarningSteps/EarningSteps"
import { Explore } from "../../components/Explore/Explore"
import { Faq } from "../../components/FAQ/Faq"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Main } from "../../components/Main/Main"
import { RevenueCalculator } from "../../components/RevenueCalculator/RevenueCalculator"
import { TrustedPlatform } from "../../components/TrustedPlatform/TrustedPlatform"
import { Users } from "../../components/Users/Users"

export const Home = () => {
  return (
    <div>
      <Header/>
      <Main />
      <div className="d-none d-lg-block d-sm-none">
        <Campaigns />
      </div>
      <div className="d-none d-lg-block d-sm-none">
        <RevenueCalculator />
      </div>
      <div className="d-none d-lg-block d-sm-none">
        <TrustedPlatform />
      </div>
      <Explore />
      <div className="d-block d-lg-none d-sm-block">
        <Campaigns />
      </div>
      <div className="d-block d-lg-none d-sm-block">
        <RevenueCalculator />
      </div>
      <div className="d-block d-lg-none d-sm-block">
        <TrustedPlatform />
      </div>
      <EarningSteps />
      <ChooseUs />
      <ChooseUSCarousel />
      <Faq />
      <Users />
      <Footer />
    </div>
  )
}

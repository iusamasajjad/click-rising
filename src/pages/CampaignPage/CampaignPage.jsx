import { Asphalt } from "../../components/Asphalt/Asphalt"
import { Campaign } from "../../components/Campaign/Campaign"
import { Games } from "../../components/Games/Games"
import { SideBar } from "../../components/sideBar/SideBar"
import game from './power.png'
import subway from './subway.png'
import cod from './cod.png'
import angryBird from './angry-bird.png'

export const CampaignPage = () => {
  return (
    <div className="d-flex col-12">
      <div className="col-2 d-none d-lg-block">
        <SideBar />
      </div>
      <div className="col-lg-10 col-12">
        <Campaign />
        <Asphalt />
        <div className="d-flex flex-wrap">
          <Games image={game} title="Power Slap" />
          <Games image={cod} title="Duty" />
          <Games image={subway} title="Subway Safer" />
          <Games image={angryBird} title="Angry Bird" />
        </div>
      </div>
    </div>
  )
}

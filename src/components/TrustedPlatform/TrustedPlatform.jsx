import gamesIcon from "./games-icon.png"
export const TrustedPlatform = () => {
  return (
    <div>
      <div className="text-center d-flex justify-content-center">
        <div className="col-4 mt-5 pt-5">
          <p className="text-blue">Trusted Platforms</p>
          <h3 className="text-lg">
            Trusted by Top <span className="text-blue">Companies Sign up</span>
            & Explore 💪🏻
          </h3>
          <p className="text-gray">
            Trusted by un-countable leading industries
          </p>
        </div>
      </div>
      <div className="col-12">
        <img className="col-12 pt-5" src={gamesIcon} alt="" />
      </div>
    </div>
  )
}

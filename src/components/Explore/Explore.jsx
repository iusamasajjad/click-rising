import tiktok from './tiktok.png'
export const Explore = () => {
  return (
    <div>
      <div className="text-center d-flex justify-content-center">
        <div className="col-4 mt-5 pt-5">
          <p className="text-blue">How ClickRising Works</p>
          <h3 className="text-lg">
            Explore Click<span className="text-blue">Rising</span>
          </h3>
          <p className="text-gray">
            It's time to turn your social media accounts into income
          </p>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <img className="col-10" src={tiktok} alt="" />
      </div>
    </div>
  )
}

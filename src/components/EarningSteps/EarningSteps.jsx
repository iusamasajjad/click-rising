import arrow from "./arrow-circle-left.png"
import gamesLink from "./gameslink.png"
import ArrowConnection from "./connection.png"
import instaLink from "./instaLink.png"
import ArrowConnection2 from "./connection-2.png"
import socialAnalysis from "./social-analyis.png"
import d23 from "./23.png"
import d12 from "./12.png"
import d85 from "./85.png"
export const EarningSteps = () => {
  return (
    <div className="container col-12 col-lg-10 mt-5">
      <div className="d-flex justify-content-between">
        <p className="text-dark-black text-lg">3 easy steps to start earning</p>
        <div>
          <img className="col-8" src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center">
        <div className="col-11 col-lg-5">
          <img className="col-12" src={gamesLink} alt="" />
        </div>
        <div className="col-11 col-lg-5 px-2">
          <p className="text-blue m-0">STEP 1</p>
          <p className="text-lg font-bold">
            {" "}
            Join a <span className="text-blue">Campaign</span> & Get your Link
            🔗
          </p>
          <p className="text-gray">
            {" "}
            Select a campaign and get your promotion link in one step.
            <br />
            <br />
            Campaigns are always on! There is no limit to promoting multiple
            campaigns at the same time.
          </p>
          <button className="text-white bg-blue rounded-pill px-4 py-2 outline-none border-0">
            Sign up now
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-8 col-lg-8">
          <img className="col-12"  src={ArrowConnection} alt="arrow" />
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="col-11 col-lg-5 px-2">
          <p className="text-blue m-0">STEP 2</p>
          <p className="text-lg font-bold">
            {" "}
            Join a <span className="text-blue">Campaign</span> & Get your Link
            🔗
          </p>
          <p className="text-gray">
            {" "}
            Select a campaign and get your promotion link in one step.
            <br />
            <br />
            Campaigns are always on! There is no limit to promoting multiple
            campaigns at the same time.
          </p>
          <button className="text-white bg-blue rounded-pill px-4 py-2 outline-none border-0">
            Sign up now
          </button>
        </div>
        <div className="col-11 col-lg-5">
          <img className="col-12" src={instaLink} alt="instaLink" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-8">
          <img className="col-12" src={ArrowConnection2} alt="arrow" />
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center">
        <div className="col-11 col-lg-5">
          <img className="col-12" src={socialAnalysis} alt="social-analysis" />
        </div>
        <div className="col-11 col-lg-5 px-2">
          <p className="text-blue m-0">STEP 3</p>
          <p className="text-lg font-bold">
            Provide <span className="text-blue">App installs</span>✨ <br />&
            Get paid per install
          </p>
          <p className="text-gray">
            You can earn limitless money as long as your followers install the
            app via your link.No budget limit, and no invoice.
          </p>
          <div className="d-flex col-12 justify-content-between align-items-center">
            <div className="col-3 text-center">
              <img className="col-12" src={d23} alt="dolor-23" />
              <p className="text-dark-black pt-2">$23</p>
            </div>
            <div className="col-2 text-center">
              <img className="col-12" src={d12} alt="dolor-12" />
              <p className="text-dark-black pt-2">$12</p>
            </div>
            <div className="col-4 text-center">
              <img className="col-12" src={d85} alt="dolor-85" />
              <p className="text-dark-black pt-2">$85</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

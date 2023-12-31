import "./style/style.css"
import graph from "./graph.png"
import powerSlap from "./power.png"
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import twitter from "./twitter.png"
export const Main = () => {
  return (
    <main className="hero-img lg-mx-5 mx-0 position-relative d-flex border-radius-sm justify-content-center text-center">
      {/* get paid per install section */}
      <div
        style={{ right: "10px" }}
        className="text-black rounded-left rounded-left position-absolute col-lg-2 col-5 px-lg-3 px-2  bg-white top-80"
      >
        <div className=" text-start">
          <img width={170} src={graph} alt="graph" />
          <p className="font-bold pt-3">
            Provide App installs & Get Paid Per install
          </p>
          <p className="text-sm">
            Get paid biweekly, no budget limit & no invoice
          </p>
        </div>
      </div>
      {/* ============ power-slap-section ============ */}
      <div
        // style={{ left: 90, bottom: 70 }}
        className="bg-white position-absolute py-2 col-5 col-lg-3 rounded px-2 left-90 bottom-70"
      >
        <div className="col-12 col-lg-">
          <img className="col-12" src={powerSlap} alt="power slap" />
        </div>
        <div>
          <p className="m-0 text-dark-black font-bold">Power Slap</p>
        </div>
        <div>
          <p className="text-gray">App of the week</p>
        </div>
        <button className="px-3 py-2 rounded bg-blue border text-white">
          Get your Link
        </button>
      </div>
      {/* share link section */}
      <div
        style={{ bottom: 0 }}
        className="bg-white right-148 text-start position-absolute py-4 col-lg-4  rounded-top px-3"
      >
        <div>
          <p className="m-0 text-dark-black font-bold">
            Share the Unique link on Social Media
          </p>
        </div>
        <div>
          <p className="text-gray text-sm">
            Create a post or directly share the link with your followers.
          </p>
        </div>
        <div className="w-full">
          <p className="m-0">Post Link</p>
          <input
            className="text-dark-black bg-light-purple border-0 px-2 py-2 rounded col-12"
            type="text"
            placeholder="https://clickrisingpowerslap"
          />
        </div>
      </div>
      {/* social-icons */}
     
      <div
        //  style={{ right: 280, top: 30 }}
        className="position-absolute top-30 right-280"
      >
        <img width={70} src={instagram} alt="instagram" />
      </div>
      <div 
      style={{ position: "absolute !important"}}
      
      className="left-100 position-absolute top-101">
        <img width={70} src={facebook} alt="facebook" />
      </div>
     
      <div  style={{ position: "absolute" }}
        className="left-150 top-300">
        <img width={70} src={twitter} alt="twitter" />
      </div>
      <div className=" col-lg-7 col-12  px-5 pt-lg-5 pt-6">
        <div className="pt-5">
          <h1 className="text-white text-xl   text-center">
            Revenue generator <span className="text-blue">platform</span> for
            influencers 🚀
          </h1>
          <p className="text-white text-md px-lg-5 px-0 py-2">
            Share mobile applications on your social media and get paid for each
            installs by your followers
          </p>
        </div>
        <div className="d-flex gap-3 justify-content-center pt-5">
          <button className="px-lg-5 px-3 py-lg-3 py-2 rounded-pill bg-blue text-white border-0">
            Get Start Now
          </button>
          <button className="px-lg-5 px-3 py-lg-3 py-2  rounded-pill bg-transparent border text-white">
            Explore more
          </button>
        </div>
        <p className="text-white pt-3 pb-5">
          <span className="text-white">✔</span> Get Free Signup now.
        </p>
      </div>
    </main>
  )
}

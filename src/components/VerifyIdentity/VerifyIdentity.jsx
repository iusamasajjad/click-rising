import clickRising from "./click-rising.png"
import tick from "./tick.png"
import sms from "./sms.png"
import arrowRight from './arrow-right.png'
export const VerifyIdentity = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-lg-row">
      <div className="verify-bg border-radius-2 d-flex align-items-end py-5 col-lg-6 col-10">
        <div className="px-5">
          <div>
            <img src={clickRising} alt="clickRising" />
          </div>
          <p className="text-white mt-3 text-lg">Get Paid as more Install</p>
          <p className="text-white">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est,{" "}
          </p>
          <div className="d-flex">
            <div
              className="col-1 mx-2"
              style={{ height: "2px", background: "#F5F5F7" }}
            ></div>
            <div
              className="col-1 mx-2"
              style={{ height: "2px", background: "#9C9CA4" }}
            ></div>
            <div
              className="col-1 mx-2"
              style={{ height: "2px", background: "#9C9CA4" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12 mt-4 d-flex flex-column justify-content-center align-items-center">
        <div className="col-lg-6 col-10">
          <div>
            <div>
              <img src={tick} alt="tick" />
            </div>
            <h2>Verify Your Identity</h2>
            <p className="mt-4">
              Select a way to receive the verification code
            </p>
          </div>
          <div className="d-flex justify-content-between border-bottom align-items-center">
            <div className="mt-3 d-flex gap-2">
              <div>
                <img src={sms} alt="verify-sms" />
              </div>
              <div>
                <p className="font-semibold">Email code to</p>
                <p>ligeragency@email.com</p>
              </div>
            </div>
            <div><img src={arrowRight} alt="arrowRight" /></div>
          </div>
          <div className="mt-4">
            <p className="text-blue">Sign In to a different account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

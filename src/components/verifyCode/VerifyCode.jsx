import clickRising from "./click-rising.png"
import sms from "./mes.png"
export const VerifyCode = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-lg-row">
      <div className="code-bg border-radius-2 d-flex align-items-end py-5 col-lg-6 col-10">
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
              <img src={sms} alt="tick" />
            </div>
            <h2 className="mt-3">We have sent Code</h2>
            <p className="mt-4">
              Enter the code we sent to the email start in ligerage...
            </p>
          </div>
          <div className="d-flex justify-content-betweena lign-items-center">
            <div className="mt-3 d-flex gap-2">
              <div className="col-2">
                <input
                  className="border mt-2 py-2 px-3 rounded col-9"
                  placeholder=""
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="col-2">
                <input
                  className="border mt-2 py-2 px-3 rounded col-9"
                  placeholder=""
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="col-2">
                <input
                  className="border mt-2 py-2 px-3 rounded col-9"
                  placeholder=""
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="col-2">
                <input
                  className="border mt-2 py-2 px-3 rounded col-9"
                  placeholder=""
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="d-flex mt-4 border-bottom justify-content-between">
            <p className="mb-4">Back</p>
            <p className="text-blue mb-4">Don’t receive your code</p>
          </div>
          <div className="mt-4">
            <p className="text-blue">Get your code with another way</p>
          </div>
        </div>
      </div>
    </div>
  )
}

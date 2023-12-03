import clickRising from "./click-rising.png"
export const UpdatePassword = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-lg-row">
      <div className="password-bg border-radius-2 d-flex align-items-end py-5 col-lg-6 col-10">
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
            <h2>Update Your Password</h2>
            <p className="mt-4">
              Already have an account? <span className="text-blue">Login</span>
            </p>
          </div>
          <div className="mt-3">
            <p className="m-0 font-normal">New Password</p>
            <input
              className="border mt-2 py-2 px-3 rounded col-12"
              placeholder="Input Your Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="mt-3">
            <p className="m-0 font-normal">Confirm Password</p>
            <input
              className="border mt-2 py-2 px-3 rounded col-12"
              placeholder="Input Your Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <button className="px-5 py-2 col-12 rounded text-white border-0">
              Change Password
            </button>
          </div>
          <div className="mt-4 d-flex gap-3 align-items-center">
            <div>
              <input type="checkbox" />
            </div>
            <p className="text-sm m-0">Keep me login</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import "./style.css"
import clickRising from "./click-rising.png"
export const SignIn = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-lg-row">
      <div className="signIn-bg border-radius-2 d-flex align-items-end py-5 col-lg-6 col-10">
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
            <h2>Welcome Back!</h2>
            <p className="mt-4">
              New user? <span className="text-blue"> Create an acount </span>
            </p>
          </div>
          <div className="mt-3">
            <p className="m-0 font-normal">Email Address</p>
            <input
              className="border mt-2 py-2 px-3 rounded col-12"
              placeholder="ligeragency@gmail.com|"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="mt-3">
            <p className="m-0 font-normal">Password</p>
            <input
              className="border mt-2 py-2 px-3 rounded col-12"
              placeholder="Input Your Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <p className="m-0 font-normal">Forgot password?</p>
            <button className="px-5 py-2 rounded bg-blue text-white border-0">
              Sign In
            </button>
          </div>
          <div className="d-flex mt-3 align-items-center justify-content-center col-12">
            <div
              className="col-5"
              style={{ height: "1px", background: "#F5F5F7" }}
            ></div>
            <p className="col-2 text-center mt-3">or</p>
            <div
              className="col-5"
              style={{ height: "1px", background: "#F5F5F7" }}
            ></div>
          </div>
          <div className="mt-2">
            <button className="px-5 col-12 py-2 rounded border bg-transparent border">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M16.5001 8.18387C16.5001 7.64007 16.4551 7.09333 16.3591 6.55835H8.66113V9.6389H13.0694C12.8865 10.6324 12.2987 11.5113 11.438 12.0698V14.0687H14.068C15.6124 12.6754 16.5001 10.6177 16.5001 8.18387Z"
                  fill="#4285F4"
                />
                <path
                  d="M8.66081 16C10.862 16 12.7182 15.2916 14.0707 14.0688L11.4407 12.07C10.709 12.5579 9.76438 12.8342 8.66381 12.8342C6.53465 12.8342 4.72936 11.4262 4.08161 9.5332H1.36768V11.5938C2.75313 14.2951 5.57503 16 8.66081 16Z"
                  fill="#34A853"
                />
                <path
                  d="M4.07905 9.53314C3.73718 8.5396 3.73718 7.46376 4.07905 6.47023V4.40967H1.36815C0.210618 6.67011 0.210618 9.33326 1.36815 11.5937L4.07905 9.53314Z"
                  fill="#FBBC04"
                />
                <path
                  d="M8.66081 3.16633C9.82436 3.1487 10.9489 3.57786 11.7916 4.36563L14.1217 2.08167C12.6463 0.723645 10.688 -0.0229765 8.66081 0.000539092C5.57503 0.000539092 2.75313 1.70542 1.36768 4.40972L4.07861 6.47028C4.72336 4.57433 6.53165 3.16633 8.66081 3.16633Z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="mt-3">
            <button className="px-5 col-12 py-2 rounded border bg-transparent border">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="#1977F3" />
                <path
                  d="M11.114 10.3131L11.4684 8.00009H9.24983V6.49932C9.24983 5.86706 9.55921 5.24943 10.5537 5.24943H11.5629V3.28065C11.5629 3.28065 10.6471 3.12427 9.77184 3.12427C7.94481 3.12427 6.75004 4.23128 6.75004 6.23719V8.00009H4.71826V10.3131H6.75004V15.9033C7.1573 15.9675 7.57468 16.0001 7.99994 16.0001C8.42519 16.0001 8.84258 15.9663 9.24983 15.9033V10.3131H11.114Z"
                  fill="white"
                />
              </svg>
              Sign in with Facebook
            </button>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              Protected by reCAPTCHA and subject to the Google{" "}
              <span className="text-blue"> Privacy Policy</span>
              and <span className="text-blue">Terms of Service.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

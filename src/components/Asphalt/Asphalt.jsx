import heart from "./heart.png"
import share from "./share.png"
import asphalt from './Asphalt-logo.png'
export const Asphalt = () => {
  return (
    <div className="px-4 mt-4">
      <div className="rounded text-white py-4 px-4 asphalt-bg">
        <div className="d-flex gap-2 justify-content-end">
          <div>
            <img src={heart} alt="heart" />
          </div>
          <div>
            <img src={share} alt="heart" />
          </div>
        </div>
        <div className="d-flex flex-sm-column flex-xs-column flex-md-row flex-column  ps-5 gap-5">
          <div className="col-lg-4 col-md-4 col-12">
            <p className="text-sm">App of the Week 🚀</p>
            <p className="text-md">ASPHALT LEGENDS 9</p>
            <p>
              Car racing game with high influence in young generation whihc is
              usually Paid.
            </p>
            <div>
              <button className="px-4 py-2 rounded bg-blue text-white border-0">
                <svg
                  className="mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M11.9638 9.86H10.3415C9.01076 9.86 7.92673 8.78345 7.92673 7.44523V5.82291C7.92673 5.51639 7.68002 5.26221 7.36602 5.26221H4.9961C3.26912 5.26221 1.87109 6.38362 1.87109 8.38721V13.3513C1.87109 15.3549 3.26912 16.4763 4.9961 16.4763H9.39952C11.1265 16.4763 12.5245 15.3549 12.5245 13.3513V10.4207C12.5245 10.1067 12.2703 9.86 11.9638 9.86Z"
                    fill="white"
                  />
                  <path
                    d="M13.6987 1.52417H12.2259H11.411H9.29527C7.60567 1.52417 6.23754 2.60073 6.17773 4.52208C6.22259 4.52208 6.25997 4.51461 6.30483 4.51461H8.42056H9.23546H10.7082C12.4352 4.51461 13.8333 5.63602 13.8333 7.63962V9.11241V11.1384V12.6112C13.8333 12.6561 13.8258 12.6935 13.8258 12.7308C15.4929 12.6785 16.8237 11.572 16.8237 9.62078V8.14799V6.12197V4.64918C16.8237 2.64558 15.4257 1.52417 13.6987 1.52417Z"
                    fill="white"
                  />
                  <path
                    d="M9.33209 5.37441C9.10033 5.14265 8.7041 5.29965 8.7041 5.62112V7.57986C8.7041 8.40223 9.39938 9.07508 10.2517 9.07508C10.7825 9.08255 11.5226 9.08255 12.1581 9.08255C12.4795 9.08255 12.644 8.70875 12.4197 8.48447C11.6048 7.66957 10.1545 6.21173 9.33209 5.37441Z"
                    fill="white"
                  />
                </svg>
                Get your Link
              </button>
            </div>
          </div>
          <div className="col-lg-3 ms-5 mt-5 mt-lg-0"><img className="col-12" src={asphalt} alt="Asphalt" /></div>
        </div>
      </div>
    </div>
  )
}

import logo from "./click-rising.png"
export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center align-items-lg-start py-5 col-12">
          <div className="col-lg-5 text-center text-lg-start">
            <div>
              <img src={logo} alt="click-rising-logo" />
            </div>
            <p className="text-gray py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="d-flex  gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M22.943 5.5403C22.943 5.80045 22.943 5.97371 22.943 6.23385C22.943 13.2578 17.655 21.409 8.01725 21.409C5.03211 21.409 2.30282 20.542 0 18.9811C0.426449 19.0678 0.852897 19.0683 1.27935 19.0683C3.75275 19.0683 5.97026 18.2007 7.76134 16.8133C5.45852 16.7265 3.4969 15.2526 2.89987 13.0847C3.24103 13.1714 3.58215 13.1711 3.92331 13.1711C4.43504 13.1711 4.86147 13.085 5.28792 12.9983C2.89981 12.478 1.10881 10.3969 1.10881 7.7954V7.70818C1.79113 8.14175 2.64396 8.31501 3.49686 8.40173C2.04693 7.44786 1.19408 5.80062 1.19408 3.9796C1.19408 3.02574 1.44988 2.07221 1.87633 1.29178C4.43502 4.50023 8.35841 6.6676 12.7082 6.84103C12.6229 6.40745 12.5375 6.0611 12.5375 5.62753C12.5375 2.67922 14.8405 0.337402 17.7403 0.337402C19.2755 0.337402 20.6402 0.944746 21.5783 1.98533C22.7724 1.72518 23.8811 1.29161 24.9046 0.684601C24.4781 1.89861 23.7105 2.93868 22.6018 3.6324C23.6252 3.54569 24.6487 3.19883 25.5869 2.76525C24.9046 3.80583 23.9664 4.75987 22.943 5.5403Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="23"
                  viewBox="0 0 13 23"
                  fill="none"
                >
                  <path
                    d="M10.4622 4.18612H12.6278V0.589921C12.2813 0.506304 10.9819 0.42334 9.42262 0.42334C6.2175 0.42334 4.05192 2.26276 4.05192 5.69107V8.86837H0.586914V12.8818H4.05192V23H8.38317V12.8818H11.7616L12.2813 8.86837H8.38317V6.10916C8.38317 4.93851 8.72969 4.18612 10.4622 4.18612Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="23"
                  viewBox="0 0 33 23"
                  fill="none"
                >
                  <path
                    d="M31.5662 3.55083C31.2317 2.19788 30.1448 1.09911 28.8069 0.67631C26.2984 -0.000165165 16.4315 0 16.4315 0C16.4315 0 6.56471 -0.000165165 4.0562 0.67631C2.71832 1.01455 1.63126 2.11332 1.29679 3.55083C0.627848 6.08761 0.627808 11.3305 0.627808 11.3305C0.627808 11.3305 0.627848 16.5733 1.29679 19.1101C1.63126 20.463 2.71832 21.5621 4.0562 21.9004C6.56471 22.5769 16.4315 22.5767 16.4315 22.5767C16.4315 22.5767 26.2984 22.5769 28.8069 21.9004C30.1448 21.5621 31.2317 20.463 31.5662 19.1101C32.2351 16.5733 32.2352 11.3305 32.2352 11.3305C32.2352 11.3305 32.2351 6.08761 31.5662 3.55083ZM13.1704 16.0663V6.51041L21.4485 11.2462L13.1704 16.0663Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                >
                  <path
                    d="M11.7378 5.60309C8.47444 5.60309 5.8422 8.23591 5.8422 11.5C5.8422 14.7641 8.47444 17.3969 11.7378 17.3969C15.0012 17.3969 17.6334 14.7641 17.6334 11.5C17.6334 8.23591 15.0012 5.60309 11.7378 5.60309ZM11.7378 15.3338C9.62893 15.3338 7.90489 13.6145 7.90489 11.5C7.90489 9.38553 9.6238 7.66624 11.7378 7.66624C13.8518 7.66624 15.5707 9.38553 15.5707 11.5C15.5707 13.6145 13.8467 15.3338 11.7378 15.3338ZM19.2497 5.36188C19.2497 6.12658 18.6339 6.73731 17.8745 6.73731C17.11 6.73731 16.4994 6.12144 16.4994 5.36188C16.4994 4.60231 17.1152 3.98644 17.8745 3.98644C18.6339 3.98644 19.2497 4.60231 19.2497 5.36188ZM23.1544 6.75784C23.0672 4.91537 22.6464 3.28333 21.297 1.93869C19.9526 0.594053 18.321 0.173212 16.4789 0.0808323C14.5804 -0.0269441 8.89005 -0.0269441 6.99156 0.0808323C5.15464 0.16808 3.52296 0.588921 2.17349 1.93356C0.824019 3.2782 0.408403 4.91024 0.316044 6.75271C0.208291 8.65162 0.208291 14.3432 0.316044 16.2422C0.403272 18.0846 0.824019 19.7167 2.17349 21.0613C3.52296 22.4059 5.14951 22.8268 6.99156 22.9192C8.89005 23.0269 14.5804 23.0269 16.4789 22.9192C18.321 22.8319 19.9526 22.4111 21.297 21.0613C22.6413 19.7167 23.0621 18.0846 23.1544 16.2422C23.2622 14.3432 23.2622 8.65676 23.1544 6.75784ZM20.7018 18.2796C20.3015 19.2856 19.5268 20.0605 18.5159 20.466C17.0023 21.0664 13.4105 20.9279 11.7378 20.9279C10.0651 20.9279 6.46819 21.0613 4.95966 20.466C3.95397 20.0657 3.17918 19.2907 2.77382 18.2796C2.17349 16.7656 2.31203 13.1731 2.31203 11.5C2.31203 9.8269 2.17862 6.22922 2.77382 4.72035C3.17405 3.71444 3.94884 2.93947 4.95966 2.53403C6.47332 1.93356 10.0651 2.07213 11.7378 2.07213C13.4105 2.07213 17.0074 1.93869 18.5159 2.53403C19.5216 2.93434 20.2964 3.7093 20.7018 4.72035C21.3021 6.23435 21.1636 9.8269 21.1636 11.5C21.1636 13.1731 21.3021 16.7708 20.7018 18.2796Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <ul className=" m-0 list-unstyled gap-5">
              <li className="text-white cursor-pointer my-2">Services</li>
              <li className="cursor-pointer my-2 text-gray">
                Sign up as Partnership
              </li>
              <li className="cursor-pointer my-2 text-gray">
                Sign up as Advertiser
              </li>
              <li className="cursor-pointer my-2 text-gray">
                Influencer Help Center
              </li>
              <li className="cursor-pointer my-2 text-gray">
                Influencer marketing
              </li>
            </ul>
          </div>
          <div>
            <ul className=" m-0 list-unstyled gap-5">
              <li className="text-white cursor-pointer my-2">About us</li>
              <li className="cursor-pointer my-2 text-gray">
                Advertise on ClickRising
              </li>
              <li className="cursor-pointer my-2 text-gray">
                Terms & Conditions
              </li>
              <li className="cursor-pointer my-2 text-gray">Privacy Policy</li>
              <li className="cursor-pointer my-2 text-gray">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-5" style={{height:'1px',background:'#231A51',width:'100%'}}></div>
        <div className="text-white mt-5 d-flex flex-column-reverse flex-lg-row text-center text-lg-start justify-content-between">
            <div>
                <p>© Clickrising by Liger Agency</p>
            </div>
            <div className="d-flex gap-5">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

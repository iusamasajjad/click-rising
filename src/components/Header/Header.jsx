import logo from "./click-rising.png"
import Hamburger from "hamburger-react"
import React, { useState } from "react"
export const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      {/* for mobile responsive */}
      <div className="d-lg-none block position-fixed  top-4 z-3 left-0 right-0 vw-100">
        <div className="d-flex bg-white px-3 justify-content-between align-items-center w-full">
          <div>
            <img className="w-50" src={logo} alt="headerlogo" loading="lazy" />
          </div>

          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            className="bg-[#1c1b19]"
          />
        </div>
        <div>
          {isOpen && (
            <div className="bg-white position-fixed left-0 right-0 vw-100 vh-100">
              <ul className=" m-0 list-unstyled gap-3 d-flex justify-content-center flex-column align-items-center">
                <li className="text-blue cursor-pointer">Home</li>
                <li className="cursor-pointer">Affiliate</li>
                <li className="cursor-pointer">Referrals</li>
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">FAQs</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <header className="d-lg-block d-none">
        <div className="d-flex py-4 container-fluid px-5 mx-auto justify-content-between align-items-center">
          <div>
            <img width={150} src={logo} alt="click-rising" />
          </div>
          <ul className="d-flex align-items-center m-0 list-unstyled gap-5">
            <li className="text-blue cursor-pointer">Home</li>
            <li className="cursor-pointer">Affiliate</li>
            <li className="cursor-pointer">Referrals</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">FAQs</li>
          </ul>
          <div className="d-flex gap-3">
            <button className="px-4 py-2 rounded-pill bg-light-purple text-blue border-0">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-pill bg-blue text-white border-0">
              Sign up
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

import { useState } from "react"
import notif from "./notif.png"
import roundPic from "./round.png"
import search from "./search-normal.png"
import sort from "./sort.png"
import Hamburger from "hamburger-react"
import logo from './click-rising.png'
import { SideBar } from "../sideBar/SideBar"
export const Campaign = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div>

<div className="d-lg-none block position-fixed  top-4 z-3 left-0 right-0 vw-100">
        <div className="d-flex bg-white px-3 justify-content-between align-items-center w-full">
          <div>
            <img className="w-20" src={logo} alt="headerlogo" loading="lazy" />
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
              <SideBar />
            </div>
          )}
        </div>
      </div>



      <div className="pt-5 pt-lg-2 px-4">
        <div className="d-flex pt-3 pt-lg-0 justify-content-lg-between justify-content-end">
          <h2 className="d-none d-lg-block">
            Camp<span className="text-blue">aign</span>{" "}
          </h2>
          <div className="d-flex gap-2 align-items-center">
            <div>
              <img src={notif} alt="notif" />
            </div>
            <div>
              <img src={roundPic} alt="notif" />
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <div className="position-relative col-lg-4 col-10">
            <input
              className="col-12 px-2 rounded border py-2"
              type="text"
              placeholder="search here"
              name=""
              id=""
            />
            <div
              style={{ right: "10px", top: "8px" }}
              className="position-absolute"
            >
              <img src={search} alt="search" />
            </div>
          </div>
          <div className="col-lg-2 px-2 py-2 align-items-center d-flex gap-2 border rounded">
            <div>
              <img src={sort} alt="search" />
            </div>
            <p className="m-0 d-none d-lg-block">Sort By : High Paid</p>
          </div>
        </div>
      </div>
      <div className="border-bottom pt-4"></div>
    </div>
  )
}

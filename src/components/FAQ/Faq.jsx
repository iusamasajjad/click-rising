import { useState } from "react"
import crossIcon from "./cross-icon.png"
export const Faq = () => {
  const [toggle, setToggle] = useState()
  const array = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]
  const ToggleMethod = (index) => {
      setToggle(index)
  }
  return (
    <div className="my-5">
      <div className="text-center">
        <p className="text-blue m-0">FAQ’s</p>
        <p className="text-md font-bold">Frequently Asked Question’s</p>
        <div className="d-flex justify-content-center">
          <p className="text-gray col-lg-4 col-12 px-3">
            Explore most question about Click rising if something is not clear
            yet.
          </p>
        </div>
        <div className="container mx-auto">
          {array.map((item, index) => (
            <div>
              <div className="d-flex my-3 bg-light-purple py-2 border-radius px-3 justify-content-between align-items-center">
                <p className="m-0 text-dark-black font-bold">Get Urgent Paid</p>
                <button
                  onClick={() => ToggleMethod(index)}
                  className="outline-none border-0 bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                      fill="#232323"
                    />
                  </svg>
                </button>
              </div>

              {toggle === index ? (
                <div
                  key={index}
                  className="text-start border my-3 bg-white box-shadow py-2 rounded px-3  "
                >
                  <div className=" d-flex justify-content-between align-items-center">
                    <p className="m-0 text-dark-black font-bold">
                      Get Urgent Paid
                    </p>
                    <button
                      onClick={() => setToggle()}
                      className="outline-none border-0 bg-transparent"
                    >
                      <img src={crossIcon} alt="crossIcon" />
                    </button>
                  </div>
                  <p className="text-gray py-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dumm. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dumm.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dumm.
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

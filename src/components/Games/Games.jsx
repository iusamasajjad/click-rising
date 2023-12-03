import share from "./share.png"
import like from "./like.png"
import { Detail } from "../Detail/Detail"
import { useState } from "react"
export const Games = ({
  children,
  title = "",
  image = { undefined },
  ...props
}) => {
  const [detail, setDetail] = useState(false)
  return (
    <div className="px-4 col-lg-6 col-12">
      <div className="bg-white col-12 d-flex my-3 py-2 border rounded px-2">
        <div className="col-3">
          <img
            {...props}
            className="col-12 h-100"
            src={image}
            alt="power slap"
          />
        </div>
        <div className="px-3 col-9">
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0 text-dark-black font-bold">{title}</p>
            <div>
              <img src={share} alt="share" />
            </div>
          </div>
          <div>
            <p className="text-gray m-0">
              (US $1.25) (JP $1) (UK $0.90) Per Install
            </p>
          </div>
          <div className="d-flex gap-2 my-2">
            <div className="d-flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.5549 2.29996L13.1387 5.49369C13.3547 5.93827 13.9306 6.3647 14.4166 6.44636L17.2872 6.92723C19.123 7.23572 19.555 8.57853 18.2321 9.9032L16.0004 12.1533C15.6224 12.5344 15.4154 13.2693 15.5324 13.7955L16.1714 16.581C16.6753 18.7857 15.5144 19.6386 13.5796 18.4863L10.8889 16.8804C10.403 16.5901 9.60209 16.5901 9.10714 16.8804L6.41644 18.4863C4.49065 19.6386 3.32078 18.7767 3.82473 16.581L4.46366 13.7955C4.58064 13.2693 4.37367 12.5344 3.99571 12.1533L1.76395 9.9032C0.4501 8.57853 0.873053 7.23572 2.70885 6.92723L5.57953 6.44636C6.05648 6.3647 6.63242 5.93827 6.84839 5.49369L8.43222 2.29996C9.29612 0.567005 10.7 0.567005 11.5549 2.29996Z"
                  fill="#FF922F"
                  stroke="#FF922F"
                  stroke-width="1.36096"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.5549 2.29996L13.1387 5.49369C13.3547 5.93827 13.9306 6.3647 14.4166 6.44636L17.2872 6.92723C19.123 7.23572 19.555 8.57853 18.2321 9.9032L16.0004 12.1533C15.6224 12.5344 15.4154 13.2693 15.5324 13.7955L16.1714 16.581C16.6753 18.7857 15.5144 19.6386 13.5796 18.4863L10.8889 16.8804C10.403 16.5901 9.60209 16.5901 9.10714 16.8804L6.41644 18.4863C4.49065 19.6386 3.32078 18.7767 3.82473 16.581L4.46366 13.7955C4.58064 13.2693 4.37367 12.5344 3.99571 12.1533L1.76395 9.9032C0.4501 8.57853 0.873053 7.23572 2.70885 6.92723L5.57953 6.44636C6.05648 6.3647 6.63242 5.93827 6.84839 5.49369L8.43222 2.29996C9.29612 0.567005 10.7 0.567005 11.5549 2.29996Z"
                  fill="#FF922F"
                  stroke="#FF922F"
                  stroke-width="1.36096"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.5549 2.29996L13.1387 5.49369C13.3547 5.93827 13.9306 6.3647 14.4166 6.44636L17.2872 6.92723C19.123 7.23572 19.555 8.57853 18.2321 9.9032L16.0004 12.1533C15.6224 12.5344 15.4154 13.2693 15.5324 13.7955L16.1714 16.581C16.6753 18.7857 15.5144 19.6386 13.5796 18.4863L10.8889 16.8804C10.403 16.5901 9.60209 16.5901 9.10714 16.8804L6.41644 18.4863C4.49065 19.6386 3.32078 18.7767 3.82473 16.581L4.46366 13.7955C4.58064 13.2693 4.37367 12.5344 3.99571 12.1533L1.76395 9.9032C0.4501 8.57853 0.873053 7.23572 2.70885 6.92723L5.57953 6.44636C6.05648 6.3647 6.63242 5.93827 6.84839 5.49369L8.43222 2.29996C9.29612 0.567005 10.7 0.567005 11.5549 2.29996Z"
                  fill="#FF922F"
                  stroke="#FF922F"
                  stroke-width="1.36096"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.5549 2.29996L13.1387 5.49369C13.3547 5.93827 13.9306 6.3647 14.4166 6.44636L17.2872 6.92723C19.123 7.23572 19.555 8.57853 18.2321 9.9032L16.0004 12.1533C15.6224 12.5344 15.4154 13.2693 15.5324 13.7955L16.1714 16.581C16.6753 18.7857 15.5144 19.6386 13.5796 18.4863L10.8889 16.8804C10.403 16.5901 9.60209 16.5901 9.10714 16.8804L6.41644 18.4863C4.49065 19.6386 3.32078 18.7767 3.82473 16.581L4.46366 13.7955C4.58064 13.2693 4.37367 12.5344 3.99571 12.1533L1.76395 9.9032C0.4501 8.57853 0.873053 7.23572 2.70885 6.92723L5.57953 6.44636C6.05648 6.3647 6.63242 5.93827 6.84839 5.49369L8.43222 2.29996C9.29612 0.567005 10.7 0.567005 11.5549 2.29996Z"
                  fill="#FF922F"
                  stroke="#FF922F"
                  stroke-width="1.36096"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.5549 2.29996L13.1387 5.49369C13.3547 5.93827 13.9306 6.3647 14.4166 6.44636L17.2872 6.92723C19.123 7.23572 19.555 8.57853 18.2321 9.9032L16.0004 12.1533C15.6224 12.5344 15.4154 13.2693 15.5324 13.7955L16.1714 16.581C16.6753 18.7857 15.5144 19.6386 13.5796 18.4863L10.8889 16.8804C10.403 16.5901 9.60209 16.5901 9.10714 16.8804L6.41644 18.4863C4.49065 19.6386 3.32078 18.7767 3.82473 16.581L4.46366 13.7955C4.58064 13.2693 4.37367 12.5344 3.99571 12.1533L1.76395 9.9032C0.4501 8.57853 0.873053 7.23572 2.70885 6.92723L5.57953 6.44636C6.05648 6.3647 6.63242 5.93827 6.84839 5.49369L8.43222 2.29996C9.29612 0.567005 10.7 0.567005 11.5549 2.29996Z"
                  fill="#FF922F"
                  stroke="#FF922F"
                  stroke-width="1.36096"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.5549 2.29996L13.1387 5.49369C13.3547 5.93827 13.9306 6.3647 14.4166 6.44636L17.2872 6.92723C19.123 7.23572 19.555 8.57853 18.2321 9.9032L16.0004 12.1533C15.6224 12.5344 15.4154 13.2693 15.5324 13.7955L16.1714 16.581C16.6753 18.7857 15.5144 19.6386 13.5796 18.4863L10.8889 16.8804C10.403 16.5901 9.60209 16.5901 9.10714 16.8804L6.41644 18.4863C4.49065 19.6386 3.32078 18.7767 3.82473 16.581L4.46366 13.7955C4.58064 13.2693 4.37367 12.5344 3.99571 12.1533L1.76395 9.9032C0.4501 8.57853 0.873053 7.23572 2.70885 6.92723L5.57953 6.44636C6.05648 6.3647 6.63242 5.93827 6.84839 5.49369L8.43222 2.29996C9.29612 0.567005 10.7 0.567005 11.5549 2.29996Z"
                  fill="#FF922F"
                  stroke="#FF922F"
                  stroke-width="1.36096"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="m-0">4.9 star</p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className=" rounded bg-transparent border-0 text-white">
              <img src={like} alt="like" />
            </button>
            <button onClick={()=>setDetail(true)} className="px-3 py-2 text-sm-sm rounded bg-black border text-white">
              Explore
            </button>
            <button className="px-lg-3 px-1  py-2 text-sm-sm rounded bg-blue border text-white">
              <svg
                className="mx-lg-2"
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
      </div>
      {detail && <Detail setDetail={setDetail} />}
    </div>
  )
}
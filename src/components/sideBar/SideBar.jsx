import clickRising from "./click-rising.png"
import overview from "./element-4.png"
import book from "./book.png"
import user from "./user-octagon.png"
import analysis from "./message.png"
import setting from "./setting-4.png"
export const SideBar = () => {
  return (
    <div className="px-3 border-end sidebar">
      <div className="px-4 py-2">
        <img className="col-lg-12 d-none d-lg-block" src={clickRising} alt="clickrising" />
      </div>
      <div>
        <button className="bg-transparent px-4 py-2 border-0">
          <img className="mx-2" src={overview} alt="overview" /> Overview
        </button>
      </div>
      <div className="mt-3">
        <button className="px-4 py-2 rounded-pill bg-blue text-white border-0">
          <img className="mx-2" src={book} alt="overview" /> Campaign
        </button>
      </div>
      <div className="mt-3">
        <button className="px-4 py-2 rounded-pill bg-transparent border-0">
          <img className="mx-2" src={user} alt="overview" /> Earnings
        </button>
      </div>
      <div className="mt-3">
        <button className="px-4 py-2 rounded-pill bg-transparent border-0">
          <img className="mx-2" src={analysis} alt="overview" /> Analytics
        </button>
      </div>
      <div className="mt-3">
        <button className="px-4 py-2 rounded-pill bg-transparent border-0">
          <img className="mx-2" src={setting} alt="overview" /> Setting
        </button>
      </div>
      <div className="mt-5 pt-5">
        <div className="px-2 bg-dark-blue text-white text-center py-4 border-radius-sm">
          <p>Available Balance</p>
          <p>$276.54</p>
          <button className="px-2 py-2 rounded bg-blue text-white border-0">
          Withdrawal Balance
          </button>
        </div>
      </div>
    </div>
  )
}

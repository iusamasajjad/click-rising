import logo from "./click-rising.png"
export const Header = () => {
  return (
    <header className="d-flex py-4 container-fluid px-5 mx-auto justify-content-between align-items-center">
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
    </header>
  )
}

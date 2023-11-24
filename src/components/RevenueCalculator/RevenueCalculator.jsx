export const RevenueCalculator = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-lg">
          Revenue <span className="text-blue">Calculator</span>
        </h2>
        <p className="text-gray">Calculate your average income</p>
      </div>
      <div className="d-flex justify-content-center my-4">
        <div className="box-shadow col-6 border-radius px-4 py-3">
          <div className="d-flex justify-content-between">
            <p className="text-gray">Number of followers</p>
            <p className="text-dark-black font-bold">5.3 M</p>
          </div>
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              onChange={(e) => e.value}
              className="slider rounded-xl"
              id="myRange"
            />
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-gray">1k</p>
            <p className="text-gray">10M</p>
          </div>
          <div className="d-flex mt-3 justify-content-between">
            <p className="text-gray">Estimated Install Rate</p>
            <p className="text-dark-black font-bold">5.3 %</p>
          </div>
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              onChange={(e) => e.value}
              className="slider rounded-xl"
              id="myRange"
            />
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-gray">0.1%</p>
            <p className="text-gray">10.0%</p>
          </div>
          <div className="text-center">
            <p className="text-dark-black m-0 font-bold text-lg">$ 32,000</p>
            <p className="text-dark-black">Estimated Earnings $</p>
          </div>
          <button className="px-4 mt-3 py-2 col-12 rounded-pill bg-blue text-white w-full border-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

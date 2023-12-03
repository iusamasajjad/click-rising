import graph from "./graph.png"
import blueTick from "./tick-circle.png"
export const ChooseUs = () => {
  return (
    <div>
      <div className="container col-10 my-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <div className="col-lg-6 col-12">
            <p className="text-blue m-0">WHY CHOOSE US?</p>
            <p className="text-lg font-bold">
              Got your Revenue Higher 🏆 with your{" "}
              <span className="text-blue">Social</span> Media Team.
            </p>
            <p className="text-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
            <div className="d-flex">
              <div>
                <img src={blueTick} alt="blueTick" />
              </div>
              <div className="mt-1 mx-3">
                <p className="text-dark-black font-bold">Use Social Force</p>
                <p className="text-gray">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dumm.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src={blueTick} alt="blueTick" />
              </div>
              <div className="mt-1 mx-3">
                <p className="text-dark-black font-bold">Get Urgent Paid</p>
                <p className="text-gray">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dumm.
                </p>
              </div>
            </div>
            <button className="text-white mt-3 bg-blue rounded-pill px-4 py-2 outline-none border-0">
            Start Earning Now
            </button>
          </div>
          <div className="col-lg-5 col-12 mt-3 rounded box-shadow border bg-white">
            <div className="col-12 text-start">
              <div className="col-12">
                <img className="col-12" src={graph} alt="graph" />
              </div>
              <div className="px-5 py-2">
                <p className="font-bold pt-3">
                  Grow and <span className="text-blue">earn</span> everyday
                </p>
                <p className="text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

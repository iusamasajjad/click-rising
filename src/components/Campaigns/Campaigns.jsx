export const Campaigns = () => {
  return (
    <div className="d-flex justify-content-between my-5 col-10 gap-5 container mx-auto">
      <div className="text-center">
        <p className="text-lg m-0">5K+</p>
        <p className="text-gray">Active Users</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div> 
          <div className="d-flex align-items-center gap-2">
          <p className="text-lg m-0">50+</p>
          <div className="px-3 bg-blue rounded-pill py-1 text-white">
            <p className="m-0 text-sm">counting...</p>
          </div>
          </div>
        </div>
        <p className="text-gray">Countries supported</p>
      </div>
      <div className="text-center">
        <p className="text-lg m-0">60+ Campaigns</p>
        <p className="text-gray">Always on App Install Campaigns</p>
      </div>
    </div>
  )
}

import FooterNav from "./components/FooterNav"
import HeaderNav from "./components/HeaderNav"

function App() {
  const sponsors = [
    {
      title: "Platinum Sponsor",
      list: ["Sponsor workshops & hackathon tracks.", "Branding on hackathon & developer swag.", "Keynote speaker addressing attendees."]
    },
    {
      title: "Gold Sponsor",
      list: ["Booth space to engage with attendees.", "Exclusive access to top developers.", "Exclusive access to top developers."]
    },
    {
      title: "Silver Sponsor",
      list: ["Brand logo placement on event website.", "Sponsor workshops & hackathon tracks.", "Feature in event recap content."]
    },
    {
      title: "Community Partner",
      list: ["Free tickets for your members.", "Co-hosted side events or workshops.", "Access to ETHNigeria’s dev network."]
    }
  ]

  return (
    <main className="lg:mx-10 mx-4">
      <HeaderNav />
      <section className="lg:flex justify-between mt-10">
        <div className="lg:w-[45%] my-auto">
          <p className="text-[#1B712F] font-bold mb-4">Ethereum Nigeria Presents:</p>
          <h3 className="lg:text-4xl text-3xl font-bold">BuiDL Africa: Scaling Ethereum & Web3 Adoption</h3>
          <p className="my-4 lg:text-base text-sm">Empowering Africa’s Web3 Builders & Scaling the Future of Ethereum</p>
          <button className='p-4 rounded-sm my-auto bg-gradient-to-r from-[#1C7231] to-[#35D85D] border border-[#3C9B3E] text-white'>Register For The Event</button>
        </div>
        <img className="lg:w-[45%] lg:mt-0 mt-4" src="/images/hero.png" alt="" />
      </section>
      <section className="my-20">
        <div className="lg:flex mb-4 rounded-sm">
          <h1 className="lg:text-5xl text-3xl lg:my-auto my-6 font-bold lg:text-left text-center ">Event Highlight</h1>
          <div className="border border-[#FFBB3D] lg:flex justify-between bg-gradient-to-r from-[#FFF1CF] to-[#D2DF8329]">
            <div className="lg:p-6 p-4 lg:w-[60%]">
              <h4 className="lg:text-3xl text-xl">Developer Education & Web3 Talent Pipeline</h4>
              <p className="my-3 lg:text-base text-sm">Bootcamps, hackathons, and job pipelines for African devs.</p>
              <button className="flex">
                <p className="text-sm">Register For The Event</p>
                <img className="my-auto" src="/images/arrow-right.png" alt="" />
              </button>
            </div>
            <img className="mt-auto mb-3" src="/images/cloth.png" alt="" />
          </div>
        </div>
        <div className="lg:flex">
          <div className="w-full">
            <div className="lg:flex">
              <div className="w-full border border-[#06A22F] bg-gradient-to-r from-[#CFFFDE] to-[#83DFB329] mr-4 rounded-sm">
                <div className="p-4 lg:w-[60%]">
                  <h4 className="lg:text-3xl text-xl">Ethereum Scaling & ZK Tech</h4>
                  <p className="my-3 lg:text-base text-sm">Workshops on Layer 2s, DA layers, and ZK technologies.</p>
                  <button className="flex">
                    <p className="text-sm">Register For The Event</p>
                    <img className="my-auto" src="/images/arrow-right.png" alt="" />
                  </button>
                </div>
                <img src="/images/bridge.png" className="mt-10 mb-3" alt="" />
              </div>
              <div className="border lg:mt-0 mt-5 rounded-sm lg:w-[50%] border-[#3D74FF] bg-gradient-to-r from-[#CFD9FF] to-[#8391DF29]">
                <div className="p-4">
                  <h4 className="lg:text-3xl text-xl">DePIN & Real-World Assets</h4>
                  <p className="my-3 lg:text-base text-sm">Decentralized infrastructure for Africa’s digital economy.</p>
                  <button className="flex">
                    <p className="text-sm">Register For The Event</p>
                    <img className="my-auto" src="/images/arrow-right.png" alt="" />
                  </button>
                </div>
                <img src="/images/map.png" className="mt-10 mb-3 ml-auto" alt="" />
              </div>
            </div>
            <div className="w-full mt-4 border bg-gradient-to-r from-[#8CAD9E30] to-[#C0E3D610] rounded-sm border-[#06A22F]">
              <div className="p-4 lg:w-[60%]">
                <h4 className="lg:text-3xl text-xl">AI x Blockchain</h4>
                <p className="my-3 lg:text-base text-sm">Exploring the future of decentralized AI and smart contracts.</p>
                <button className="flex">
                  <p className="text-sm">Register For The Event</p>
                  <img className="my-auto" src="/images/arrow-right.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] lg:ml-4 lg:mt-0 mt-5 bg-gradient-to-r from-[#CFFFF5] to-[#83D6DF29] border border-[#3DD0FF] rounded-sm">
            <div className="p-4">
              <h4 className="lg:text-3xl text-xl">ReFi & Public Goods</h4>
              <p className="my-3 lg:text-base text-sm">Funding impact-driven projects with Web3 grants.</p>
              <button className="flex">
                <p className="text-sm">Register For The Event</p>
                <img className="my-auto" src="/images/arrow-right.png" alt="" />
              </button>
            </div>
            <img className="lg:mt-52 w-32 mb-3" src="/images/car.png" alt="" />
          </div>
        </div>
      </section>
      <section className="my-20">
        <h3 className="lg:text-3xl text-2xl text-center font-bold">Agenda & Schedule</h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 border rounded-md border-[#CEC9C0] p-3 my-3">
          <div className="border flex border-[#CEC9C0] p-3 rounded-sm">
            <img className="my-auto" src="/images/day.png" alt="" />
            <div className="ml-4">
              <h5 className="text-xl font-bold">Day 1</h5>
              <p className="lg:text-base text-sm">Developer Bootcamp and Solidity Training</p>
            </div>
          </div>
          <div className="flex p-3 rounded-sm">
            <img className="my-auto" src="/images/day.png" alt="" />
            <div className="ml-4">
              <h5 className="text-xl font-bold">Day 2</h5>
              <p className="lg:text-base text-sm">Hackathon Kickoff and Ethereum Scaling Workshops</p>
            </div>
          </div>
          <div className="flex p-3 rounded-sm">
            <img className="my-auto" src="/images/day.png" alt="" />
            <div className="ml-4">
              <h5 className="text-xl font-bold">Day 3</h5>
              <p className="lg:text-base text-sm">Panels on DePIN, ReFi, and AI x Blockchain</p>
            </div>
          </div>

        </div>
        <div className="border border-[#CEC9C0] rounded-md p-2 overflow-x-auto">
          <div className="hidden md:flex my-1 font-bold justify-between border-b border-[#CEC9C0] p-2">
            <div className="w-[20%]">DATE</div>
            <div className="w-[60%] pl-4 border-x border-[#CEC9C0]">TOPIC</div>
            <div className="w-[20%] pl-4">SPEAKER</div>
          </div>

          <div className="flex flex-col md:flex-row my-1 justify-between border-b border-[#CEC9C0] p-2">
            <div className="w-full md:w-[20%] font-bold md:font-normal">9:00am - 10:00am</div>
            <div className="w-full md:w-[60%] pl-4 border-x md:border-[#CEC9C0]">Morning Session/Registration</div>
            <div className="w-full md:w-[20%] pl-4">John</div>
          </div>
        </div>

      </section>
      <section className="my-20">
        <div className="lg:w-[50%] mb-10 text-center mx-auto">
          <h3 className="lg:text-3xl text-2xl font-bold">Sponsor & Partner Benefits</h3>
          <p className="lg:text-base text-sm">Showcase your brand at ETHNigeria 2025. Reach out to us at ethnigeria@gmail.com to secure your sponsorship slot and shape the future of Web3 in Africa.</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {sponsors.map((single, index) => <div key={index} className="border border-[#CEC9C0] p-4 rounded-sm">
            <img src="/images/sponsor.png" alt="" />
            <h2 className="text-xl font-bold my-3">{single.title}</h2>
            <div className="my-4 text-[#686764]">
              {single.list.map((item, index) => <div className="flex" key={index}>
                <img className="my-auto mr-2" src="/images/openmoji_check-mark-button.png" alt="" />
                <p className="text-sm">{item}</p>
              </div>)}
            </div>
            <button className="border p-3 rounded-sm border-[171F19]">Become a {single.title}</button>
          </div>)}
        </div>
      </section>
      <section className="my-20">
        <div>
          <h3 className="lg:text-3xl text-2xl text-center font-bold mb-4">Our Sponsors</h3>
          <div className="flex justify-between flex-wrap lg:w-[95%] mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => <img className="mx-auto lg:w-auto w-[40%] my-auto lg:my-0 my-2" src={`/images/sponsors/image-${index}.png`} alt="" />)}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="lg:text-3xl text-2xl text-center font-bold mb-4">Our Community Partners</h3>
          <div className="flex flex-wrap justify-between lg:w-[70%] mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => <img className="my-auto mx-auto" src={`/images/communities/image-${index}.png`} alt="" />)}
          </div>
        </div>
      </section>
      <FooterNav />
    </main>
  )
}

export default App

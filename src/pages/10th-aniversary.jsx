import React from 'react';
import HeaderNav from '../components/HeaderNav';
import FooterNav from '../components/FooterNav';

const Aniversary = () => {
  return (
    <main className="">
      <div className='lg:mx-10 mx-4'>
        <HeaderNav />
      </div>
      <div className='lg:relative bg-[#F7F1E5]'>
        <img src="/images/aniversary.png" alt="" />
        <div className='text-center lg:absolute bottom-12 w-full mx-auto lg:mb-0 mb-6'>
          <p className='text-sm my-3'>CELEBRATING 10 YEARS OF ETHEREUM...</p>
          <button className="p-4 rounded-sm bg-gradient-to-r from-[#1C7231] to-[#35D85D] border border-[#3C9B3E] text-white">
            Get Tickets For The Event
          </button>
        </div>
        <div className='bg-[#003D11] text-center text-white p-4 text-sm'>
          <p>Without Ethereum, there’d be no Lagos Blockchain Week, no Web3 Lagos, no FIL-Lagos, no Blockchain Campus Tours. That’s why we celebrate.</p>
        </div>
      </div>
      <section>
        <div className='lg:w-[40%] px-4 mx-auto my-18 text-center'>
          <h1 className='font-bold lg:text-3xl text-2xl'>About This Event</h1>
          <p className='text-sm'>Ethereum is turning 10 years old! We are celebrating this milestone as a formidable community.</p>
        </div>
        <div className='lg:flex'>
          <div className='lg:w-1/2'>
            <img src="/images/nigeria-1.png" alt="" />
          </div>
          <div className='lg:p-10 p-4 lg:w-1/2'>
            <h1 className='lg:text-3xl text-2xl font-bold'>Tuesday July 29th to Wednesday July 30th, 2025</h1>
            <div className='flex my-10'>
              <img src="/images/icons/location_on.png" alt="" />
              <p className='my-auto text-[#686764] lg:text-base text-sm'>Web3 Hacker House, Ejigbo Lagos, Nigeria</p>
            </div>
            <div className='border-b border-[#686764]'></div>
            <p className='font-bold my-8'>In a stirring tribute to innovation and impact, Ethereum Nigeria celebrates the pioneers who sparked a revolution—not just in code, but in culture, community, and the future of finance.</p>
            <p className='text-[#686764]'>It all started a decade ago, far from the bustling tech hubs of Lagos and Abuja. But today, Ethereum lives in the DNA of Nigerian builders, thinkers, and dreamers. From smart contracts to DeFi, NFTs to DAOs, we've taken the torch and lit up a continent.</p>
          </div>
        </div>
        <div className='lg:flex'>
          <div className='lg:w-1/2 text-white bg-[#003D11] lg:p-12 p-4'>
            <div className='border-b border-[#069D0D] pb-3 mb-10'>
              <p className='lg:text-3xl text-2xl'>A Decade of Ethereum</p>
            </div>
            <p>This year, we honor the founders of Ethereum for laying the foundation of a decentralized future. Their vision ignited a movement—and in Nigeria, we’ve made it our mission.</p>
            <p className='my-8'>From university blockchain clubs in Ibadan to thriving dev communities in Jos, Ethereum has planted deep roots across our land. Ethereum Nigeria stands proudly as one of Africa’s largest, loudest, and most relentless blockchain collectives.</p>
            <button className='bg-white text-[#003D11] p-4 rounded-md'>Get Tickets For The Event</button>
          </div>
          <div className='lg:w-1/2'>
            <img src="/images/nigeria-2.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className='lg:w-[60%] px-4 mx-auto my-18 text-center'>
          <h1 className='font-bold lg:text-3xl text-2xl'>Celebrating a Decade of Ethereum</h1>
          <p className='text-sm'>Ethereum Nigeria is about to set the stage for something unforgettable. As the world marks a decade of Ethereum, we’re bringing the celebration home—Naija style.</p>
        </div>
        <img src="/images/gallery.png" alt="" />
      </section>
      <section>
        <div className='bg-[#003D11] text-white lg:p-10 p-4 flex  justify-between'>
          <div className='lg:w-[70%]'>
            <div className='border-b border-[#069D0D] pb-3 mb-10'>
              <p className='lg:text-3xl text-2xl'>10 Years of Ethereum. One Night for the Culture.</p>
            </div>
            <p className='my-10'>Join us on July 30, 2025, in Lagos to celebrate Ethereum’s 10th anniversary. Celebrate Ethereum’s Genesis Block with Ethereum Nigeria at Web3HackerHouse.</p>
            <button className='bg-white text-[#003D11] p-4 rounded-md'>Get Tickets For The Event</button>
          </div>
          <div className='w-[25%] lg:block hidden'>
            <img className='' src="/images/pattern.png" alt="" />
          </div>
        </div>
      </section>
      <div className='lg:mx-10 mx-4'>
        <FooterNav />
      </div>
    </main>
  );
};

export default Aniversary;
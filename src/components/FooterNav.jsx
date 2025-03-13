import React from 'react';

const FooterNav = () => {
  return (
    <div>
      <footer className='p-20'>
        <img src="/logo.png" alt="" />
        <div>
          <p>Products</p>
          <div className='flex text-[#686764] w-[45%] justify-between'>
            <p>Hackathons</p>
            <p>Become A Community Partner</p>
            <p>Sponsor Us</p>
          </div>
        </div>
      </footer>
      <div className='border-t border-[#CEC9C0] flex justify-between px-20 py-4'>
        <p className='text-[#686764]'>2025 Ethereum Nigeria. All rights reserved.</p>
        <div className='flex justify-between w-[15%]'>
          <img className='w-6 h-6' src="/images/icons/basil_instagram-solid.png" alt="" />
          <img className='w-6 h-6' src="/images/icons/mdi_github.png" alt="" />
          <img className='w-6 h-6' src="/images/icons/mingcute_linkedin-fill.png" alt="" />
          <img className='w-6 h-6' src="/images/icons/simple-icons_x.png" alt="" />
          <img className='w-6 h-6' src="/images/icons/bi_medium.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
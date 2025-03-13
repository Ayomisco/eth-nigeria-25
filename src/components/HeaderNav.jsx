import React from 'react';

const HeaderNav = () => {
  return (
    <header className='flex justify-between py-4'>
      <div className='flex w-[30%] justify-between'>
        <img src="/logo.png" alt="" />
        <p className='my-auto'>Become a Sponsor</p>
        <p className='my-auto'>Partners</p>
      </div>

      <button className='p-4 rounded-sm my-auto bg-gradient-to-r from-[#1C7231] to-[#35D85D] border border-[#3C9B3E] text-white'>Register For The Event</button>
    </header>
  );
};

export default HeaderNav;
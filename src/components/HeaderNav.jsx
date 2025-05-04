import React, { useState } from 'react';
import { Link } from 'react-router';
// import { Menu, X } from 'lucide-react';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4">
      {/* Logo & Nav */}
      <div className="flex items-center gap-4">
        <Link to={'/'}>
          <img src="/logo.png" alt="Logo" className="lg:h-full h-10" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <p className="cursor-pointer">Become a Sponsor</p>
          <p className="cursor-pointer">Partners</p>
          <p className="cursor-pointer"><Link to={'/10th-aniversary'}>10th Aniversary</Link></p>

        </nav>
      </div>

      {/* Register Button */}
      <button className="hidden md:block p-4 rounded-sm bg-gradient-to-r from-[#1C7231] to-[#35D85D] border border-[#3C9B3E] text-white">
        Register For The Event
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <img src="/images/close.png" alt="" /> : <img src="/images/bar.png" alt="" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FFFCE2] shadow-md flex flex-col items-center p-4 md:hidden">
          <p className="py-2 cursor-pointer">Become a Sponsor</p>
          <p className="py-2 cursor-pointer">Partners</p>
          <p className="py-2 cursor-pointer"><Link to={'/10th-aniversary'}>10th Aniversary</Link></p>

          <button className="mt-4 p-4 w-full rounded-sm bg-gradient-to-r from-[#1C7231] to-[#35D85D] border border-[#3C9B3E] text-white">
            Register For The Event
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;

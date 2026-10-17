import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import { FiAlignJustify, FiHome, FiGrid, FiDownload, FiLogIn, FiUserPlus } from 'react-icons/fi';

const Navbar = () => {
  // Added icons 
  const Links = <>
    <li>
      <Link href="/" className="flex items-center gap-2 py-2.5 active:bg-primary/10">
        <FiHome className="w-4 h-4 text-primary" /> Home
      </Link>
    </li>
    <li>
      <Link href="/apps" className="flex items-center gap-2 py-2.5 active:bg-primary/10">
        <FiGrid className="w-4 h-4 text-primary" /> Apps
      </Link>
    </li>
    <li>
      <Link href="/installation" className="flex items-center gap-2 py-2.5 active:bg-primary/10">
        <FiDownload className="w-4 h-4 text-primary" /> InstallApp
      </Link>
    </li>
  </>;

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-xs border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6">

        {/* Navbar Start*/}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight group">
            <Image
              src={logo}
              alt="Hero App Logo"
              width={36}
              height={36}
              className="rounded-xl object-cover shadow-xs transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-sm gap-1">
            {Links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          {/* Action Buttons */}
          <Link href="/signin" className="btn btn-ghost btn-sm font-semibold hidden sm:inline-flex">
            Log In
          </Link>
          <Link href="/get-started" className="btn btn-primary btn-sm px-4 shadow-sm hover:scale-105 transition-transform">
            Get Started
          </Link>

          {/* Mobile Dropdown Button */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm hover:bg-primary/10 transition-colors">
              <FiAlignJustify className='w-5 h-5 text-base-content'/>
            </div>
            {/* Mobile Menu */}
            <ul 
              tabIndex={0} 
              className="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-64 border border-base-200 animate-in fade-in zoom-in-95 duration-200"
            >
              {/* Mobile Profile/Header touch */}
              <div className="px-3 py-2 mb-2 border-b border-base-200">
                <p className="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Navigation</p>
              </div>

              {Links}

              {/* Quick Login button */}
              <div className="mt-3 pt-3 border-t border-base-200 flex flex-col gap-2 sm:hidden">
                <Link href="/signin" className="btn btn-ghost btn-sm font-semibold">
                  <FiLogIn className="w-4 h-4" /> Log In
                </Link>
              </div>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
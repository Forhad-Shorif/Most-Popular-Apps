'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-base-200/80 backdrop-blur-md border-t border-base-300 text-base-content pt-5 pb-4 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid Section: Reduced padding and gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-4 border-b border-base-300/80 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-1.5 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <Image
                src={logo}
                alt="Hero App Logo"
                width={28}
                height={28}
                className="rounded-lg object-cover shadow-xs"
              />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                HERO.IO
              </span>
            </Link>
            <p className="text-xs text-base-content/90 font-medium max-w-sm leading-relaxed">
              Empowering your digital experience with modern web applications and seamless installation tools.
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-1.5 pt-0.5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-xs text-base-content hover:text-primary transition-colors">
                <FiGithub className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-xs text-base-content hover:text-primary transition-colors">
                <FiTwitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-xs text-base-content hover:text-primary transition-colors">
                <FiLinkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-base-content">Navigation</h3>
            <ul className="space-y-1 text-xs">
              <li><Link href="/" className="text-base-content/90 font-medium hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/apps" className="text-base-content/90 font-medium hover:text-primary transition-colors">Explore Apps</Link></li>
              <li><Link href="/installation" className="text-base-content/90 font-medium hover:text-primary transition-colors">Install App</Link></li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-base-content">Legal</h3>
            <ul className="space-y-1 text-xs">
              <li><Link href="/privacy" className="text-base-content/90 font-medium hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base-content/90 font-medium hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="text-base-content/90 font-medium hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-1.5 flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-base-content">Stay Updated</h3>
            <p className="text-xs text-base-content/90 font-medium text-center md:text-left">Get the latest apps and updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-1 w-full max-w-xs md:max-w-none">
              <div className="relative">
                <FiMail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-base-content/60" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-xs input-bordered w-full pl-8 bg-base-100 text-xs text-base-content font-medium focus:outline-primary placeholder:text-base-content/50"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-xs w-full shadow-sm text-xs">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-base-content/90 font-medium text-center">
          <p>© {new Date().getFullYear()} HERO.IO. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Made with <FiHeart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> for modern web users.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
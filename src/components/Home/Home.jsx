import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl bg-[#0a0a0a] text-white min-h-screen">
      <aside className="relative overflow-hidden bg-[#0f0f0f] border border-gray-900 rounded-none sm:mx-16 mx-2 sm:py-16 mt-10 shadow-2xl">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-[900] italic uppercase tracking-tighter sm:text-5xl leading-tight">
              Available on <br />
              <span className="text-orange-700">Playstore</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-8 py-4 font-black uppercase tracking-widest bg-orange-800 rounded-none hover:bg-white hover:text-black transition-all duration-300 haunted-glow"
              to="/"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Coming Soon
            </Link>
          </div>
        </div>
        {/* LOGO IMAGE CONTAINER - SHIFTED LEFT & ZOOMED */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-start px-4 sm:px-10">
          <div className="relative w-72 sm:w-[500px] lg:w-[600px] h-full flex items-center transform -translate-x-4 sm:-translate-x-12">
            <img
              className="w-full h-auto object-contain transform scale-110 sm:scale-125"
              src={logo}
              alt="G'graowl Logo"
              style={{
                filter: "none",
                opacity: 1,
              }}
            />

            {/* Background Glow */}
            <div className="absolute inset-0 bg-orange-600/5 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </aside>

      {/* EVIL CALLIGRAPHY MONSTER BUTTON */}
      <div className="grid place-items-center sm:mt-20 py-20">
        <div className="relative group cursor-pointer">
          {/* Pulsing Blood Aura */}
          <div className="absolute -inset-4 bg-red-950 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>

          {/* The Main "Vessel" Button */}
          <button className="relative px-16 py-10 bg-[#050505] border-x-4 border-red-900/50 rounded-full overflow-hidden transition-all duration-700 group-hover:border-red-600 group-hover:shadow-[0_0_50px_rgba(153,27,27,0.4)]">
            {/* Texture Overlay (Evil Mist) */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>

            <div className="relative flex items-center space-x-6">
              {/* Monster Eye Icon */}
              <div className="text-red-900 group-hover:text-red-500 transition-colors duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 12 2 12s4.48 10 10 10 10-10 10-10-4.48-10-10-10zm0 17c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>

              {/* Calligraphy Text */}
              <span
                className="text-3xl sm:text-5xl font-serif italic tracking-tighter text-red-950 group-hover:text-red-600 transition-all duration-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                style={{
                  fontFamily: "'Crimson Text', serif",
                  textShadow: "2px 2px 10px rgba(0,0,0,1)",
                }}
              >
                Hunt the{" "}
                <span className="uppercase font-black tracking-widest brightness-50 group-hover:brightness-125 transition-all">
                  Shadow
                </span>
              </span>

              {/* Ritual Symbol Icon */}
              <div className="text-red-900 group-hover:text-red-500 transition-all duration-500 opacity-30 group-hover:opacity-100">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
            </div>

            {/* Blood Drip Effect (Bottom Border Glow) */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
          </button>
        </div>
      </div>

      <h1 className="text-center text-3xl sm:text-6xl py-10 font-[900] italic uppercase tracking-tighter text-white">
        Join the <span className="text-orange-700">Shadow</span> Pack
      </h1>
    </div>
  );
}

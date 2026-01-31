import React from "react";

export default function Support() {
  const categories = [
    {
      title: "Delivery Rituals",
      desc: "Track your shipment through the shadows.",
      icon: "🚚",
    },
    {
      title: "Damaged Essence",
      desc: "Report a shattered bottle or broken seal.",
      icon: "💀",
    },
    {
      title: "The Membership",
      desc: "Inquire about your standing in the inner circle.",
      icon: "👁️",
    },
    {
      title: "Private Events",
      desc: "Host a forbidden gathering with our spirits.",
      icon: "🍷",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-orange-700 uppercase tracking-[0.8em] text-sm font-bold mb-4">
            Support Terminal
          </h2>
          <h1 className="text-5xl sm:text-7xl font-[900] italic uppercase tracking-tighter leading-none mb-6">
            Help for the <span className="text-red-900">Obsessed.</span>
          </h1>
          <p className="text-gray-500 font-serif italic text-xl border-l-2 border-red-900 pl-6 max-w-2xl">
            Our acolytes are standing by 24/7. Whether your shipment was
            intercepted or your seal was tampered with, we will rectify the
            void.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative bg-[#0d0d0d] border border-gray-900 p-8 hover:border-red-900 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center space-x-6">
                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">
                  {cat.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 font-serif italic text-sm mt-1">
                    {cat.desc}
                  </p>
                </div>
              </div>
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Contact Submission / Search */}
        <div className="relative bg-[#080808] border-2 border-red-950 p-10 sm:p-16 overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-900/5 blur-[100px] rounded-full"></div>

          <div className="relative z-10 text-center">
            <h4 className="text-2xl font-black uppercase tracking-widest mb-8">
              Can't find your answer?
            </h4>
            <p className="text-gray-400 mb-10">
              Send a priority transmission directly to the cellar masters.
            </p>

            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="YOUR TICKET NUMBER..."
                className="flex-1 bg-black border border-gray-800 p-4 text-xs font-black tracking-widest focus:border-red-600 outline-none transition-all uppercase"
              />
              <button className="bg-red-900 hover:bg-white hover:text-black text-white px-10 py-4 text-xs font-black uppercase tracking-widest transition-all">
                Transmit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Warning */}
        <div className="mt-20 text-center opacity-30">
          <p className="text-[10px] uppercase tracking-[1em]">
            All communications are encrypted and monitored by the Pack.
          </p>
        </div>
      </div>
    </div>
  );
}

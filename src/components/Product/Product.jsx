import React from "react";

export default function Products() {
  const products = [
    {
      name: "Platinum",
      img: "/platinum.png", // Direct path to public folder
      desc: "A cold, metallic burn. Distilled through silver for the elite predator.",
      proof: "40% ALC",
    },
    {
      name: "Diamond",
      img: "/diamond.png",
      desc: "Crystal clarity with a razor-sharp finish. Hard to find, harder to forget.",
      proof: "42% ALC",
    },
    {
      name: "Crown",
      img: "/crown.png",
      desc: "The king of the cellar. A heavy, royal blend for those who rule the night.",
      proof: "48% ALC",
    },
    {
      name: "Ace",
      img: "/ace.png",
      desc: "The wild card. A spicy, unpredictable fusion that hits like a thunderclap.",
      proof: "45% ALC",
    },
    {
      name: "Dominator",
      img: "/dominator.png",
      desc: "Aggressive body with a smoky silhouette. Designed to overpower the senses.",
      proof: "55% ALC",
    },
    {
      name: "Conqueror",
      img: "/conqueror.png",
      desc: "The final sip. A dark, obsidian-aged spirit for the last one standing.",
      proof: "60% ALC",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] py-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-orange-700 uppercase tracking-[0.8em] text-sm font-bold mb-4">
            The Vault
          </h2>
          <h3 className="text-5xl sm:text-6xl font-[900] italic uppercase text-white tracking-tighter">
            Choose Your <span className="text-red-900">Legacy</span>
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0d0d0d] border border-gray-900 overflow-hidden transition-all duration-500 hover:border-orange-800/40 shadow-2xl"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-80 overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transform scale-125 group-hover:scale-150 transition-transform duration-1000 ease-in-out"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-90"></div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter text-white group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-red-900 text-[10px] font-black tracking-widest border border-red-900/30 px-2 py-1">
                    {item.proof}
                  </span>
                </div>

                <p className="text-gray-500 font-serif italic text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                  {item.desc}
                </p>

                <button className="w-full py-3 bg-transparent border border-gray-800 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
                  Claim Bottle
                </button>
              </div>

              {/* Hover Underglow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-900/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

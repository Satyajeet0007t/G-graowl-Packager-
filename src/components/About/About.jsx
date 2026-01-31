import React from "react";
import logo from "../../assets/logo.png"; // Your local logo

export default function About() {
  return (
    <div className="py-20 bg-[#0a0a0a] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LOGO CONTAINER - CROPPED, NUDGED RIGHT & POP-OUT HOVER */}
          <div className="relative flex justify-center md:justify-start items-center">
            {/* Parent container with 'translate-x' to nudge it slightly right */}
            <div className="relative w-72 h-72 sm:w-[500px] sm:h-[500px] overflow-hidden rounded-2xl border border-white/5 bg-[#080808] transform translate-x-2 sm:translate-x-8 group">
              <img
                className="w-full h-full object-cover transform scale-125 group-hover:scale-[1.4] transition-transform duration-500 ease-out"
                src={logo}
                alt="G'graowl Logo"
                style={{
                  filter: "none",
                  opacity: 1,
                  objectPosition: "center 25%",
                }}
              />

              {/* Inner glow that intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Subtle red "eye-glint" overlay on hover */}
              <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/5 transition-colors duration-500 pointer-events-none"></div>
            </div>

            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-orange-900/10 blur-[100px] -z-10 translate-x-12"></div>
          </div>

          {/* RIGHT SIDE: SCARY DESCRIPTION */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-[0.6em] text-red-800 uppercase mb-2">
                The Forbidden Blend
              </h2>
              <h1 className="text-5xl sm:text-7xl font-[900] italic uppercase tracking-tighter leading-none">
                Bottled <span className="text-orange-700">Chaos.</span>
              </h1>
            </div>

            <div className="space-y-6 text-gray-400 font-serif italic text-lg sm:text-xl leading-relaxed border-l-2 border-red-900 pl-6">
              <p>
                G'graowl Pakager is not a drink; it is an inheritance of the
                void. Distilled in the silent hours of the lunar eclipse, our
                spirits carry the weight of ancient shadows and the bite of a
                predator’s grin.
              </p>
              <p className="text-white">
                "One sip to remember why you fear the dark. Two sips to become
                the thing the dark fears."
              </p>
              <p>
                Crafted for those who find comfort in the cold and beauty in the
                macabre. We don't just package liquor; we cage the beast. Drink
                at your own peril—the shadow is thirsty.
              </p>
            </div>

            {/* DARK ELEMENTS */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-red-900 to-transparent"></div>
              <span className="text-[10px] uppercase tracking-[1em] text-gray-600">
                Established In Shadows
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

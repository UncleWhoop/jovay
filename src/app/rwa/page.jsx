'use client';

import React, { useState } from 'react';

const coreAdvantages = [
  {
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/3736TZXBXlcAAAAAQ1AAAAgADlxJAQFr/original",
    title: "High Efficiency, Low Cost",
    description: "Layer 2 architecture supports high-frequency trading and low-cost asset on-chain listing."
  },
  {
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/9be7SqnAaX8AAAAAQ2AAAAgADlxJAQFr/original",
    title: "Multi-Asset Compatibility",
    description: "Supports new energy, supply chain finance, infrastructure revenue rights, and more."
  },
  {
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KAm1TI2ZTxcAAAAAQ0AAAAgADlxJAQFr/original",
    title: "Compliance & Security",
    description: "Built on JOVAY's regulated RWA sandbox with integrated compliance and audit frameworks."
  }
];

const processSteps = [
  {
    title: "Legal and Economic Structure of Assets",
    description: "Translates core PPM/LPA terms into on-chain parameters",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/TqU2Tppx7AIAAAAASxAAAAgADlxJAQFr/fmt.webp",
    large: true
  },
  {
    title: "On-chain issuance & governance",
    description: "Configure custom governance frameworks: roles, actions & protocol integrations",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/qCN1SLd-yJ8AAAAARBAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Smart Contract & Legal Docs",
    description: "Automatically synchronizes business/legal logic to smart contracts and legal documents.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ujsXR44ytRwAAAAAQpAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Final Verification & Deployment",
    description: "Multi-party collaborative verification space for comprehensive listing and confirmation.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AX3gQpovSWsAAAAAQ0AAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Investor & Channel Management",
    description: "Streamlines investor onboarding and channel distribution workflows.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/fMQyRoWXh2kAAAAAQzAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Post-Investment Ops Dashboard",
    description: "Interactive dashboard for fund managers' daily on-chain operations.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/U49jTLL3KIYAAAAAQyAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Secondary Market & DeFi Expansion",
    description: "Liquidity marketplace for secondary trading and DeFi protocol integration.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/qQIMS4ndezEAAAAAQqAAAAgADlxJAQFr/fmt.webp"
  }
];

export default function AssetsTokenizationPage() {
  const [email, setEmail] = useState('');

  const handleBookDemo = () => {
    if (email) {
      console.log('Book demo for:', email);
      alert(`Demo booked for: ${email}`);
      setEmail('');
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <div className="relative pb-16">
      <div className="flex flex-col gap-24">
        {/* Hero Section */}
        <div className="w-full h-[560px] flex items-center justify-center pt-36 pb-22 px-24 relative">
          <img
            src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ktvvS7S_SUoAAAAARnAAAAgADlxJAQFr/fmt.webp"
            alt="assets"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          
          {/* Animated Grid */}
          <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="135" height="135" patternUnits="userSpaceOnUse">
                <path d="M 135 0 L 0 0 0 135" fill="none" stroke="#E5ECFF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {[...Array(14)].map((_, i) => (
              <image
                key={i}
                x={i * 135 - 1.25}
                y="0"
                width="2.5"
                height="72.5"
                href="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KhPZRISjp_EAAAAAQDAAAAgADlxJAQFr/original"
                opacity="0"
              >
                <animate attributeName="opacity" values="0;1;1;0" dur="5s" begin={`${Math.random() * 2}s`} repeatCount="indefinite" />
                <animate attributeName="y" values="0;487.5" dur="5s" begin={`${Math.random() * 2}s`} repeatCount="indefinite" />
              </image>
            ))}
          </svg>

          {/* Hero Content */}
          <div className="w-full max-w-[1160px] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-full pt-36 z-10 flex flex-col items-center gap-4">
            <h1 className="text-[#1D1E1E] text-6xl font-semibold flex flex-col text-center">
              <span>Ready To Revolutionize</span>
              <span>Your Assets</span>
            </h1>
            <div className="text-[#1D1E1E] text-base text-center">
              Join the growing ranks of asset owners and investors leveraging JOVAY for secure, efficient, and globally accessible tokenization.
            </div>
            
            {/* Email Input with Button */}
            <div className="mt-4 flex flex-col items-start justify-start gap-4">
              <div className="rounded-full p-0.5 bg-gradient-to-r from-blue-600 to-cyan-400">
                <div className="flex items-center bg-white rounded-full h-12 pl-6 pr-0.5">
                  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor" className="mr-2 text-black">
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Send your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="outline-none border-none bg-transparent text-sm w-64"
                  />
                  <button
                    onClick={handleBookDemo}
                    className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full px-6 py-2.5 text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Book a demo
                    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Advantages Section */}
        <div className="text-white backdrop-blur-sm w-full px-4 flex flex-col gap-2 items-center">
          <div className="w-full max-w-[1160px] flex flex-col items-center">
            <div className="pb-12 flex flex-col items-center gap-4">
              <h2 className="text-3xl text-center font-semibold text-black">Core Advantages</h2>
              <div className="text-[#666F8D] max-w-[740px] text-center">
                Your Passport to the Future of Asset Ownership.
              </div>
            </div>
            
            <div className="w-full flex gap-0">
              {coreAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`flex-1 relative w-[236px] h-[280px] px-8 py-3 flex flex-col items-center gap-3 ${
                    index % 2 === 0 ? 'border-t-2 border-l-2 border-r-2' : 'border-b-2 border-l-2 border-r-2'
                  } border-blue-200`}
                  style={{ left: `${-2 * index}px` }}
                >
                  <img src={advantage.icon} alt={advantage.title} className="w-20 h-20" />
                  <h3 className="text-[#3D3D3D] text-2xl font-semibold text-center">
                    {advantage.title}
                  </h3>
                  <div className="text-[#666F8D] text-base text-center mt-0.5">
                    {advantage.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tokenization Process Section */}
        <div className="text-white backdrop-blur-sm w-full px-4 flex flex-col gap-2 items-center">
          <div className="w-full max-w-[1160px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl text-center font-semibold text-black">
                Detailing The Tokenization Process
              </h2>
              <div className="text-[#666F8D] text-center">
                Your Tokenization Journey: A Streamlined, Transparent Process.
              </div>
            </div>

            <div className="mt-4 flex gap-2.5">
              {/* First large card */}
              <div className="flex">
                <div className="relative group rounded-2xl bg-white w-[290px] min-h-[190px] p-5 border border-blue-100 shadow-sm overflow-hidden flex flex-col gap-3"
                  style={{ background: 'radial-gradient(69% 69% at 100% 100%, #E3EEFF 0%, #FFFFFF 100%)' }}>
                  <div className="text-lg text-black">{processSteps[0].title}</div>
                  <div className="text-sm text-[#7C7E7A]">{processSteps[0].description}</div>
                  <img
                    className="absolute bottom-[-24px] right-[-44px] w-[300px] h-auto"
                    src={processSteps[0].image}
                    alt={processSteps[0].title}
                  />
                </div>
              </div>

              {/* Remaining cards in grid */}
              <div className="flex flex-wrap gap-2.5 max-w-[850px]">
                {processSteps.slice(1).map((step, index) => (
                  <div
                    key={index}
                    className="relative group rounded-2xl bg-white w-[275px] min-h-[190px] p-5 border border-blue-100 shadow-sm overflow-hidden flex flex-col gap-3"
                    style={{ background: 'radial-gradient(69% 69% at 100% 100%, #E3EEFF 0%, #FFFFFF 100%)' }}
                  >
                    <div className="text-lg text-black">{step.title}</div>
                    <div className="text-sm text-[#7C7E7A]">{step.description}</div>
                    <img
                      className="absolute right-[-34px] w-[130px] h-auto bottom-[-44px]"
                      src={step.image}
                      alt={step.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
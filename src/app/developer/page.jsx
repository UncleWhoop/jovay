'use client';

import React, { useState } from 'react';

const developerResources = [
  {
    title: "Quick Start",
    description: "Get started quickly with our step-by-step guides and tools.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/1zSlSbfCus0AAAAAQrAAAAgADlxJAQFr/original",
    url: "https://docs.jovay.io/guide/developer-quickstart"
  },
  {
    title: "Blockchain Explorer",
    description: "Explore transactions, addresses, and blocks on the Jovay blockchain.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zFtwTKmSNkgAAAAAQsAAAAgADlxJAQFr/original",
    url: "https://explorer.jovay.io/l2"
  },
  {
    title: "Testnet Faucet",
    description: "Receive test tokens to experiment and test your dApps on the Jovay network.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/As1KSqfT7FoAAAAAQsAAAAgADlxJAQFr/original",
    url: "https://docs.jovay.io/guide/developer-quickstart#method-2-faucet-testnet-only"
  },
  {
    title: "SmartCogent",
    description: "AI agent for rapid DAPP development on Jovay.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/VXukT5YyrwIAAAAAQtAAAAgADlxJAQFr/original",
    url: "https://smartcogent.jovay.io/"
  },
  {
    title: "Developer Docs",
    description: "Comprehensive documentation to help you build and deploy applications efficiently.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/4iI1SKza4oQAAAAAQoAAAAgADlxJAQFr/original",
    url: "https://docs.jovay.io/"
  },
  {
    title: "GitHub",
    description: "Explore our open-source projects and contribute to the Jovay ecosystem.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/cffZSp20DqUAAAAAQrAAAAgADlxJAQFr/original",
    url: "https://github.com/jovaynetwork"
  }
];

const transactionTypes = [
  { gas: "21,000 Gas", type: "Simple transfers" },
  { gas: "110,000 Gas", type: "NFT minting" },
  { gas: "55,000 Gas", type: "ERC20 transfers" },
  { gas: "100,000 Gas", type: "Complex contract calls" },
  { gas: "150,000 Gas", type: "DEX trading" }
];

export default function DeveloperPage() {
  const [congestion, setCongestion] = useState(50);
  const [selectedTx, setSelectedTx] = useState(0);

  const getCongestionLabel = () => {
    if (congestion < 33) return "Low";
    if (congestion < 66) return "Medium";
    return "High";
  };

  return (
    <div className="transition-all duration-300 bg-white">
      <div className="flex flex-col gap-16">
        {/* Hero Section */}
        <div 
          className="pt-24 md:pt-52 pb-16 md:pb-36 bg-cover bg-no-repeat flex flex-col items-center gap-4 px-4"
          style={{ backgroundImage: "url(https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/j2Z7QIOplnQAAAAAQ9AAAAgADlxJAQFr/original)" }}
        >
          <h2 className="text-3xl md:text-5xl text-center font-semibold text-black">
            Join The Developer Community
          </h2>
          <div className="text-[#666F8D] text-center text-sm md:text-base max-w-2xl">
            Collaborate, share knowledge, and stay updated on the latest Web3 innovations.
          </div>
          <a
            href="https://discord.gg/vBxayT6SBw"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-16 px-6 py-3 text-base rounded-full border-none text-white bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition-opacity"
          >
            Join our Discord
          </a>
        </div>

        {/* Developer Center Section */}
        <div className="w-full px-4 flex flex-col gap-2 items-center">
          <div className="w-full max-w-[1160px] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 px-4">
              <h2 className="text-2xl md:text-4xl text-black text-center font-medium">Developer Center</h2>
              <div className="text-[#666F8D] text-center text-sm md:text-base max-w-3xl">
                Built on Jovay Layer2, a developer-friendly ecosystem to accelerate the efficient deployment and iteration of Web3 applications.
              </div>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full px-4">
              {developerResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="rounded-xl bg-gradient-to-b from-transparent from-45% to-[#F5FFF7] to-99% border border-[#DEDEDE] shadow-sm w-full h-[280px] md:h-[340px] p-6 md:p-8 flex flex-col items-center justify-between gap-3 hover:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/Bu2ZTolrvBcAAAAAQOAAAAgADlxJAQFr/original')] hover:bg-cover hover:bg-no-repeat transition-all">
                    <div className="flex flex-col items-center gap-3">
                      <img src={resource.icon} alt={`${resource.title} icon`} className="w-16 h-16 md:w-20 md:h-20" />
                      <h3 className="text-[#191919] text-lg md:text-2xl font-medium text-center">{resource.title}</h3>
                      <div className="text-[#7C7E7A] text-sm md:text-lg text-center">
                        {resource.description}
                      </div>
                    </div>
                    <button className="rounded-full text-black py-1 px-3 text-sm md:text-base border border-gray-300 bg-white hover:border-blue-500 hover:text-blue-500 transition-all">
                      Enter
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gas Fee Prediction */}
        <div className="flex items-center justify-center px-4">
          <div 
            className="w-full max-w-[1160px] p-4 md:p-8 bg-cover bg-no-repeat text-white rounded-3xl flex flex-col lg:flex-row gap-8 lg:gap-16"
            style={{ backgroundImage: "url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/JF3JRZ1X4ToAAAAARvAAAAgADlxJAQFr/original')" }}
          >
            {/* Left Section */}
            <div className="flex flex-col gap-6 md:gap-8 flex-1">
              <h2 className="text-2xl md:text-4xl font-medium">Gas Fee Prediction</h2>
              <div className="text-sm md:text-base">Real-time comparison of transaction costs between Layer1 and Layer2 networks</div>
              
              {/* Congestion Slider */}
              <div className="w-full">
                <div className="mb-2 text-sm md:text-base">
                  Network Congestion <span className="ml-2">{getCongestionLabel()}</span>
                </div>
                <div className="relative w-full py-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={congestion}
                    onChange={(e) => setCongestion(Number(e.target.value))}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: 'linear-gradient(to right, #fde047, #4ade80, #2dd4bf)',
                    }}
                  />
                  <div className="flex justify-between mt-6">
                    <div className={`text-xs font-medium ${congestion < 33 ? 'text-green-300 scale-110' : 'text-white/70'}`}>Low</div>
                    <div className={`text-xs font-medium ${congestion >= 33 && congestion < 66 ? 'text-green-300 scale-110' : 'text-white/70'}`}>Medium</div>
                    <div className={`text-xs font-medium ${congestion >= 66 ? 'text-green-300 scale-110' : 'text-white/70'}`}>High</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-6 md:gap-8 flex-1">
              {/* Transaction Types */}
              <div className="flex flex-col gap-3">
                <div className="text-sm md:text-base">Transaction Types</div>
                <div className="border-t border-white/40"></div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {transactionTypes.map((tx, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedTx(index)}
                      className={`
                        group rounded-full py-2 md:py-3 cursor-pointer transition-all flex flex-col items-center justify-center gap-0.5
                        bg-gray-200 
                        ${selectedTx === index ? "ring-2 ring-[#326CFF] bg-white" : ""}
                        hover:bg-white
                      `}
                    >
                      <div className={`text-xs md:text-sm ${selectedTx === index ? 'text-[#326CFF]' : 'text-[#666F8D]'} group-hover:text-[#326CFF]`}>
                        {tx.gas}
                      </div>
                      <div className="text-xs md:text-sm text-[#191919] opacity-60 text-center">{tx.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Estimates */}
              <div className="flex flex-col gap-3">
                <div className="text-sm md:text-base">Estimate transaction fees</div>
                <div className="border-t border-white/40"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-white text-lg md:text-2xl flex flex-col justify-between gap-2">
                    <div className="font-bold">
                      <span>$</span>
                      <span>0.030736</span>
                    </div>
                    <div className="text-xs md:text-sm opacity-60">Layer1 (Ethereum)</div>
                  </div>
                  <div className="text-white text-lg md:text-2xl flex flex-col justify-between gap-2">
                    <div className="font-bold">
                      <span>$</span>
                      <span>0.000084</span>
                    </div>
                    <div className="text-xs md:text-sm opacity-60">Layer2 (Jovay)</div>
                  </div>
                  <div className="text-white text-lg md:text-2xl flex flex-col justify-between gap-2">
                    <div className="font-bold">
                      <span>366</span>
                      <span>x</span>
                    </div>
                    <div className="text-xs md:text-sm opacity-60">Cost Ratio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Tooling Landscape */}
        <div 
          className="text-white w-full px-4 pb-16 md:pb-24 flex flex-col gap-2 items-center bg-[url(https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/-lK5TqRAw4AAAAAAW6AAAAgADlxJAQFr/fmt.webp)] bg-cover bg-[center_100px] bg-no-repeat"
        >
          <div className="w-full max-w-[1160px] flex flex-col items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center gap-4 px-4">
              <h2 className="text-2xl md:text-4xl text-center font-medium text-black">
                Developer Tooling Landscape
              </h2>
              <div className="text-[#666F8D] max-w-[974px] text-center text-sm md:text-base">
                Streamline integration of top Web3 projects into a unified toolset, offering effortless developer experience and trial capabilities.
              </div>
            </div>

            <div className="w-full bg-[rgba(236,242,249,0.75)] border-2 border-[#CDDBFF] rounded-xl p-1 flex justify-center">
              <img src="/images/developer.jpg" alt="Developer tooling landscape showing various Web3 development tools and integrations" className="w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
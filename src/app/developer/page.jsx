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
  { gas: "21,000 Gas", type: "Simple transfers", active: true },
  { gas: "110,000 Gas", type: "NFT minting", active: false },
  { gas: "55,000 Gas", type: "ERC20 transfers", active: false },
  { gas: "100,000 Gas", type: "Complex contract calls", active: false },
  { gas: "150,000 Gas", type: "DEX trading", active: false }
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
    <div className="transition-all duration-300">
      <div className="flex flex-col gap-16">
        {/* Hero Section */}
        <div 
          className="pt-52 pb-36 bg-cover bg-no-repeat flex flex-col items-center gap-4"
          style={{ backgroundImage: "url(https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/j2Z7QIOplnQAAAAAQ9AAAAgADlxJAQFr/original)" }}
        >
          <h2 className="text-5xl text-center font-semibold text-black">
            Join The Developer Community
          </h2>
          <div className="text-[#666F8D] text-center">
            Collaborate, share knowledge, and stay updated on the latest Web3 innovations.
          </div>
          <a
            href="https://discord.gg/vBxayT6SBw"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 px-6 py-3 text-base rounded-full border-none text-white bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition-opacity"
          >
            Join our Discord
          </a>
        </div>

        {/* Developer Center Section */}
        <div className="w-full px-4 flex flex-col gap-2 items-center">
          <div className="w-full max-w-[1160px] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-4xl text-black text-center font-medium">Developer Center</h2>
              <div className="text-[#666F8D] text-center">
                Built on Jovay Layer2, a developer-friendly ecosystem to accelerate the efficient deployment and iteration of Web3 applications.
              </div>
            </div>

            {/* Resource Cards */}
            <div className="flex flex-wrap justify-center gap-6">
              {developerResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="rounded-xl bg-gradient-to-b from-transparent from-45% to-[#F5FFF7] to-99% border border-[#DEDEDE] shadow-sm w-[350px] h-[340px] p-8 flex flex-col items-center justify-between gap-3 hover:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/Bu2ZTolrvBcAAAAAQOAAAAgADlxJAQFr/original')] hover:bg-cover hover:bg-no-repeat transition-all">
                    <div className="flex flex-col items-center gap-3">
                      <img src={resource.icon} alt={resource.title} className="w-20 h-20" />
                      <h3 className="text-[#191919] text-2xl font-medium">{resource.title}</h3>
                      <div className="text-[#7C7E7A] text-lg text-center">
                        {resource.description}
                      </div>
                    </div>
                    <button className="rounded-full text-black py-1 px-3 text-base border border-gray-300 bg-white hover:border-blue-500 hover:text-blue-500 transition-all">
                      Enter
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gas Fee Prediction */}
        <div className="flex items-center justify-center">
          <div 
            className="w-full max-w-[1160px] p-8 bg-cover bg-no-repeat text-white rounded-3xl flex gap-16"
            style={{ backgroundImage: "url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/JF3JRZ1X4ToAAAAARvAAAAgADlxJAQFr/original')" }}
          >
            {/* Left Section */}
            <div className="flex flex-col gap-8 flex-1">
              <h2 className="text-4xl font-medium">Gas Fee Prediction</h2>
              <div>Real-time comparison of transaction costs between Layer1 and Layer2 networks</div>
              
              {/* Congestion Slider */}
              <div className="w-full">
                <div className="mb-2">
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
            <div className="flex flex-col gap-8 flex-1">
              {/* Transaction Types */}
              <div className="flex flex-col gap-3">
                <div>Transaction Types</div>
                <div className="border-t border-white/40"></div>
                <div className="flex flex-wrap gap-3">
                  {transactionTypes.map((tx, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedTx(index)}
                      className={`group w-[48%] h-16 cursor-pointer transition-all bg-cover bg-no-repeat flex flex-col items-center justify-center gap-0.5 ${
                        selectedTx === index 
                          ? "bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KGmlQ6CFnBwAAAAAQBAAAAgADlxJAQFr/original')]"
                          : "bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/-5QnRqvnmc8AAAAAKTAAAAgADlxJAQFr/original')]"
                      } hover:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KGmlQ6CFnBwAAAAAQBAAAAgADlxJAQFr/original')]`}
                    >
                      <div className={`text-sm ${selectedTx === index ? 'text-[#326CFF]' : 'text-white/60'} group-hover:text-[#326CFF]`}>
                        {tx.gas}
                      </div>
                      <div className="text-sm text-[#191919] opacity-60">{tx.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Estimates */}
              <div className="flex flex-col gap-3">
                <div>Estimate transaction fees</div>
                <div className="border-t border-white/40"></div>
                <div className="flex justify-between gap-3">
                  <div className="text-white text-2xl max-w-[200px] flex flex-col justify-between gap-3">
                    <div className="font-bold">
                      <span>$</span>
                      <span>0.030736</span>
                    </div>
                    <div className="text-sm opacity-60">Layer1 (Ethereum)</div>
                  </div>
                  <div className="text-white text-2xl max-w-[200px] flex flex-col justify-between gap-3">
                    <div className="font-bold">
                      <span>$</span>
                      <span>0.000084</span>
                    </div>
                    <div className="text-sm opacity-60">Layer2 (Jovay)</div>
                  </div>
                  <div className="text-white text-2xl max-w-[200px] flex flex-col justify-between gap-3">
                    <div className="font-bold">
                      <span>366</span>
                      <span>x</span>
                    </div>
                    <div className="text-sm opacity-60">Cost Ratio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Tooling Landscape */}
        <div 
          className="text-white w-full px-4 pb-24 flex flex-col gap-2 items-center bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: "url(https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/-lK5TqRAw4AAAAAAW6AAAAgADlxJAQFr/fmt.webp)",
            backgroundPosition: "center 100px"
          }}
        >
          <div className="w-full max-w-[1160px] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-4xl text-center font-medium text-black">
                Developer Tooling Landscape
              </h2>
              <div className="text-[#666F8D] max-w-[974px] text-center">
                Streamline integration of top Web3 projects into a unified toolset, offering effortless developer experience and trial capabilities.
              </div>
            </div>

            {/* Tooling Diagram */}
            <div className="w-full bg-[rgba(236,242,249,0.75)] border-2 border-[#CDDBFF] rounded-xl p-8">
              {/* Layer 1: Decentralized Applications */}
              <div className="mb-4">
                <div className="rounded bg-gradient-to-r from-[#326CFF] to-[#96FFF5] p-6 mb-4 opacity-60 shadow-lg border border-[#CDDBFF] text-2xl font-black text-white text-center">
                  Decentralized Applications
                </div>
                <div className="bg-[rgba(236,242,249,0.75)] border border-[#CDDBFF] rounded-xl p-4">
                  <div className="text-2xl font-medium text-black mb-4 flex justify-around">
                    <div>Applications</div>
                    <div>Wallets</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 bg-white p-4 rounded-lg flex justify-between">
                      {['RWA', 'NFT', 'Web3 Agents', 'DeFi/DePIN', 'PayFi', 'Data'].map((item) => (
                        <div key={item} className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                          <div className="text-sm text-[#666F8D]">{item}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg flex justify-between">
                      {['Non-custodial Wallets', 'Custodial Wallets', 'Smart Contract Wallets'].map((item) => (
                        <div key={item} className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                          <div className="text-sm text-[#666F8D] text-center">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 2: Jovay Stack */}
              <div className="mb-4">
                <div className="rounded bg-gradient-to-r from-[#326CFF] to-[#96FFF5] p-6 mb-4 opacity-60 shadow-lg border border-[#CDDBFF] text-2xl font-black text-white text-center">
                  Jovay Stack
                </div>
                <div className="text-center text-gray-600 py-8 bg-white/50 rounded-xl">
                  Comprehensive development framework and tools
                </div>
              </div>

              {/* Layer 3: Interaction Layer */}
              <div>
                <div className="rounded bg-gradient-to-r from-[#326CFF] to-[#96FFF5] p-6 mb-4 opacity-60 shadow-lg border border-[#CDDBFF] text-2xl font-black text-white text-center">
                  Interaction Layer
                </div>
                <div className="flex gap-4">
                  {['Block Explorer', 'Node Service', 'Oracle', 'Language'].map((item) => (
                    <div key={item} className="flex-1 bg-[rgba(236,242,249,0.75)] border border-[#CDDBFF] rounded-xl p-4 text-center">
                      <div className="text-xl font-medium text-black mb-4">{item}</div>
                      <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';

const dapps = [
  {
    id: 1,
    name: "Jovay Multisender",
    description: "A powerful dApp for batch transferring ETH & ERC20 tokens to multiple addresses for Jovay Testnet.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/Rrc8RbmB5yIAAAAAa5AAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Fmulti-sender.swapsphere.space%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "Tools", bg: "rgb(237, 228, 255)" }
    ],
    category: "Tools"
  },
  {
    id: 2,
    name: "SwapSphere",
    description: "A decentralized and efficient liquidity protocol empowering users to seamlessly exchange crypto assets.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/7-_xTqNoTQgAAAAAQZAAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Fswap.swapsphere.space%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "Token Swap", bg: "rgb(237, 228, 255)" }
    ],
    category: "DeFi"
  },
  {
    id: 3,
    name: "Jovay Identity Service",
    description: "You can create a unique nickname on Jovay, which others can use to find you and see your avatar and social links.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/GUafTo2HYdoAAAAAWtAAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Fjns.addly.store%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "Social", bg: "rgb(237, 228, 255)" }
    ],
    category: "Social"
  },
  {
    id: 4,
    name: "ERC20 Faucet",
    description: "A decentralized ERC20 faucet DApp on Jovay Testnet that allows token owners to register faucets, enables one-time claims per user, supports community-driven token contributions.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/uh36RoFQoQUAAAAAchAAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Ferc20faucet.addly.store%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "Tools", bg: "rgb(237, 228, 255)" }
    ],
    category: "Tools"
  },
  {
    id: 5,
    name: "Addly NFT Studio",
    description: "Quickly mint your own NFT!",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/uh36RoFQoQUAAAAAchAAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Fnftstudio.addly.store%2F%23%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "NFT Minting", bg: "rgb(237, 228, 255)" }
    ],
    category: "NFT"
  },
  {
    id: 6,
    name: "Addly Bridge",
    description: "ETH Bridge between ETH Sepolia and Jovay",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/yctiSYd871oAAAAASDAAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Faddly.store%2F%23bridge",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "Cross-chain", bg: "rgb(237, 228, 255)" },
      { label: "Bridge", bg: "rgb(216, 255, 255)" },
      { label: "Interoperability", bg: "rgb(228, 240, 255)" }
    ],
    category: "Tools"
  },
  {
    id: 7,
    name: "NFTs with AI Magic",
    description: "Transform your ideas into unique NFTs using AI-powered generation",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/5NsoTZ6uARsAAAAAQfAAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Fnft.swapsphere.space%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "Digital Art", bg: "rgb(237, 228, 255)" }
    ],
    category: "NFT"
  },
  {
    id: 8,
    name: "ETH RedPacket",
    description: "New red packet feature, Send your friends an ETH red packet!",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/0b4lT6l1hCkAAAAAQMAAAAgADlxJAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Fredpacket.swapsphere.space%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "Social Payments", bg: "rgb(237, 228, 255)" }
    ],
    category: "Social"
  },
  {
    id: 9,
    name: "ZK Sudoku",
    description: "Play Sudoku games on Jovay Testnet! Accept procedurally generated quests or take on bounties from other players. You solution will be transfered as zk-SNARKs and verified by contract!",
    image: "https://mdn.alipayobjects.com/huamei_shvti7/afts/img/o5ByR7I7NLgAAAAAbHAAAAgADuxxAQFr/original",
    url: "/risk-tip?redirect=https%3A%2F%2Fzk-sudoku.swapsphere.space%2F",
    tags: [
      { label: "Testnet", bg: "rgb(228, 240, 255)" },
      { label: "ZK", bg: "rgb(237, 228, 255)" }
    ],
    category: "Gaming"
  }
];

const categories = ["All", "DeFi", "NFT", "Gaming", "Metaverse", "Social", "Tools"];

export default function DAppsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDapps = selectedCategory === "All" 
    ? dapps 
    : dapps.filter(dapp => dapp.category === selectedCategory);

  const featuredCount = 6;
  const totalDapps = 9;

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          poster="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/O2W-R6i_OeYAAAAATnAAAAgADlxJAQFr/original"
          src="https://mass-office.alipay.com/huamei_koqzbu/afts/file/k5wsT5zgvjIAAAAAgBAAABgAenV5AQBr"
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        />
        
        {/* Overlay with decorative images */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/vbyORqN_jV0AAAAAXHAAAAgADlxJAQFr/original')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat"
          }}
        >
          <img alt="" className="absolute top-16 left-[10%] w-36 h-36" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/7jB0T7IB4GwAAAAAQDAAAAgADlxJAQFr/original" />
          <img alt="" className="absolute top-44 left-[5%] w-36 h-36" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/0VDkQJtY7SEAAAAAQGAAAAgADlxJAQFr/original" />
          <img alt="" className="absolute top-56 left-[15%] w-30 h-30" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/sJWIT5tcVmQAAAAAQFAAAAgADlxJAQFr/original" />
          <img alt="" className="absolute top-96 left-[8%] w-44 h-44" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/D9FWR6LiH54AAAAAQEAAAAgADlxJAQFr/original" />
          <img alt="" className="absolute top-36 right-[16%] w-25 h-25" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/heEOQbCPz9sAAAAAQEAAAAgADlxJAQFr/original" />
          <img alt="" className="absolute top-36 right-[1%] w-34 h-34" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/O7qnT7VCM9YAAAAAQIAAAAgADlxJAQFr/original" />
          <img alt="" className="absolute top-80 right-[10%] w-46 h-46" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/eyvXQIHUkQYAAAAAQFAAAAgADlxJAQFr/original" />
        </div>

        {/* Hero Content */}
        <div className="w-full max-w-[677px] mx-auto h-[520px] flex flex-col items-center justify-center relative z-10 px-4">
          <h2 className="text-5xl md:text-[56px] font-semibold leading-tight md:leading-[84px] text-center capitalize text-black max-w-[600px]">
            Discover the best DApps
          </h2>
          <p className="text-lg font-normal leading-6 text-center text-[#1D1E1E] mt-4 max-w-lg">
            Explore the most innovative decentralized applications DeFi, NFTs, Gaming, and Metaverse. Find the big thing in web3.
          </p>
          
          {/* Stats */}
          <div className="mt-10 flex justify-center w-full">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <img className="w-8 h-8" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/jxkLTLZDa58AAAAAK6AAAAgADlxJAQFr/original" alt="" />
                <span className="text-lg font-medium text-[#326CFF]">{featuredCount} Featured</span>
              </div>
              <div className="w-px h-7 bg-gray-300"></div>
              <div className="flex items-center gap-4">
                <img className="w-8 h-8" src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/jxkLTLZDa58AAAAAK6AAAAgADlxJAQFr/original" alt="" />
                <span className="text-lg font-medium text-[#326CFF]">{totalDapps} Total DApps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1024px] mx-auto pt-16 px-4">
        {/* Category Filter */}
        <div className="flex justify-between items-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* DApps Grid */}
        <div className="mb-24 max-h-[500px] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDapps.map((dapp) => (
              <a
                key={dapp.id}
                href={dapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl p-0.5 flex items-center justify-center cursor-pointer
                  before:content-[''] before:absolute before:top-px before:left-px 
                  before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:bg-[#D8D8D8] 
                  before:rounded-[11px] before:z-[1]
                  hover:before:left-0 hover:before:top-0 hover:before:w-full hover:before:h-full 
                  hover:before:bg-gradient-to-br hover:before:from-[#326CFF] hover:before:to-[#6EFFFF]"
              >
                <div className="rounded-[10px] w-full bg-white p-8 h-[260px] relative z-[2] 
                  shadow-sm group-hover:bg-[#F8FDFF] transition-colors">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      alt={dapp.name}
                      src={dapp.image}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-medium text-[#191919] mb-1 
                        group-hover:text-[#326CFF] truncate transition-colors">
                        {dapp.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#666F8D] text-xs">Be the first to rate!</span>
                        <img
                          alt="edit"
                          className="w-4 h-4"
                          src="https://mdn.alipayobjects.com/huamei_lc6ihc/afts/img/m9nhQZTN9U4AAAAAJyAAAAgADltnAQFr/original"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#7C7E7A] line-clamp-2 mb-6 h-11">
                    {dapp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide">
                    {dapp.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded text-sm text-[#666F8D] px-2.5 py-1 whitespace-nowrap"
                        style={{ backgroundColor: tag.bg }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
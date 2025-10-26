import React from 'react';

const newsItems = [
  {
    id: 1,
    title: "Ant Digital Technologies Introduces DT Tokenization Suite, a Full‑Stack Tokenization-as-a-Service",
    description: "On September 10, 2025, Ant Digital Technologies released DT Tokenization Suite, a full-stack, one-stop tokenization solution designed to support the..",
    date: "September 10, 2025",
    category: "Partnerships",
    categoryColor: { text: "rgb(136, 82, 251)", bg: "rgba(136, 82, 251, 0.26)" },
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/uiEISZ_sNwgAAAAAgEAAAAgADlxJAQFr/original",
    url: "https://www.prnewswire.com/apac/news-releases/ant-digital-technologies-introduces-dt-tokenization-suite-a-fullstack-tokenization-as-a-service-302552503.html"
  },
  {
    id: 2,
    title: "Ant Digital Technologies's Jovay Launches Testnet, Mainnet launch expected in Q4",
    description: "International financial media Yahoo Finance reported that Ant Digital Technologies' high-performance Layer 2 network, Jovay, has officially launched its testnet, with its mainnet launch scheduled for Q4 this year. The article highlights Jovay's mission to tackle the performance bottlenecks for mass adoption of Web3 applications.",
    date: "July 15, 2025",
    category: "Announcements",
    categoryColor: { text: "rgb(30, 64, 175)", bg: "rgb(219, 234, 254)" },
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/R6kVRqWIy-MAAAAAgCAAAAgADlxJAQFr/original",
    url: "https://www.prnewswire.com/apac/news-releases/ant-digital-technologiess-jovay-launches-testnet-mainnet-launch-expected-in-q4-302505330.html"
  },
  {
    id: 3,
    title: "螞蟻數科Jovay啟動測試網，主網將於Q4上線",
    description: "螞蟻數科官方合作媒體發布繁體中文通稿，正式宣布其 Layer 2 解決方案 Jovay 啟動測試網。文章詳盡介紹了 Jovay 的技術特性，包括實現 1 秒內快速用戶響應及提供更低 Gas 費，並預告其主網將於今年第四季度上線的計劃。",
    date: "July 15, 2025",
    category: "Announcements",
    categoryColor: { text: "rgb(30, 64, 175)", bg: "rgb(219, 234, 254)" },
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/R6kVRqWIy-MAAAAAgCAAAAgADlxJAQFr/original",
    url: "https://www.metaera.hk/contents/226655"
  },
  {
    id: 4,
    title: "From Financial Powerhouse to Digital Asset Hub: Hong Kong Powering Financial Innovation with Cutting-Edge Technology",
    description: "AsiaTechDaily analyzed Hong Kong's evolution into a digital asset hub, highlighting Ant Digital Technologies' strategic move to open its core technologies—including eKYC, secure computing, and blockchain—to the Hong Kong market. The article underscores this initiative as a key driver for local financial innovation.",
    date: "July 10, 2025",
    category: "Partnerships",
    categoryColor: { text: "rgb(136, 82, 251)", bg: "rgba(136, 82, 251, 0.26)" },
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/W7MbR5P2tjQAAAAAgEAAAAgADlxJAQFr/original",
    url: "https://asiatechdaily.com/from-financial-powerhouse-to-digital-asset-hub-hong-kong-powering-financial-innovation-with-cutting-edge-technology/"
  },
  {
    id: 5,
    title: "Ant Digital Technologies Showcases Next-gen Blockchain and AI Stack at RWA REAL UP Dubai Summit",
    description: "Tech-focused publication Tech Revolt reported on Ant Digital Technologies' showcase of its next-generation blockchain and AI stack at the Dubai Summit. The article details how the Jovay network leverages these advanced technologies to lower transaction costs, enhance efficiency, and provide robust support for the future of Real-World Asset (RWA) tokenization.",
    date: "May 02, 2025",
    category: "Technical",
    categoryColor: { text: "rgb(63, 194, 108)", bg: "rgb(220, 252, 231)" },
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/gy2VTa94PH4AAAAAcCAAAAgADlxJAQFr/original",
    url: "https://techrevolt.io/2025/05/02/ant-digital-technologies-showcases-next-gen-blockchain-and-ai-stack/"
  },
  {
    id: 6,
    title: "Ant Digital Technologies Hosts RWA REAL UP Dubai Summit 2025 and Unveils Layer 2 Blockchain to Strengthen RWA Funding Infrastructure",
    description: "Ant Digital Technologies, a pioneer in emerging technologies, hosts the inaugural RWA REAL UP Dubai Summit 2025 in Dubai today, gathering more than...",
    date: "April 30, 2025",
    category: "Announcements",
    categoryColor: { text: "rgb(30, 64, 175)", bg: "rgb(219, 234, 254)" },
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/8RkoRJzmvV0AAAAAgEAAAAgADlxJAQFr/original",
    url: "https://www.prnewswire.com/apac/news-releases/ant-digital-technologies-hosts-rwa-real-up-dubai-summit-2025-and-unveils-layer-2-blockchain-to-strengthen-rwa-funding-infrastructure-302442792.html"
  }
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <nav className="p-4 pb-6 w-full max-w-[1160px] mx-auto">
        <ol className="flex items-center text-sm">
          <li>
            <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              Home
            </a>
          </li>
          <li className="mx-2 text-gray-400">/</li>
          <li className="text-gray-600">Resource</li>
          <li className="mx-2 text-gray-400">/</li>
          <li className="text-gray-600">News</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="ml-6">
        {/* Header */}
        <div className="w-full max-w-[1138px] mx-auto mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-black leading-9">News</h1>
        </div>

        {/* News Grid */}
        <div className="w-full max-w-[1202px] mx-auto mb-24">
          <div className="px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-2xl flex items-center justify-center cursor-pointer border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-transparent group"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-cyan-400 -z-10" style={{ margin: '-1px' }}></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 w-full h-full rounded-2xl bg-white overflow-hidden flex flex-col">
                    {/* Image */}
                    <img
                      className="w-full h-[308px] object-cover"
                      alt={item.title}
                      src={item.image}
                    />
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-medium text-black leading-7 mb-2 truncate">
                        {item.title}
                      </h2>
                      <p className="text-base text-gray-600 leading-6 mb-4 line-clamp-2 flex-grow">
                        {item.description}
                      </p>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-3 h-3.5" viewBox="0 0 12 14" fill="none">
                            <path d="M10 2H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2H5V1C5 0.734784 4.89464 0.48043 4.70711 0.292893C4.51957 0.105357 4.26522 0 4 0C3.73478 0 3.48043 0.105357 3.29289 0.292893C3.10536 0.48043 3 0.734784 3 1V2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H10C10.5304 14 11.0391 13.7893 11.4142 13.4142C11.7893 13.0391 12 12.5304 12 12V4C12 3.46957 11.7893 2.96086 11.4142 2.58579C11.0391 2.21071 10.5304 2 10 2ZM10 12H2V7H10V12ZM10 5H2V4H3V5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6C4.26522 6 4.51957 5.89464 4.70711 5.70711C4.89464 5.51957 5 5.26522 5 5V4H7V5C7 5.26522 7.10536 5.51957 7.29289 5.70711C7.48043 5.89464 7.73478 6 8 6C8.26522 6 8.51957 5.89464 8.70711 5.70711C8.89464 5.51957 9 5.26522 9 5V4H10V5Z" fill="#6B7280"/>
                          </svg>
                          <span className="text-sm text-gray-500 leading-5">{item.date}</span>
                        </div>
                        <div
                          className="text-sm leading-5 px-3 py-0.5 rounded"
                          style={{
                            color: item.categoryColor.text,
                            backgroundColor: item.categoryColor.bg
                          }}
                        >
                          {item.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
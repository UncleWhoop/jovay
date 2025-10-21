import Image from "next/image";
import Link from "next/link";
import DeveloperSlider from "./components/DeveloperSlider";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-white overflow-x-hidden">
      <header className="bg-transparent w-full p-0 font-bold fixed top-0 z-1000 flex items-start md:items-center">
        <div className="bg-white/31 backdrop-blur-sm flex justify-center items-center w-full h-11 md:h-16 px-4 md:px-0">
          <div className="w-full md:w-[1160px] flex items-center justify-between">
            <div className="flex items-center gap-[58px]">
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Image
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                    alt="logo"
                    width={120}
                    height={28}
                    className="w-auto h-4 md:h-7"
                  />
                </Link>

                <div className="items-center hidden md:flex">
                  <ul className="flex items-center min-w-[500px] gap-8">
                    <li className="relative group">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Link className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors">
                          Developer
                        </Link>
                        <svg
                          viewBox="64 64 896 896"
                          className="w-4 h-4 fill-current"
                          fill="currentColor"
                        >
                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                      </div>
                    </li>

                    <li className="relative group">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Link className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors">
                          Ecosystem
                        </Link>
                        <svg
                          viewBox="64 64 896 896"
                          className="w-4 h-4 fill-current"
                          fill="currentColor"
                        >
                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                      </div>
                    </li>

                    <li className="relative group">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Link className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors">
                          RWA
                        </Link>
                        <svg
                          viewBox="64 64 896 896"
                          className="w-4 h-4 fill-current"
                          fill="currentColor"
                        >
                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                      </div>
                    </li>

                    <li className="relative group">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Link className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors">
                          Resource
                        </Link>
                        <svg
                          viewBox="64 64 896 896"
                          className="w-4 h-4 fill-current"
                          fill="currentColor"
                        >
                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                      </div>
                    </li>
                  </ul>

                  <div className="w-px h-8 bg-gray-300 mx-6"></div>

                  <Link
                    className="text-[rgba(0,4,12,0.80)] font-medium text-base flex items-center hover:text-[#326CFF] transition-colors"
                    href="https://explorer.jovay.io/l2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Explorer</span>
                    <svg
                      viewBox="64 64 896 896"
                      className="w-3.5 h-3.5 ml-1 -rotate-45"
                      fill="currentColor"
                    >
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex md:hidden items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                className="w-4 h-4 cursor-pointer"
              >
                <defs>
                  <clipPath id="master_svg0_24_16090">
                    <rect x="0" y="0" width="16" height="16" rx="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#master_svg0_24_16090)">
                  <g>
                    <path
                      d="M14.4997078125,11.333334123535156C14.5917078125,11.333334123535156,14.6663078125,11.407954123535156,14.6663078125,11.499994123535156L14.6663078125,12.416664123535156C14.6663078125,12.508714123535157,14.5917078125,12.583334123535156,14.4997078125,12.583334123535156L1.4996748125,12.583334123535156C1.4076271125,12.583334123535156,1.3330078125,12.508714123535157,1.3330078125,12.416664123535156L1.3330078125,11.499994123535156C1.333008422852,11.407954123535156,1.4076275125,11.333334123535156,1.4996748125,11.333334123535156L14.4997078125,11.333334123535156ZM9.8330078125,7.374994123535156C9.9250578125,7.374994123535156,9.9996778125,7.449614123535156,9.9996778125,7.541664123535156L9.9996778125,8.458334123535156C9.9996778125,8.550374123535157,9.9250578125,8.624994123535156,9.8330078125,8.624994123535156L1.4996748125,8.624994123535156C1.4076277125,8.624994123535156,1.333008422852,8.550374123535157,1.333008422852,8.458334123535156L1.333008422852,7.541664123535156C1.333008422852,7.449614123535156,1.4076277125,7.374994123535156,1.4996748125,7.374994123535156L9.8330078125,7.374994123535156ZM14.4997078125,7.374994123535156C14.5917078125,7.374994123535156,14.6663078125,7.449614123535156,14.6663078125,7.541664123535156L14.6663078125,8.458334123535156C14.6663078125,8.550374123535157,14.5917078125,8.624994123535156,14.4997078125,8.624994123535156L11.4997078125,8.624994123535156C11.4076078125,8.624994123535156,11.3330078125,8.550374123535157,11.3330078125,8.458334123535156L11.3330078125,7.541664123535156C11.3330078125,7.449614123535156,11.4076078125,7.374994123535156,11.4997078125,7.374994123535156L14.4997078125,7.374994123535156ZM14.4997078125,3.4166641235351562C14.5917078125,3.4166638183591562,14.6663078125,3.4912832235351563,14.6663078125,3.583331123535156L14.6663078125,4.499994123535156C14.6663078125,4.592044123535157,14.5917078125,4.666664123535156,14.4997078125,4.666664123535156L1.4996748125,4.666664123535156C1.4076271125,4.666664123535156,1.3330078125,4.592044123535157,1.3330078125,4.499994123535156L1.3330078125,3.583331123535156C1.3330078125,3.4912832235351563,1.4076271125,3.4166638183591562,1.4996748125,3.4166641235351562L14.4997078125,3.4166641235351562Z"
                      fill="#326CFF"
                      fillOpacity="1"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center sm:items-start">
        <section className="w-full flex items-center justify-center bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/bHuJSbVv7CUAAAAATUAAAAgADlxJAQFr/original')] md:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/S1_HQ5bs5MUAAAAAeLAAAAgADlxJAQFr/original')] bg-cover bg-center bg-no-repeat p-[84px_24px_40px] md:p-[210px_100px_150px]">
          <div className="w-full md:w-[1160px] flex flex-col items-stretch gap-4">
            <h1 className="text-[#1D1E1E] text-2xl md:text-[48px] font-semibold flex flex-col items-center md:items-start">
              <span className="text-center md:text-left">
                Financial-Grade Blockchain
              </span>
              <span>Infrastructure</span>
            </h1>

            <div className="md:w-[600px] text-[#1D1E1E] text-sm md:text-lg text-center md:text-left">
              Powering the global RWA tokenization economy with a secure, open,
              and modular Layer2 infrastructure that bridges Web2 and Web3.
            </div>

            <div className="mt-4 flex justify-center md:justify-start gap-6">
              <Link
                href="https://docs.jovay.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-linear-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white w-[148px] md:w-[224px] h-[34px] md:h-[56px] text-xs md:text-base flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                View developer docs
              </Link>

              <div className="py-1 px-1 bg-linear-to-r from-[#326cff] to-[#6effff] rounded-full">
                <Link
                  href="/institutions-retention"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white rounded-full px-3 md:px-6 py-[15px] h-8 md:h-[52px] text-xs md:text-base relative"
                >
                  <span className="relative z-10 text-black">
                  Institutional solutions
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-screen overflow-hidden flex flex-col items-center justify-center bg-white py-8 md:py-16">
          <h2 className="text-black text-center text-xs md:text-base font-medium mb-6">
            Web3 Partners
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-slide-slow">
              {/* Partner logos */}
              {[
                {
                  name: "Aave",
                  url: "https://aave.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/lkPlSJaEArkAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-[24px]",
                },
                {
                  name: "Centrifuge",
                  url: "https://centrifuge.io/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/LN79S4P3ePkAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-[34px]",
                },
                {
                  name: "ChainIDE",
                  url: "https://chainide.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/9CjqQoXI7QUAAAAAQEAAAAgADlxJAQFr/original",
                  h: "h-[34px]",
                },
                {
                  name: "Chainlink",
                  url: "https://chain.link/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/v5psQrSElJwAAAAAQCAAAAgADlxJAQFr/original",
                  h: "h-[30px]",
                },
                {
                  name: "Ethereum Foundation",
                  url: "https://ethereum.org/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/VBTGRIQgz7gAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-9",
                },
                {
                  name: "Fireblocks",
                  url: "https://www.fireblocks.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ahinSphThpYAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-7",
                },
                {
                  name: "Okx Wallet",
                  url: "https://www.okx.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/rep6SarWLskAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-8",
                },
                {
                  name: "OpenZeppelin",
                  url: "https://www.openzeppelin.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ELtjS7VXTosAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-[26px]",
                },
                {
                  name: "Plume",
                  url: "https://www.plume.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/TQAkRZ1kIXIAAAAAQEAAAAgADlxJAQFr/original",
                  h: "h-[34px]",
                },
                {
                  name: "Slowmist",
                  url: "https://www.slowmist.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KaYiSqFeMGoAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-8",
                },
                {
                  name: "Zellic",
                  url: "https://www.zellic.io/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/8Cv9S5YU50oAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-8",
                },
              ].map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-6 flex items-center justify-center shrink-0"
                >
                  <Image
                    alt={partner.name}
                    src={partner.src}
                    width={120}
                    height={40}
                    className={`${partner.h} w-auto grayscale hover:grayscale-0 transition-all duration-300`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full flex items-center justify-center pt-4 md:pt-8 mb-6 md:mb-[86px]">
          <div className="w-full md:w-[1160px] flex flex-col items-center gap-4 md:gap-8 px-6 md:px-0">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-black text-2xl md:text-[38px] font-medium text-center">
                Why Jovay?
              </h2>
              <div className="text-[#666F8D] text-sm md:text-lg text-center leading-[22px] md:leading-[27px] w-full md:w-[890px]">
                Jovay empowers developers to accelerate Web3 innovation with
                secure, compliant, and highly scalable infrastructure, providing
                trusted solutions for institutional clients.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-14">
              <div className="relative group w-full md:w-[645px] h-auto">
                <video
                  src="https://gw.alipayobjects.com/v/huamei_rqgebe/afts/video/lZOgTIkmLXcAAAAAmkAAAAgADlxJAQFr"
                  poster="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ZWn3TaJLZlgAAAAAgBAAAAgADlxJAQFr/original"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
                    title="Unmute"
                  >
                    <div className="relative">
                      <svg
                        viewBox="64 64 896 896"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-0.5 bg-white rotate-45 transform origin-center"></div>
                      </div>
                    </div>
                  </button>
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
                    title="Fullscreen"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-5 md:gap-0">
                <div className="flex items-start gap-4">
                  <Image
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NBKGSYvO_osAAAAATZAAAAgADlxJAQFr/original"
                    alt="why-jovay"
                    width={36}
                    height={36}
                    className="w-9"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black text-base md:text-2xl font-medium leading-6 md:leading-9">
                      Developer-Centric Infrastructure
                    </h3>
                    <div className="text-[#666F8D] text-sm md:text-base leading-[22px] md:leading-6">
                      Built for Developers: Accelerate Development, Optimize
                      Deployment
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Image
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KSpcS64E-rUAAAAATYAAAAgADlxJAQFr/original"
                    alt="why-jovay"
                    width={36}
                    height={36}
                    className="w-9"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black text-base md:text-2xl font-medium leading-6 md:leading-9">
                      Compliance Ecosystem
                    </h3>
                    <div className="text-[#666F8D] text-sm md:text-base leading-[22px] md:leading-6">
                      Comprehensive Compliance Ecosystem for Institutional
                      Clients
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Image
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/CJyiR5m3DgQAAAAATOAAAAgADlxJAQFr/original"
                    alt="why-jovay"
                    width={36}
                    height={36}
                    className="w-9"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black text-base md:text-2xl font-medium leading-6 md:leading-9">
                      AI-Optimized TEE-ZK Architecture
                    </h3>
                    <div className="text-[#666F8D] text-sm md:text-base leading-[22px] md:leading-6">
                      Enterprise-Grade Scalability, Zero-Trust Security &
                      AI-Powered Precision
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[url(https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/16FRRaXA4VQAAAAASqAAAAgADlxJAQFr/fmt.webp)] bg-no-repeat bg-cover py-6 md:py-[79px] w-full flex items-center justify-center mb-0 md:mb-24">
          <div className="w-full md:w-[1160px] flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-[60px]">
            <div className="w-full md:w-[30%] flex flex-col items-center md:items-start px-4 md:px-0 gap-4">
              <h1 className="text-black text-2xl md:text-[38px] font-medium">
                Jovay Network Dashboard
              </h1>
              <div className="text-[#666F8D] text-sm md:text-lg text-center md:text-left">
                Real-time statistics of the Jovay Layer2 mainnet, covering
                throughput, gas fees, locked assets, and transaction volume.
              </div>
              <div className="my-4 py-1 px-1 bg-linear-to-r from-[#326cff] to-[#6effff] rounded-full">
                <Link
                  href="https://explorer.jovay.io/l2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white rounded-full px-3 md:px-6 py-[15px] h-8 md:h-[52px] text-xs md:text-base relative"
                >
                  <span className="relative z-10 text-black">
                    View in Block Explorer
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-[85%] md:w-[70%] flex flex-wrap items-center gap-y-6 md:gap-y-20">
              {/* Block Height */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-2xl md:text-5xl font-semibold md:font-medium">
                    1,029,595
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm h-10 md:h-5 md:max-w-[160px]">
                  Block Height
                </div>
              </div>

              {/* Peak TPS */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-2xl md:text-5xl font-semibold md:font-medium">
                    1.2000
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm h-10 md:h-5 md:max-w-[160px]">
                  Peak TPS (Transactions Per Second)
                </div>
              </div>

              {/* TVL */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-2xl md:text-5xl font-semibold md:font-medium">
                    590.9028
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    M
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm h-10 md:h-5 md:max-w-[160px]">
                  TVL(USD)
                </div>
              </div>

              {/* Total Transactions */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-2xl md:text-5xl font-semibold md:font-medium">
                    0.0188
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    M
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm h-10 md:h-5 md:max-w-[160px]">
                  Total Transactions
                </div>
              </div>

              {/* Avg Block Time */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-2xl md:text-5xl font-semibold md:font-medium">
                    2.7597
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    S
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm h-10 md:h-5 md:max-w-[160px]">
                  Avg. Block Time
                </div>
              </div>

              {/* Current Gas Price */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-2xl md:text-5xl font-semibold md:font-medium">
                    0.0010
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    Gwei
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm h-10 md:h-5 md:max-w-[160px]">
                  Current Gas Price
                </div>
              </div>
            </div>
          </div>
        </section>

        <DeveloperSlider></DeveloperSlider>

        <section className="w-full flex items-center justify-center pb-16">
          <div className="py-4 px-8 md:py-0 md:px-24 w-full md:w-[1160px] flex flex-col gap-4">
            <h1 className="text-[#1D1E1E] text-2xl md:text-[38px] font-semibold text-center">
              Layer2 Architecture Overview
            </h1>
            <div className="text-[#666F8D] text-sm md:text-base text-center">
              Jovay is a high-performance, user-friendly Layer 2 scaling
              solution that aims to break through the scalability bottleneck of
              blockchain through innovative technologies while maintaining
              compatibility with the Ethereum ecosystem.
            </div>
            <Image
              className="w-full h-auto mt-[16px]!"
              src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/2zN2QomSBIQAAAAAgCAAAAgADlxJAQFr/original"
              alt="Layer2 Architecture Overview"
              width={1160}
              height={600}
            />
          </div>
        </section>

        <section className="w-full px-4 md:px-0 pt-6 md:pt-0 pb-12 md:pb-24 flex items-center justify-center bg-[url(https://mdn.alipayobjects.com/huamei_lc6ihc/afts/img/eA3zS4F7AZYAAAAAgBAAAAgADltnAQFr/original)] bg-size-[100%_auto] bg-position-[center_200px] sm:bg-position-[center_100px] md:bg-position-[center_-200px] bg-no-repeat">
          <div className="p-4 md:p-8 w-full md:w-[1160px] bg-black bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/gjPdQa52ZDQAAAAAULAAAAgADlxJAQFr/original')] md:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/gPj7QYA9ZIgAAAAARPAAAAgADlxJAQFr/fmt.webp')] bg-size-[100%_100%] md:bg-cover bg-center bg-no-repeat rounded-2xl flex flex-col gap-4">
            <h2 className="text-white text-2xl md:text-[38px] font-medium w-full md:w-[675px]">
              Tokenize Real-World Assets. Unlock Global Value.
            </h2>

            <div className="text-white opacity-85 text-sm md:text-lg">
              The compliant, high-performance Layer 2 for connecting real assets
              to global liquidity.
            </div>

            <div className="mt-4 flex flex-row items-start md:items-center gap-2.5 md:gap-9">
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="border-2 border-transparent bg-linear-to-r from-[#326CFF] to-[#8B5CF6] bg-clip-border h-9 md:h-[52px] rounded-[34px] md:rounded-[48px] relative before:absolute before:inset-[2px] before:bg-white before:rounded-[32px] md:before:rounded-[46px] before:-z-10">
                  <div className="relative z-10 flex items-center h-8 md:h-12 w-full rounded-[34px] md:rounded-[48px] border-none pl-6 bg-white">
                    <div className="flex items-center">
                      <svg
                        viewBox="64 64 896 896"
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                      >
                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Send your email"
                      className="flex-1 bg-transparent border-none outline-none text-black text-sm"
                    />
                    <button className="bg-linear-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white px-3 md:px-6 py-[15px] h-8 md:h-12 text-xs md:text-sm flex items-center gap-2 relative left-px hover:opacity-90 transition-opacity">
                      <span>Book a demo</span>
                      <svg
                        viewBox="64 64 896 896"
                        className="w-4 h-4"
                        fill="currentColor"
                      >
                        <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <Link
                href="/rwa"
                className="text-sm md:text-base font-medium text-white opacity-85 border-b border-white whitespace-nowrap hover:opacity-100 transition-opacity"
              >
                Explore RWA Solution
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white p-0 w-full">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="p-4.5 lg:px-0 lg:py-16 text-white bg-black flex justify-center items-center">
            <div className="w-[1160px] flex flex-col gap-8">
              <div className="flex flex-wrap items-start justify-between gap-16 lg:gap-24 xl:gap-32">
                <div className="flex flex-col gap-4">
                  <Image
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                    alt="jovay"
                    width={100}
                    height={40}
                    className="w-[100px] h-auto"
                  />
                  <div className="w-[300px] text-base opacity-50">
                    Powering the global RWA tokenization economy with a secure,
                    open, and modular Layer2 infrastructure that bridges Web2
                    and Web3.
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zH4qQ5bC0igAAAAAHHAAAAgADlxJAQFr/original"
                      alt="Email"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/5TiPRa_GIz4AAAAAAAAAAAAADlxJAQFr/original"
                      alt="Discord"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*M6r5R7zmbawAAAAAAAAAAAAADiOMAQ/original"
                      alt="X"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NAabSbq6MMwAAAAAAAAAAAAADlxJAQFr/original"
                      alt="Telegram"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>

                <div className="flex-1 flex justify-between">
                  <div className="text-white text-base flex flex-col gap-4">
                    <div className="font-semibold">Developer</div>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="/developer"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Developer Center
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="https://docs.jovay.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="https://smartcogent.jovay.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          SmartCogent
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="https://docs.jovay.io/guide/developer-quickstart#method-2-faucet-testnet-only"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Testnet Faucet
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all inline-flex items-center"
                          href="https://github.com/jovaynetwork"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>GitHub</span>
                          <svg
                            viewBox="64 64 896 896"
                            className="w-4 h-4 ml-1 -rotate-45"
                            fill="currentColor"
                          >
                            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="text-white text-base flex flex-col gap-4">
                    <div className="font-semibold">Ecosystem</div>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="/ecosystem"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Explore Ecosystem
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="https://bridge.jovay.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bridge
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="text-white text-base flex flex-col gap-4">
                    <div className="font-semibold">RWA</div>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="/rwa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          RWA on Jovay
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="/institutions-retention"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          For Institutions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="text-white text-base flex flex-col gap-4">
                    <div className="font-semibold">Resources</div>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="https://docs.jovay.io/guide/jovay-white-paper"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Whitepaper
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="/news"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          News
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="opacity-50 text-white hover:opacity-100 hover:bg-linear-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                          href="https://github.com/jovaynetwork/brand-kit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Brand Kit
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-6">
                <button className="bg-linear-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white px-6 py-1.5 md:py-[10px] text-xs md:text-base hover:opacity-90 transition-opacity">
                  Contact Us
                </button>

                <Link
                  href="https://discord.gg/vBxayT6SBw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-1 rounded-full bg-linear-to-r from-[#326CFF] to-[#6effff]"
                >
                  <div className="inline-flex items-center justify-center bg-black rounded-full text-[#326cff] px-6 py-[10px] text-base relative">
                    <span className="relative z-10 text-[#326CFF] ">
                      Join discord
                    </span>
                  </div>
                </Link>
              </div>

              <div className="h-px bg-white opacity-20 mb-0"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link
                    className="text-white hover:text-white"
                    href="https://docs.jovay.io/legal/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Services
                  </Link>
                  <div className="w-px h-[18px] bg-white opacity-40"></div>
                  <Link
                    className="text-white hover:text-white"
                    href="https://docs.jovay.io/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    className="text-white hover:text-white"
                    href="https://intl.antdigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ant Group Digital Technologies
                  </Link>
                  <div className="w-px h-5 bg-white opacity-40"></div>
                  <Link
                    className="text-white hover:text-white"
                    href="https://openlabs-intl.antdigital.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AntChain Open Lab
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm opacity-70">
                  @2025 Copyright by Jovay All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="block md:hidden">
          <div className="p-6 px-2 text-white bg-black flex flex-col items-start gap-6">
            <div className="w-full px-3 flex flex-col gap-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <Image
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                    alt="jovay"
                    width={78}
                    height={31}
                    className="w-[78px] h-auto"
                  />
                  <div className="w-[300px] text-sm opacity-50">
                    Powering the global RWA tokenization economy with a secure,
                    open, and modular Layer2 infrastructure that bridges Web2
                    and Web3.
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zH4qQ5bC0igAAAAAHHAAAAgADlxJAQFr/original"
                      alt="Email"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/5TiPRa_GIz4AAAAAAAAAAAAADlxJAQFr/original"
                      alt="Discord"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*M6r5R7zmbawAAAAAAAAAAAAADiOMAQ/original"
                      alt="X"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NAabSbq6MMwAAAAAAAAAAAAADlxJAQFr/original"
                      alt="Telegram"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <button className="bg-linear-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white px-6 py-1.5 h-[34px] text-xs hover:opacity-90 transition-opacity">
                  Contact Us
                </button>
                <Link
                  href="https://discord.gg/vBxayT6SBw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-transparent bg-linear-to-r from-[#326cff] to-[#6effff] bg-clip-border rounded-full text-[#326cff] px-6 py-1.5 h-[34px] text-xs relative before:absolute before:inset-[2px] before:bg-black before:rounded-full before:-z-10 hover:opacity-90 transition-opacity"
                >
                  <span className="relative z-10">Join discord</span>
                </Link>
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <div className="text-white text-sm flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span>Developer</span>
                    <div className="cursor-pointer text-[10px]">
                      <svg
                        viewBox="64 64 896 896"
                        className="w-3 h-3 text-[#8590A2]"
                        fill="currentColor"
                      >
                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-white text-sm flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span>Ecosystem</span>
                    <div className="cursor-pointer text-[10px]">
                      <svg
                        viewBox="64 64 896 896"
                        className="w-3 h-3 text-[#8590A2]"
                        fill="currentColor"
                      >
                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-white text-sm flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span>RWA</span>
                    <div className="cursor-pointer text-[10px]">
                      <svg
                        viewBox="64 64 896 896"
                        className="w-3 h-3 text-[#8590A2]"
                        fill="currentColor"
                      >
                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-white text-sm flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span>Resources</span>
                    <div className="cursor-pointer text-[10px]">
                      <svg
                        viewBox="64 64 896 896"
                        className="w-3 h-3 text-[#8590A2]"
                        fill="currentColor"
                      >
                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-white opacity-20 my-0 w-full"></div>

            <div className="flex flex-col gap-3">
              <div className="text-xs flex items-center gap-2">
                <Link
                  className="text-white hover:text-white"
                  href="https://docs.jovay.io/legal/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Services
                </Link>
                <div className="w-px h-4 bg-white opacity-40"></div>
                <Link
                  className="text-white hover:text-white"
                  href="https://docs.jovay.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
              </div>

              <div className="text-xs flex items-center gap-3">
                <Link
                  className="text-white hover:text-white"
                  href="https://intl.antdigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ant Group Digital Technologies
                </Link>
                <div className="w-px h-4 bg-white opacity-40"></div>
                <Link
                  className="text-white hover:text-white"
                  href="https://openlabs-intl.antdigital.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AntChain Open Lab
                </Link>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs opacity-70">
                  @2025 Copyright by Jovay All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

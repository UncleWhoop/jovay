'use client';

import Link from 'next/link';

export default function Footer() {
  
  return (
    <>
        <footer className="bg-white p-0 w-full">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="p-4.5 lg:px-0 lg:py-16 text-white bg-black flex justify-center items-center">
            <div className="w-[1160px] flex flex-col gap-8">
              <div className="flex flex-wrap items-start justify-between gap-16 lg:gap-24 xl:gap-32">
                <div className="flex flex-col gap-4">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                    alt="jovay"
                    className="w-[100px] h-auto"
                  />
                  <div className="w-[300px] text-base opacity-50">
                    Powering the global RWA tokenization economy with a secure,
                    open, and modular Layer2 infrastructure that bridges Web2
                    and Web3.
                  </div>
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zH4qQ5bC0igAAAAAHHAAAAgADlxJAQFr/original"
                      alt="Email"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/5TiPRa_GIz4AAAAAAAAAAAAADlxJAQFr/original"
                      alt="Discord"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*M6r5R7zmbawAAAAAAAAAAAAADiOMAQ/original"
                      alt="X"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NAabSbq6MMwAAAAAAAAAAAAADlxJAQFr/original"
                      alt="Telegram"
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
                  <img
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                    alt="jovay"
                    className="w-[78px] h-auto"
                  />
                  <div className="w-[300px] text-sm opacity-50">
                    Powering the global RWA tokenization economy with a secure,
                    open, and modular Layer2 infrastructure that bridges Web2
                    and Web3.
                  </div>
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zH4qQ5bC0igAAAAAHHAAAAgADlxJAQFr/original"
                      alt="Email"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/5TiPRa_GIz4AAAAAAAAAAAAADlxJAQFr/original"
                      alt="Discord"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*M6r5R7zmbawAAAAAAAAAAAAADiOMAQ/original"
                      alt="X"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NAabSbq6MMwAAAAAAAAAAAAADlxJAQFr/original"
                      alt="Telegram"
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
    </>
  );
}
import React, { Fragment } from 'react';
import './assets/styles/tailwind.css';
import logoBisnis from './assets/images/heros/logo_bisnis_top.png';
import logoIndonesiaMaju from './assets/images/heros/logo_indonesia_maju_top.png';
import videoThumb from './assets/images/heros/video_thumb.png';
import event1 from './assets/images/instagram_1/bg-img.png';
import event2 from './assets/images/instagram_2/bg-img.png';
import banner from './assets/images/banner/presiden.png';
import thumb1 from './assets/images/card_news/thumb-1.png';
import thumb2 from './assets/images/card_news/thumb-2.png';
import thumb3 from './assets/images/card_news/thumb-3.png';
import logoBankBtn from './assets/images/footers/logo-bank-btn.png';
import logoWaskita from './assets/images/footers/logo-waskita.png';
import logoInstagram from './assets/images/instagram_1/logo-ig.png';
import logoBisnisBottom from './assets/images/footers/logo-bisnis-bottom.png';

const App = () => {
  return (
    <Fragment> 
        <div className="bg-gray-100 h-screen max-w-full">
          <div id="hero" className="relative ">
            <div id="hero-shape" className="bg-hero-shape h-hero-shape-xs 2xl:h-hero-shape xl:h-hero-shape-xl lg:h-hero-shape-lg md:h-hero-shape-md sm:h-hero-shape-sm w-full relative z-0">
              <div id="hero-pattern" className="bg-hero-pattern bg-no-repeat h-full 2xl:bg-center lg:bg-contain sm:bg-center sm:bg-contain bg-center bg-cover relative z-10 w-full"> 

                <div className="relative container mx-auto py-2 px-6 2xl:px-28 xl:px-8 lg:py-6 lg:px-6 md:px-8 md:py-4 sm:py-3 sm:px-3 z-20">
                  <div className="grid grid-cols-12 ">
                    <div className="col-start-1 lg:col-end-2 md:col-end-3 col-end-4 h-6 w-full">
                      <img id="logo-bisnis" src={logoBisnis} alt="bisnis.com" className="object-contain h-full w-full"/>
                    </div>
                    <div className="col-start-10 col-end-13 sm:col-start-11 sm:col-end-23 h-16 w-full ">
                      <img id="logo-indonesia-maju" src={logoIndonesiaMaju} alt="indonesia-maju" className="object-contain object-right-top h-full w-full"/>
                    </div>
                  </div>
                  <div id="headline" className="2xl:mt-28 xl:mt-20 lg:mt-14 md:mt-8 sm:mt-8 mt-4">
                    <p className="font-tahu text-white text-center xl:text-8xl lg:text-7xl md:text-5xl sm:text-5xl text-4xl">Spirit Membangun Indonesia Maju !</p>
                  </div>
                  <div id="sub-headline" className="2xl:px-72 xl:px-64 lg:px-48 md:px-32 md:mt-10 lg:mt-10 sm:mt-5 sm:px-20 mt-4">
                    <p className="font-gotham text-white text-center xl:text-lg lg:text-sm md:text-xs sm:text-xs text-xs">
                      Di tengah pro kontra mengenai layak tidaknya Indonesia menyandang predikat negara maju, 
                      menjadi menarik untuk mengetahui seberapa jauh kemajuan yang dicapai setelah negara ini merdeka selama 75 tahun. 
                      Apa peluang dan tantangan Indonesia menjadi negara maju di saat wabah virus Corona bisa menyeret perekonomian nasional ke jurang resesi?
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="maincontent" className="container mx-auto transform -translate-y-32 2xl:-translate-y-80 xl:-translate-y-72 lg:-translate-y-60 md:-translate-y-52 sm:-translate-y-36">
            <div className="py-8 px-7 2xl:px-72 xl:px-52 lg:px-40 md:px-24 sm:px-24">
              <img id="video-thumb" src={videoThumb} alt="video-thumb" className=" mx-auto mb-4 rounded-md "/> 

              <div id="instagram" className=" relative grid lg:grid-cols-2 md:grid-cols-1 gap-4 xl:px-1 mb-4">
                <div>
                  <div className="grid grid-cols-1 transform translate-y-full relative z-10">
                      <img src={logoInstagram} alt="logo-instagram" className="mx-auto object-contain"/>
                  </div>
                  <img src={event1} alt="event-1" className="object-cover h-full w-full rounded-md relative z-0 -top-11"/>
                  
                </div>
                <div>
                  <div className="grid grid-cols-1 transform translate-y-full relative z-10">
                      <img src={logoInstagram} alt="logo-instagram" className="mx-auto object-contain"/>
                  </div>
                  <img src={event2} alt="event-2" className="object-cover h-full w-full rounded-md relative z-0 -top-11"/>

                </div>
              </div>

              <div id="banner" className="mb-4 ">
                <div className="bg-red-600 h-auto rounded-md">
                  <img src={banner} alt="event-1" className="object-cover h-full w-full xl:px-1"/>
                </div>
              </div>

              <div id="news" className="mb-4 ">
                <div className="grid grid-cols-2">
                  <div className="grid justify-items-start h-8 w-full">
                    <p className="font-bold text-lg">Berita <span className="text-red-600">Terkini</span></p>
                  </div>
                  <div className="grid justify-items-end h-8 w-full ">
                    Lihat berita lainnya
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 h-auto ">
                  <div>
                    <div className="bg-yellow-50 grid grid-cols-1 h-auto w-full rounded-md">
                      <div>
                        <img id="thumb-1" src={thumb1} alt="news-thumbnail-1" className="object-cover h-40 w-full"/>
                      </div>
                      <div className=" p-4">
                        <p className="text-gray-500 text-xs">12 Juli 2020</p>
                      </div>
                      <div className=" p-4">
                        <p className="text-red-600 text-base font-bold">
                          Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya
                        </p>
                      </div>
                      <div className=" p-4">
                        <p className="text-gray-800 text-sm">
                          Istana Kepresidenan menggelar latihan penaikan bendera merah putih untuk HUT ke-75 RI dengan petugas minimalis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 grid grid-cols-1 h-auto w-full rounded-md ">
                    <div>
                      <img id="thumb-2" src={thumb2} alt="news-thumbnail-2" className="object-cover h-40 w-full"/>
                    </div>
                    <div className=" p-4">
                      <p className="text-gray-500 text-xs">12 Juli 2020</p>
                    </div>
                    <div className=" p-4">
                      <p className="text-red-600 text-base font-bold">
                        Merah Putih di Puncak Dunia, 2 Srikandi Indonesia Tuntaskan Ekspedisi 7 ...
                      </p>
                    </div>
                    <div className=" p-4">
                      <p className="text-gray-800 text-sm">
                        Tim The Women of Indonesias Seven Summits Expedition Mahitala Unpar (WISSEMU) berhasil mengibarkan bendera Merah Putih di puncak...
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 grid grid-cols-1 h-auto w-full rounded-md ">
                    <div>
                      <img id="thumb-3" src={thumb3} alt="news-thumbnail-3" className="object-cover h-40 w-full"/>
                    </div>
                    <div className=" p-4">
                      <p className="text-gray-500 text-xs">12 Juli 2020</p>
                    </div>
                    <div className=" p-4">
                      <p className="text-red-600 text-base font-bold">
                        Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya
                      </p>
                    </div>
                    <div className=" p-4">
                      <p className="text-gray-800 text-sm">
                        Catat tanggalnya, 17 Agustus 2020 Pukul 10.17--10.20 WIB, waktunya menghentikan aktivitas sejenak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="sponsor" className="">
                <div className="p-2 h-10 grid grid-cols-1">  
                  <p className="text-center">Didukung oleh</p>
                </div>
                <div className="grid lg:grid-cols-7 grid-cols-1 p-4">
                  <div className="lg:col-start-3">
                    <img src={logoBankBtn} alt="logo-bank-btn" className="object-contain mx-auto"/>
                  </div>
                  <div className="lg:col-start-5">
                    <img src={logoWaskita} alt="logo-waskita" className="object-contain mx-auto"/>
                  </div>
                </div>
              </div>
            </div>

            <div id="footer">
              <div className="h-14 mx-28">
                <div className="grid grid-cols-9 pt-4 pb-8 border-t-2 border-gray-300 border-solid">
                  <div className="col-span-2 grid justify-items-start border-4">
                    <img src={logoBisnisBottom} alt="logo-bisnis" className="object-contain object-center"/>
                    <p className="mt-4 text-xs text-gray-500">Copyright © 2020 - Bisnis Indonesia</p>
                  </div>
                  <div className="border-4 grid place-content-center">
                    <p className="font-bold text-xs">About</p>
                  </div>
                  <div className="border-4 grid place-content-center">
                    <p className="font-bold text-xs">Privacy Policy</p>
                  </div>
                  <div className="border-4 grid place-content-center">
                    <p className="font-bold text-xs">Code of Conduct</p>
                  </div>
                  <div className="border-4 grid place-content-center">
                    <p className="font-bold text-xs">Advertise with us</p>
                  </div>
                  <div className=" border-4 grid place-content-center">
                    <p className="font-bold text-xs">Contact Us</p>
                  </div>
                  <div className="border-4 grid place-content-center">
                    <p className="font-bold text-xs">Career</p>
                  </div>
                  <div className="border-4 grid place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <p className="text-xs text-gray-500">To top</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;

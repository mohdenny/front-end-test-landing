import React from "react";

const CardNews = () => {
    return(
        <div id="card-news" className="grid grid-cols-12 border-8 border-solid border-gray-800 mb-8">
            <div id="news-body" className="col-start-3 col-end-4 border-8 border-solid border-gray-800">
                <p className="font-bold">Berita <span className="text-red-700">Terkini</span></p>
            </div>
            <div id="news-body" className="col-start-9 col-end-11 grid grid-cols-2 border-8 border-solid border-gray-800">
                <p className="text-gray-500 text-sm font-semibold">Lihat Berita Lainnya</p>
                <div className="bg-arrow-right bg-no-repeat my-auto bg-contain h-arrow-right"></div>
            </div>
            <div id="news-body" className="col-start-3 col-end-11 grid grid-cols-3 border-gray-800">
                <div id="news-1" className="bg-card-news bg-contain bg-no-repeat h-card-news border-gray-800">
                    <div id="thumb-1" className="bg-thumb-1 bg-contain bg-no-repeat h-thumb border-gray-800">
                    </div>
                    <div id="date" className="px-4 pt-4 font-thin text-sm">
                        12 Juli 2020
                    </div>
                    <div id="text" className="grid grid-rows-2 h-auto gap-4 p-4">
                        <div id="title" className="font-bold text-xl text-red-700">
                            Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya 
                        </div>
                        <div id="caption" className="text-md">
                            Istana Kepresidenan menggelar latihan penaikan bendera merah putih untuk HUT ke-75 RI dengan petugas minimalis.
                        </div>
                    </div>
                </div>
                <div id="news-2" className="bg-card-news bg-contain bg-no-repeat h-card-news border-gray-800">
                    <div id="thumb-2" className="bg-thumb-2 bg-contain bg-no-repeat h-thumb border-gray-800">
                    </div>
                    <div id="date" className="px-4 pt-4 font-thin text-sm">
                        12 Juli 2020
                    </div>
                    <div id="text" className="grid grid-rows-2 h-auto p-4">
                        <div id="title" className="font-bold text-xl">
                            Merah Putih di Puncak Dunia, 2 Srikandi Indonesia Tuntaskan Ekspedisi 7 ... 
                        </div>
                        <div id="caption" className="text-md">
                            Tim The Women of Indonesias Seven Summits Expedition Mahitala Unpar (WISSEMU) berhasil mengibarkan bendera Merah Putih di puncak...
                        </div>
                    </div>
                </div>
                <div id="news-3" className="bg-card-news bg-contain bg-no-repeat h-card-news border-gray-800">
                    <div id="thumb-3" className="bg-thumb-3 bg-contain bg-no-repeat h-thumb border-gray-800">
                    </div>
                    <div id="date" className="px-4 pt-4 font-thin text-sm">
                        12 Juli 2020
                    </div>
                    <div id="text" className="grid grid-rows-2 gap-4 h-auto p-4">
                        <div id="title" className="font-bold text-xl">
                            Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya
                        </div>
                        <div id="caption" className="text-lg">
                            Catat tanggalnya, 17 Agustus 2020 Pukul 10.17--10.20 WIB, waktunya menghentikan aktivitas sejenak.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNews;
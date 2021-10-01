import React, { Fragment } from 'react';
import thumb1 from '../../assets/images/card_news/thumb-1.png';
import thumb2 from '../../assets/images/card_news/thumb-2.png';
import thumb3 from '../../assets/images/card_news/thumb-3.png';

const News = () => {
    return (
        <Fragment>
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
                    <div className="bg-yellow-50 grid grid-cols-1 h-auto w-full rounded-md">
                        <div>
                            <img id="thumb-1" src={thumb2} alt="news-thumbnail-1" className="object-cover h-40 w-full"/>
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
                    <div className="bg-yellow-50 grid grid-cols-1 h-auto w-full rounded-md">
                        <div>
                            <img id="thumb-1" src={thumb3} alt="news-thumbnail-1" className="object-cover h-40 w-full"/>
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
        </Fragment>
    )
}

export default News;